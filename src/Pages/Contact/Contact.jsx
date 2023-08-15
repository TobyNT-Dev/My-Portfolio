import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faGear, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  const [formSwitch, setFormSwitch] = useState(false)
  const form = useRef()
  
  const handleSubmit = (e) => {
    setFormSwitch("loading")

    e.preventDefault()
    emailjs.sendForm('service_82def8w', 'template_qbgw4ju', form.current, 'XV1yfyw3OGg7vRXyr')
      .then((result) => {
        // console.log(result)
        setFormSwitch(true)
        sessionStorage.setItem("form_handler", "true")
      }, (error) => {
        // console.log(error.text)
        setFormSwitch("error")
    })
  }
  return (
    <>
    {(!formSwitch && !sessionStorage.getItem("form_handler")) ? <StyledForm>
      <h1>Kontakt mig<span>|</span></h1>
      <form ref={form} id="contact-form" onSubmit={handleSubmit}>
        <label>Navn</label>
        <input required type="text" name="fullname"/>
        <label>E-mail</label>
        <input required type="email" name="email"/>
        <label>Besked</label>
        <textarea required name="message"></textarea>
        <input className="submit" type="submit" value="Send" />
      </form>
    </StyledForm>
    : <StyledResponse>
      {formSwitch !== "loading" ? (formSwitch !== "error" ? (
        <>
      <h2>Beskeden blev sent afsted!</h2>
      <h3>Du vil modtage et automatisk svar på din email. Tjek venligst din spam folder, nogen gange ender den der.</h3>
      <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
        </>
        )  : (
          <>
        <h2>Beskeden kunne ikke sendes...</h2>
        <h3>Prøv igen, eller kontakt mig direkte på thymusiker@gmail.com</h3>
        <FontAwesomeIcon className="x-icon" icon={faCircleXmark} />
          </>
        )) : (
        <>
          <h2>Loading...</h2>
          <FontAwesomeIcon className="loading-icon" icon={faGear} />
          </>
          )}
      </StyledResponse>
      }
    </>
  )
}

const StyledResponse = styled.div`
  @keyframes moveX {
    0% { opacity: 0.6; transform: rotateZ(0deg); filter: drop-shadow( 0px 0px 0px ${(props) => props.theme.colors.primary}) }
    60% { opacity: 0.7; transform: rotateZ(360deg); filter: drop-shadow( 0px 0px 0px ${(props) => props.theme.colors.primary}) }
    75% { opacity: 0.9; transform: rotateZ(360deg); filter: drop-shadow( 0px 0px 3px ${(props) => props.theme.colors.primary}) }
    100% { opacity: 0.6; transform: rotateZ(360deg); filter: drop-shadow( 0px 0px 0px ${(props) => props.theme.colors.primary}) }
  }
  @keyframes moveCheck {
    0% { opacity: 0.6; transform: rotateZ(0deg); filter: drop-shadow( 0px 0px 0px ${(props) => props.theme.colors.secondary}) }
    60% { opacity: 0.7; transform: rotateZ(360deg); filter: drop-shadow( 0px 0px 0px ${(props) => props.theme.colors.secondary}) }
    75% { opacity: 0.9; transform: rotateZ(360deg); filter: drop-shadow( 0px 0px 3px ${(props) => props.theme.colors.secondary}) }
    100% { opacity: 0.6; transform: rotateZ(360deg); filter: drop-shadow( 0px 0px 0px ${(props) => props.theme.colors.secondary}) }
  }
  @keyframes moveLoading {
    0% { opacity: 0.6; transform: rotateZ(0deg); filter: drop-shadow( 0px 0px 0px ${(props) => props.theme.colors.secondary}) }
    50% { opacity: 0.9; transform: rotateZ(180deg); filter: drop-shadow( 0px 0px 5px ${(props) => props.theme.colors.secondary}) }
    100% { opacity: 0.6; transform: rotateZ(360deg); filter: drop-shadow( 0px 0px 0px ${(props) => props.theme.colors.secondary}) }
  }
@media only screen and (min-width: 600px) {
  text-align: center;
  height: 10vw;
  margin: 2vw auto;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  border-radius: 5px;
  border-top: ${(props) => props.theme.colors.secondary} 2px solid;
  border-left: ${(props) => props.theme.colors.secondary} 2px solid;
  background-color: ${(props) => props.theme.colors.cardBackground};
  box-shadow: black 5px 5px 12px;
  width: 31vw;
  padding: 1vw;
  h2 {
    display: inline-block;
    height: 2vw;
    font-size: 1.5vw;
  }
  h3 {
    display: inline-block;
    font-size: 1vw;
  }
  .x-icon {
    transform-box: fill-box;
    transform-origin: center;
    animation: moveX 3000ms ease-in-out infinite;
    width: 2.5vw;
    height: 2.5vw;
    margin: 1vw auto;
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
  .check-icon {
    transform-origin: center;
    animation: moveCheck 3000ms ease-in-out infinite;
    width: 2.5vw;
    height: 2.5vw;
    margin: 1vw auto;
    path {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
  .loading-icon {
    margin: 1vw auto;
    animation: moveLoading 2000ms linear infinite;
    width: 2.5vw;
    height: 2.5vw;
    transform-origin: 1.18vw 1.25vw;
    path {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
}
@media only screen and (max-width: 600px) {
  text-align: center;
  height: 40vw;
  margin: 2vw auto;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  border-radius: 5px;
  border-top: ${(props) => props.theme.colors.secondary} 2px solid;
  border-left: ${(props) => props.theme.colors.secondary} 2px solid;
  background-color: ${(props) => props.theme.colors.cardBackground};
  box-shadow: black 5px 5px 12px;
  width: 90vw;
  padding: 1vw;
  h2 {
    margin-top: 2vw;
    display: inline-block;
    height: 2vw;
    font-size: 5vw;
  }
  h3 {
    margin-top: 2vw;
    margin-bottom: 2vw;
    display: inline-block;
    font-size: 4vw;
  }
  .x-icon {
    transform-box: fill-box;
    transform-origin: center;
    animation: moveX 3000ms ease-in-out infinite;
    width: 12vw;
    height: 12vw;
    margin: 1vw auto;
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
  .check-icon {
    transform-origin: center;
    animation: moveCheck 3000ms ease-in-out infinite;
    width: 12vw;
    height: 12vw;
    margin: 1vw auto;
    path {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
  .loading-icon {
    margin: 10vw auto 0 auto;
    animation: moveLoading 2000ms linear infinite;
    width: 12vw;
    height: 12vw;
    transform-origin: 6vw 6vw;
    path {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
}
`






const StyledForm = styled.div`
@keyframes blink {
  0% {color: rgba(255, 255, 255, 1);}
  49% {color: rgba(255, 255, 255, 1);}
  50% {color: rgba(255, 255, 255, 0);}
  100% {color: rgba(255, 255, 255, 0);}
}
@media only screen and (min-width: 600px) {
  margin: 2vw auto;
  h1 {
    margin: 1vw 0;
    span {
      animation: blink linear infinite 1s;
    }
  }
  form {
    border-radius: 5px;
    border-top: ${(props) => props.theme.colors.secondary} 2px solid;
    border-left: ${(props) => props.theme.colors.secondary} 2px solid;
    background-color: ${(props) => props.theme.colors.cardBackground};
    box-shadow: black 5px 5px 12px;
    display: grid;
    width: 31vw;
    padding: 1vw;
    label {
      font-size: 1.1vw;
      margin: 0.25vw;
    }
    textarea {
      margin: 0.25vw;
      font-size: 1.1vw;
      resize: none;
      border: none;
      border-radius: 3px;
      background-color: white;
      font-family: 'Cabin', sans-serif;
    }
    input {
      margin: 0.25vw;
      font-size: 1.1vw;
      border: none;
      border-radius: 3px;
      background-color: white;
    }
    .submit {
      width: 3vw;
      margin: 0.8vw auto 0vw auto;
      color: #000000;
      width: 50%;
      text-align: center;
      transition: 200ms;
      font-size: 1.2vw;
      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.secondary};
      }
    }
  }}

  @media only screen and (max-width: 600px) {
    margin: 2vw auto;
  h1 {
    text-align: center;
    margin: 1vw 0;
    span {
      animation: blink linear infinite 1s;
    }
  }
  form {
    border-radius: 5px;
    border-top: ${(props) => props.theme.colors.secondary} 2px solid;
    border-left: ${(props) => props.theme.colors.secondary} 2px solid;
    background-color: ${(props) => props.theme.colors.cardBackground};
    box-shadow: black 5px 5px 12px;
    display: grid;
    width: 90vw;
    padding: 3vw;
    label {
      font-size: 5.5vw;
      margin: 1vw;
    }
    textarea {
      margin: 0.25vw;
      font-size: 5vw;
      resize: none;
      border: none;
      border-radius: 3px;
      background-color: white;
      font-family: 'Cabin', sans-serif;
      height: 6vw;
    }
    input {
      margin: 0.25vw;
      font-size: 5vw;
      border: none;
      border-radius: 3px;
      background-color: white;
    }
    .submit {
      width: 3vw;
      margin: 2vw auto 0vw auto;
      color: #000000;
      width: 50%;
      text-align: center;
      transition: 200ms;
      font-size: 5.5vw;
      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.secondary};
      }
    }
  }
  }
`
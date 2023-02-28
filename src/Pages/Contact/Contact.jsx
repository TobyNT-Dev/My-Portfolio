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
      }, (error) => {
        // console.log(error.text)
        setFormSwitch("error")
    })
  }
  return (
    <>
    {!formSwitch ? <StyledForm>
      <h1>Contact me</h1>
      <form ref={form} id="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input required type="text" name="fullname"/>
        <label>Email</label>
        <input required type="email" name="email"/>
        <label>Message</label>
        <textarea required name="message"></textarea>
        <input className="submit" type="submit" value="Send" />
      </form>
    </StyledForm> 
    : <StyledResponse>
      {formSwitch !== "loading" ? (formSwitch !== "error" ? (
        <>
      <h2>Message was sent successfully!</h2>
      <h3>You will receive an auto-reply email. Please Check your spam folder, sometimes it ends up there.</h3>
      <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
        </>
        )  : (
          <>
        <h2>Message failed to be sent...</h2>
        <h3>Try again, or contact me directly at thymusiker@gmail.com</h3>
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
  }
  h3 {
    display: inline-block;
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
`
const StyledForm = styled.div`
margin: 2vw auto;
h1 {
  margin: 1vw 0;
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
  .submit {
    color: white;
    width: 50%;
    text-align: center;
    transition: 200ms;
    text-shadow: 0px 0px 0px #000;
    font-size: 1.2vw;
    &:hover {
      transition: 200ms;
      color: ${props => props.theme.colors.primary};
      text-shadow: 0px 0px 10px ${props => props.theme.colors.primary};
    }
  }
}
}
`
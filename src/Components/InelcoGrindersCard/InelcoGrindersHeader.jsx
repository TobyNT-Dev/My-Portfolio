import React, { useEffect, useState } from 'react'

//gallery imports
import Img1 from '../../Assets/Images/InelcoGrinders/InelcoHeadquarters.jpg'

//logo imports
import Logo1 from '../../Assets/Images/InelcoGrinders/InelcoGrindersLogo.png'


import styled from 'styled-components'

export const InelcoGrindersHeader = () => {
    const [top, setTop] = useState(0);
    

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const parallaxLoop = setTimeout(() => {
            setTop(() => (window.scrollY + 200))
        },)
        return () => {
            clearTimeout(parallaxLoop);
        }
        });
    }, []);

  return (
    <>
    <StyledInelcoGrindersHeader>
        <img className="logo" src={Logo1} alt="Veloren Game Logo 1" />
        <div className="img-container">
            <StyledImg back={Img1} top={top}></StyledImg>
        </div>
    </StyledInelcoGrindersHeader>
    </>
  )
}

const StyledImg = styled.div.attrs(props => ({
    style: {
        transform: `translateY(-${props.top/2}px)`
    }
}))`
transition: background-image 0.5s ease-in-out;
background-image: url(${props => props.back});
position: absolute;
width: 100vw;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
top: 15vw;
`

const StyledInelcoGrindersHeader = styled.div`
    display: grid;
    grid-template-columns: auto;
    .logo {
        filter: drop-shadow(0 0 15px black);
        position: absolute;
        display: block;
        margin: 1vw 25vw;
        width: 50vw;
        z-index: 10;
    }
    .img-container {
        height: 27vw;
        width: 100%;
        position: relative;
        overflow: hidden;
    }
@media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: auto;
    .logo {
        filter: drop-shadow(0 0 15px black);
        position: absolute;
        display: block;
        margin: 3vw 37.5vw;
        width: 25vw;
        z-index: 10;
    }
    .img-container {
        height: 17vw;
        width: 100%;
        position: relative;
        overflow: hidden;
    }
}
`
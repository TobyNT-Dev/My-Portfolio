import React, { useEffect, useState } from 'react'

//gallery imports
import Img1 from '../../Assets/Images/Veloren/Screenshots/img1.jpg'
import Img2 from '../../Assets/Images/Veloren/Screenshots/img2.jpg'
import Img3 from '../../Assets/Images/Veloren/Screenshots/img3.jpg'
import Img4 from '../../Assets/Images/Veloren/Screenshots/img4.jpg'
import Img5 from '../../Assets/Images/Veloren/Screenshots/img5.jpg'
import Img6 from '../../Assets/Images/Veloren/Screenshots/img6.jpg'
import Img7 from '../../Assets/Images/Veloren/Screenshots/img7.jpg'
import Img8 from '../../Assets/Images/Veloren/Screenshots/img8.jpg'
import Img9 from '../../Assets/Images/Veloren/Screenshots/img9.jpg'
import Img10 from '../../Assets/Images/Veloren/Screenshots/img10.jpg'
import Img11 from '../../Assets/Images/Veloren/Screenshots/img11.jpg'
import Img12 from '../../Assets/Images/Veloren/Screenshots/img12.jpg'
import Img13 from '../../Assets/Images/Veloren/Screenshots/img13.jpg'

//logo imports
import Logo1 from '../../Assets/Images/Veloren/Logos/veloren_logo_full.png'


import styled from 'styled-components'

export const VelorenHeader = () => {
    const imagesArr = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13]
    const [imgIndex, setImgIndex] = useState(0)
    const [back, setBack] = useState(imagesArr[imgIndex]);
    
    const [top, setTop] = useState(0);
    
    useEffect(() => {
        const imgLoop = setInterval(() => {
            if (imgIndex < 12) {
                setImgIndex(state => state + 1)
                setBack(imagesArr[imgIndex])
            }
            else {
                setImgIndex(0)
                setBack(imagesArr[imgIndex])
            }
        }, 10000)
        return () => {
            clearInterval(imgLoop)
        }
    },[imagesArr[imgIndex]])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const parallaxLoop = setTimeout(() => {
            setTop(() => window.scrollY)
        },)
        return () => {
            clearTimeout(parallaxLoop);
        }
        });
    }, []);

  return (
    <>
    <StyledVelorenHeader>
        <img className="logo" src={Logo1} alt="Veloren Game Logo 1" />
        <div className="img-container">
            <StyledImg top={top} back={back}></StyledImg>
        </div>
    </StyledVelorenHeader>
    </>
  )
}

const StyledImg = styled.div.attrs(props => ({
    style: {
        transform: `translateY(-${props.top/2}px)`,
        backgroundImage: `url(${props.back})`
    }
}))`
transition: background-image 0.5s ease-in-out;
position: absolute;
width: 100vw;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

const StyledVelorenHeader = styled.div`

display: grid;
grid-template-columns: auto;

.logo {
    filter: drop-shadow(0 0 15px black);
    position: absolute;
    display: block;
    margin: 5vw 37.5vw;
    width: 25vw;
    z-index: 10;
}
.img-container {
    height: 17vw;
    width: 100%;
    position: relative;
    overflow: hidden;
}
`
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
    const [child, setChild] = useState(1)

    const [top, setTop] = useState(0);
    
    useEffect(() => {
        const imgLoop = setInterval(() => {
            if (child < 12) {
                setChild(state => state + 1)
            }
            else {
                setChild(1)
            }
        }, 10000);
        return () => {
            clearInterval(imgLoop);
            console.log(child)
        }
    },[child])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setTop(window.scrollY);
        });
    }, []);

  return (
    <>
    <StyledVelorenHeader top={`${top}`} imageChild={`${child}`}>
        <img className="logo" src={Logo1} alt="Veloren Game Logo 1" />
        <div className="img-container">
            {imagesArr.map((image, i) => {return <img src={image} alt={"Veloren Videogame Screenshot image number " + (i + 1)} key={i} />})}
        </div>
    </StyledVelorenHeader>
    </>
  )
}

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
    img {
        opacity: 0;
        position: absolute;
        transition: opacity 800ms;
        :nth-child(${props => props.imageChild}) {
            transform: translateY(-${props => props.top}px);
            opacity: 1;
        }
    }
}
`
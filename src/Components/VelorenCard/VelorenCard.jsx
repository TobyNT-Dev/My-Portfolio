import styled from 'styled-components'
import { RowContainer } from '../Sections/RowContainer'
import { VelorenHeader } from './VelorenHeader'
import audio from "../../Assets/Audio/the-quiet-after-the-battle.wav"
import { useState } from 'react'

export const VelorenCard = () => {
    const [expand, setExpand] = useState(false)
    const handleExpand = () => {
        setExpand((state) => !state)
    }
  return (
    <StyledVelorenCard>
        <VelorenHeader />
        <RowContainer>
        <h1 className="v-title">Musikproduktion & Lydeffektdesign</h1>
        {expand ? 
        <><h2 onClick={handleExpand}>Skjul artikel ↑</h2>
        <figure>
            <figcaption className="section-1">
                <p>Veloren er et Open Source videospil som har et fantastisk fællesskab af udviklere, der arbejder på spillet i deres fritid. Spillet inspirerede mig rigtigt meget, så jeg komponerede og producerede et soundtrack kaldet "The Quiet After the Battle", som senere blev tilføjet til spillet.</p>
                <p>Jeg arbejdede også på nogle lydeffekter til spillet, men disse er endnu ikke implementeret.</p>
                <a target="_blank" href="https://veloren.net">Læs mere om Veloren</a>
            </figcaption>
            <div className="section-2">
                <p>Soundtracket er meget beroligende, derfor besluttede jeg sammen med musik- og lydproduktions holdet, at musikken kun skulle spilles om natten i de mange byer og landsbyer spredt ud over Velorens verden.</p>
                <p>Du kan høre soundtracket på<a target="_blank" href="https://youtu.be/yNxxCwwKyes?t=7269"> Velorens youtube kanal</a>, eller på <a target="_blank" href="https://soundcloud.com/thyofficial/47h2349e17a815?si=f07865396d2c400d980d4acbdeeb5d22&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">Soundcloud</a> - eller lige her ↓</p>
                <audio src={audio} controls={true}/>
            </div>
        </figure></> : <h2 onClick={handleExpand}>Udvid artikel ↓</h2>}
        </RowContainer>
    </StyledVelorenCard>
  )
}

const StyledVelorenCard = styled.article`
@media only screen and (max-width: 600px) {
    margin-top: 6vw;
    margin-bottom: 10vw;
    .v-title {
        font-size: 6vw;
        margin: 1.5vw 0;
        text-align: center;
    }
    text-align: center;
    h2 {
        font-size: 6vw;
        margin: 1vw auto;
        cursor: pointer;
        display: inline-block;
        text-shadow: 0px 0px 0px ${props => props.theme.colors.primary};
        transition: 200ms;
        color: ${props => props.theme.colors.primary};
        transition: 200ms;
        &:hover{
            text-shadow: 0px 0px 5px ${props => props.theme.colors.primary};
        }
    }
figure {
    figcaption {
        margin: 1vw auto;
        width: 100%;
        p {
            width: 90%;
            margin: 10vw auto;
            font-family: 'Cabin', sans-serif;
            font-size: 5vw;
            letter-spacing: 2px;
            text-align: center;
        }
        a {
            width: 90%;
            text-align: center;
            color: ${props => props.theme.colors.primary};
            font-family: 'Cabin', sans-serif;
            font-size: 6vw;
            font-weight: 800;
            margin: 1vw auto;
            display: block;
        }
    }
    .section-2 {
        p {
            text-align: center;
            width: 90%;
            margin: 10vw auto;
            font-family: 'Cabin', sans-serif;
            font-size: 5vw;
            letter-spacing: 2px;
        }
        a {
            text-align: center;
            color: ${props => props.theme.colors.primary};
            font-family: 'Cabin', sans-serif;
            font-size: 5vw;
            font-weight: 800;
        }
        audio {
            filter: grayscale(100%);
            height: 10vw;
            width: 90%;
            margin-top: 1vw;
        }
    }
}
}
@media only screen and (min-width: 600px) {
margin-top: 6vw;
margin-bottom: 10vw;
.v-title {
    font-size: 1.8vw;
    margin: 1.5vw 0;
    text-align: center;
}
text-align: center;
h2 {
    font-size: 1.5vw;
    margin: -1vw auto 1vw auto;
    cursor: pointer;
    display: inline-block;
    text-shadow: 0px 0px 0px ${props => props.theme.colors.primary};
    transition: 200ms;
    color: ${props => props.theme.colors.primary};
    transition: 200ms;
    &:hover{
        text-shadow: 0px 0px 5px ${props => props.theme.colors.primary};
    }
}
figure {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2vw;
    figcaption {
        width: 100%;
        margin: 0;
        p {
            margin-bottom: 1.5vw;
            font-family: 'Cabin', sans-serif;
            font-size: 1.2vw;
            letter-spacing: 2px;
        }
        a {
            color: ${props => props.theme.colors.primary};
            font-family: 'Cabin', sans-serif;
            font-size: 1.2vw;
            font-weight: 800;
        }
    }
    .section-2 {
        p {
            margin-bottom: 2.6vw;
            font-family: 'Cabin', sans-serif;
            font-size: 1.2vw;
            letter-spacing: 2px;
        }
        a {
            color: ${props => props.theme.colors.primary};
            font-family: 'Cabin', sans-serif;
            font-size: 1.2vw;
            font-weight: 800;
        }
        audio {
            filter: grayscale(100%) invert(100%);
            height: 2.5vw;
            width: 100%;
        }
    }
}
}
`
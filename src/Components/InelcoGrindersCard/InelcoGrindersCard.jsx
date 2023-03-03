import styled from 'styled-components'
import { RowContainer } from '../Sections/RowContainer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { InelcoGrindersHeader } from './InelcoGrindersHeader'

export const InelcoGrindersCard = () => {
    const [expand, setExpand] = useState(false)
    const handleExpand = () => {
        setExpand((state) => !state)
    }
  return (
    <StyledInelcoGrindersCard>
        <InelcoGrindersHeader />
        <RowContainer>
        <h1 className="v-title">Scalable Vector Graphics Animation Loop</h1>
        {expand ? 
        <><h2 onClick={handleExpand}>Hide full article ↑</h2>
        <figure>
            <figcaption className="section-1">
                <p>For Inelco Grinders A/S, I animated an existing SVG design, on their page, to add some more movement on that part of the page.</p>
                <p>It is located on the front page of their website, right below the top element.</p>
                <a target="_blank" href="https://inelco-grinders.com">See it for yourself!</a>
            </figcaption>
            <div className="section-2">
                <p>It was fun to work on visuals, and delve deep into the amazing world of SVG animation.</p>
                <p>There are so many possibilities, and so many awesome things that can be done, to make a website more fun, and exciting to visit.</p>
            </div>
        </figure></> : <h2 onClick={handleExpand}>Expand full article ↓</h2>}
        </RowContainer>
    </StyledInelcoGrindersCard>
  )
}

const StyledInelcoGrindersCard = styled.article`
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
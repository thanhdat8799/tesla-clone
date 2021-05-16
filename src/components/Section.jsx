import React from 'react'
import styled from 'styled-components'

function Section({title, bgImg, description, leftBtnText, rightBtnText}) {
    return (
        <div className="section">
            <Wrapper bgImg={bgImg}>
                <ItemText>
                    <h1>{title}</h1>    
                    <span>{description}</span>
                </ItemText>
                <div className="buttons">
                    <ButtonGroup>
                        <ButtonLeft>{leftBtnText}</ButtonLeft>
                        {rightBtnText &&
                        <ButtonRight>{rightBtnText}</ButtonRight>}
                    </ButtonGroup>
                    <DownArrow id="downArrow" src='./images/down-arrow.svg' />
                </div>
               
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: ${props => `url('./images/${props.bgImg}')` };
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
`

const ItemText = styled.div`
    color: #322626;
    text-transform: capitalize;
    span {
        font-size: 16px;
        font-weight: light;
        opacity: 0.7;
    
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width:700px){
        flex-direction: column;
    }
`
const ButtonLeft = styled.div`
    color: white;
    height: 30px;
    width: 250px;
    font-size: 12px;
    background: #1d1c1c;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.9;
    margin: 20px;
    border-radius: 50px;
    text-transform: uppercase;
    cursor: pointer;
`
const ButtonRight = styled(ButtonLeft)`
    background: white;
    color: #282626;
`
const DownArrow = styled.img`
    height: 30px;
    animation: downArrow infinite 1.5s;
    @keyframes downArrow {
        0%, 50%, 100% {
            transform: translateY(0);
        }
        35% {
            transform: translateY(5px);
        }
        60% {
            transform: translateY(5px);
        }
    }
`
export default Section

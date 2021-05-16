import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'

function Header() {
    return (
        <Container>
            <a>
                <img src='./images/logo.svg' alt=''  />
            </a>
            <Menu>
                <p><a href="">Model S</a></p>
                <p><a href="">Model 3</a></p>
                <p><a href="">Model y</a></p>
                <p><a href="">Model X</a></p>
            </Menu>
            <RightMenu> 
                <a href="">Shop</a>
                <a href="">Tesla Account</a>
                <CustomMenu></CustomMenu>
            </RightMenu>

        </Container>
    )
}
 
const Container = styled.div`
    min-height: 50px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    left: 0;
    right: 0;
    top: 0;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    p {
        font-weight: 400;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 700px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        margin-right: 10px; 
        font-weight: 400;
        text-transform: uppercase;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
export default Header

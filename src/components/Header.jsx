import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

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
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <SideNav show={burgerStatus} >
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                
                <li><a href="">Available Inventories</a></li>
                <li><a href="">Unavailable Inventories</a></li>
                <li><a href="">Used Inventories</a></li>
                <li><a href="">Trade in Inventories</a></li>
                <li><a href="">CPO Inventories</a></li>

            </SideNav>
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
    z-index: 1;
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

const SideNav = styled.div`
    background: white;
    width: 300px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    list-style: none;
    display: flex;
    padding: 20px;
    align-items: start;
    flex-direction: column;
    transition: .8s;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        width: 100%;
        text-align: left;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper =  styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

export default Header

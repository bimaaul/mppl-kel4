import React from 'react'
import {FaBars} from 'react-icons/fa'
import Logo from "./logo.png"
import { 
    Nav, 
    NavbarContainer, 
    NavLogo,  
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
  } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <div to="/home">
                        <img src={ Logo }  />
                    </div>
                    
                    
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="tentang">Tentang Kami</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/projek">Projek Kami</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="anggota">Anggota</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="testimoni">Testimoni</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/hubungi">Hubungi Kami</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            
        </div>
    )
}

export default Navbar

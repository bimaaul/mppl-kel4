import React from 'react'
import { 
    CloseIcon, 
    Icon, 
    SidebarContainer, 
    SidebarLink, 
    SidebarMenu, 
    SidebarRoute, 
    SidebarWrapper, 
    SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu to='#'>
          <SidebarLink to="tentang" onClick={toggle}>
            Tentang Kami
          </SidebarLink>
          <SidebarLink to="projek" onClick={toggle}>
            Projek Kami
          </SidebarLink>
          <SidebarLink to="anggota" onClick={toggle}>
            Anggota
          </SidebarLink>
          <SidebarLink to="testimoni" onClick={toggle}>
            Testimoni
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute>Hubungi Kami</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
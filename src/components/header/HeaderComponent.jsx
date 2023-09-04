import React from 'react'
import { MdPerson } from 'react-icons/md'
import * as Styled from './headerComponent.style'


export const HeaderComponent = () => {
  return (
   <Styled.Header data-testid ='header' >
    <Styled.Logo data-testid ='logo'>
        My<span>Todo</span>App
    </Styled.Logo>
    <Styled.ProfileContainer>
        <Styled.ProfileIcon>
            <MdPerson/>
        </Styled.ProfileIcon>
        <p data-testid ='userName'>Rafael Silva</p>
    </Styled.ProfileContainer>
   </Styled.Header>
  )
}

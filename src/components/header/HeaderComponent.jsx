import React from 'react'
import { MdPerson } from 'react-icons/md'
import * as Styled from './headerComponent.style'


export const HeaderComponent = () => {
  return (
   <Styled.Header>
    <Styled.Logo>
        My<span>Todo</span>App
    </Styled.Logo>
    <Styled.ProfileContainer>
        <Styled.ProfileIcon>
            <MdPerson/>
        </Styled.ProfileIcon>
        <p>Rafael Silva</p>
    </Styled.ProfileContainer>
   </Styled.Header>
  )
}

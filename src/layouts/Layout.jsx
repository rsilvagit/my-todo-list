import React from 'react'
import { Outlet, useNavigate, useLocation} from 'react-router-dom'
import { HeaderComponent } from '../components/header/HeaderComponent'
import ButtonComponent from '../components/button/ButtonComponent'
import * as Styled from "./AppLayout.style";

export const Layout = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        const route = location.pathname.includes('/todo') ? '/' : '/todo';
        navigate(route);
    }
  return (
    <Styled.Layout>
        <HeaderComponent/>
        <Styled.Main>
            <Styled.ActionContainer>
               <ButtonComponent onClick={handleClick}>
                { location.pathname.includes('/todo') ? 'Ver Tarefas' : 'Nova Tarefa'}
               </ButtonComponent>
            </Styled.ActionContainer>
            <Styled.MainContrainer>
                <Outlet/>
            </Styled.MainContrainer>
        </Styled.Main>
    </Styled.Layout>
  )
}

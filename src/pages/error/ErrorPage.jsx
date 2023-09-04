import { useNavigate } from "react-router-dom"
import {ButtonComponent}  from "../../components/button/ButtonComponent"

import * as Styled from "./ErrorPage.style"

export const ErrorPage = () => {
    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(route);
    }
    return (
        <Styled.ErrorContainer data-testid = 'error-page-component'>
            <h3>Opss! Página não encontrada...</h3>
            <p>
                Não encontramos a página solicitada
            </p>
            <ButtonComponent onClick={()=>{ navigateTo('/') }} data-testid = 'error-btn'>
                Voltar a página inicial
            </ButtonComponent>
        </Styled.ErrorContainer>
    )
}


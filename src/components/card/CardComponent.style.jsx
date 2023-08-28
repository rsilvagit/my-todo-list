import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyleUtils } from '../../utils/style';

export const CardContainer  = styled.div`
    display: flex;
    width: 320px;
    height: 150px;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    border-radius: 5px;
    background: ${({$status}) => $status ? StyleUtils.Colors.sucess : StyleUtils.Colors.danger};//expressão que dianamiza a cor do background do card
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
   
`;
export const Title  = styled.h3`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const Description  = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
`;
export const ActionsContainer  = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 16px;
    align-self: stretch;
`;

CardContainer.propTypes = {
    $status: PropTypes.bool
}//criando a propiedade no card container

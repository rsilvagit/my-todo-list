import styled from 'styled-components'

export const  FormTodo = styled.form`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
export const  FormTitle = styled.legend`
    color: #508CC2;
    font-family: Segoe UI;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    `
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`
export const  InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`
export const CounterContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`


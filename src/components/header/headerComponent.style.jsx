import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-bottom: 1px solid #666;
`
export const Logo = styled.h1`
    display: flex;
    align-items: center;
    color: #877777;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
`
export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`
export const ProfileIcon = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 32px;
    background: #393939;
`

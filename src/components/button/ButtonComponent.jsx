import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './ButtonComponent.style'

const ButtonComponent = ({onClick, disabled, loading, children, type = 'button', color, bg}) => {
  return (
    <Styled.Button $color={color} $bg={bg} onClick={onClick} disabled={disabled} type={type}>
        { loading ? 'Carregando' : children }
        </Styled.Button>
  )
}

ButtonComponent.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    color: PropTypes.string,
    bg: PropTypes.string,
}

export default ButtonComponent
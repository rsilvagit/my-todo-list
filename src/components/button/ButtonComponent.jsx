import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './ButtonComponent.style'

const ButtonComponent = ({onClick, disabled, loading, children, type = 'button', color, bg, simetric}) => {
  return (
    <Styled.Button $color={color} $bg={bg} $simetric={simetric} onClick={onClick} disabled={disabled} type={type}>
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
    simetric: PropTypes.bool,
}

export default ButtonComponent
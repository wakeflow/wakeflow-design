import React,{ useEffect } from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import PropTypes from 'prop-types'

const Button = ({
  text,onClick,disabled,keyPress,icon,css,...rest
}) => {
  const ref = useRef()

  const handleKeyUp = e => {
    if (e.key === keyPress) {
      e.target.blur()
      ref.current.click()
    }
  }
  useEffect(() => {
    if (keyPress) document.addEventListener(`keydown`,handleKeyUp,false)
    return () => {
      if (keyPress) document.removeEventListener(`keydown`,handleKeyUp,false)
    }
  },[])
  return (
    <Container
      ref={ref}
      {...rest}
      disabled={disabled}
      onClick={onClick}
      css={css}>
      {icon && <ButtonIcon src={icon} />}
      {text}
    </Container>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  css: PropTypes.string,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  keyPress: PropTypes.string,
}
export default Button

const Container = styled.button`
  position: relative;
  color:white;
  background-color:${p => p.disabled ? `gray` : `black`};
  padding: 10px 20px;
  margin:10px;
  font-size:1rem;
  font-weight: 400;
  border-radius:40px;
  cursor:pointer;
  box-shadow:none;
  border:none;
  white-space:nowrap;
  transition: all 0.1s ease-in-out;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:5px; 

  &:hover{
    transform: scale(1.1);
  }
  
  &:active{
    opacity:0.6
  }

  ${p => p.css}

`
const ButtonIcon = styled.img`
  width: 20px;
  aspect-ratio: 1 / 1;
`

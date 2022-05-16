import React,{ useEffect,useState } from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import PropTypes from 'prop-types'

const Button = ({
  text,onClick,disabled,keyPress,icon,css,...rest
}) => {
  const ref = useRef()
  const [coords,setCoords] = useState({ x: -1,y: -1 })
  const [isRippling,setIsRippling] = useState(false)

  useEffect(() => {
    let timer = null
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      timer = setTimeout(() => setIsRippling(false),300)
    } else setIsRippling(false)
    return () => clearTimeout(timer)
  },[coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1,y: -1 })
  },[isRippling])

  const materializeEffect = e => {
    const rect = e.target.getBoundingClientRect()
    setCoords({ x: e.clientX - rect.left,y: e.clientY - rect.top })
    // onClick && onClick(e)
  }
  useEffect(() => {
    if (ref) ref.current.addEventListener(`click`,materializeEffect)
  },[])

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
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ``
      )}
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
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:5px;
  &:hover{
    transform: scale(1.1);
  }
  > span {
  width: 20px;
  height: 20px;
  position: absolute;
  background: white;
  display: block;
  content: "";
  border-radius: 9999px;
  opacity: 1;
  animation: 0.9s ease 1 forwards ripple-effect;
  }

  @keyframes ripple-effect {
  0% {
    transform: scale(1);
    opacity: 1;
    }
  50% {
    transform: scale(5);
    opacity: 0.375;
    }
  100% {
    transform: scale(17);
    opacity: 0;
    }
  }
  ${p => p.css}
`
const ButtonIcon = styled.img`
  width: 20px;
  aspect-ratio: 1 / 1;
`

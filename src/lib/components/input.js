import React,{ useState,useEffect,useRef } from 'react'
import styled from 'styled-components'
import { validate } from './utils/validate'
import { X,Copy,Eye,EyeOff } from 'react-feather'
import PropTypes from 'prop-types'

const Input = ({ 
  type,
  label,
  required,
  error,
  schema,
  placeholder,
  value, 
  prefix = ``,
  postfix = ``,
  onChange,
  onBlur,
  onError,
  onEnter,
  copyable,
  deletable,
  backgroundColor,
  labelColor,
  css,
}) => {

  const ref = useRef()
  const [currentValue,setCurrentValue] = useState(value || ``)
  const [visited,setVisited] = useState(false)
  const [passwordToggle,setPasswordToggle] = useState(false)
  useEffect(() => setCurrentValue(value || ``),[value])
  if(schema && visited && currentValue) error = validate(currentValue,schema).join(`, `)
  error = (required && visited && !currentValue) ? `This value is required` : error

  const handleChange = e => { 
    const { value } = e.target
    setCurrentValue(value)
    if(onChange)onChange(value)
  }

  const handleBlur = () => { 
    const value = type === `number` ? Number(currentValue) : currentValue
    if(onBlur) onBlur(value)
    setVisited(true)
  }

  const handleKeyUp = e => {
    if(e.key === `Enter` && onEnter) onEnter()
  }

  if(onError) onError(error)
  const handlePasswordToggle = () => {
    const inputBox = document.querySelector(`#passwordInput`)
    const type = inputBox.getAttribute(`type`) === `password` ? `text` : `password`
    inputBox.setAttribute(`type`,type)
    setPasswordToggle(!passwordToggle)
  }
  return (
    <Container backgroundColor={backgroundColor} onClick={() => ref.current.focus()} css={css} >
      <Label 
        className='input-label'
        value={currentValue}
        error={error}
        color={labelColor}>{label}{required && `*`}</Label>
      <InlineContainer>
        <Inline
          value={currentValue}
          error={error}
        >
          {prefix && <Prefix value={currentValue}>{prefix}</Prefix>}
          <StyledInput
            id={type === `password` ? `passwordInput` : ``}
            type={type}
            className='input'
            ref={ref}
            error={error}
            placeholder={placeholder}
            value={currentValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
          />
        
          {postfix && <Postfix value={currentValue}>{postfix}</Postfix>}
          {copyable && currentValue && <StyledCopy onClick={() => navigator.clipboard.writeText(currentValue)}/>}
          {deletable && currentValue && <StyledX onClick={() => setCurrentValue(``)}/>}
        </Inline>
        {type === `password` && !passwordToggle && currentValue && <Eye color={labelColor} cursor="pointer" style={{ marginLeft: `auto` }} onClick={handlePasswordToggle}/>}
        {type === `password` && passwordToggle && currentValue && <EyeOff color={labelColor} cursor="pointer" style={{ marginLeft: `auto` }} onClick={handlePasswordToggle} />}
      </InlineContainer>
      {error && <Error className='input-error' >{error}</Error>}
    </Container>
  )
}

export default Input

Input.propTypes = { 
  type: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  backgroundColor: PropTypes.string,
  labelColor: PropTypes.string,
  deletable: PropTypes.bool,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  copyable: PropTypes.bool,
  onBlur: PropTypes.func,
  css: PropTypes.string,
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  background-color: ${p => p.backgroundColor ? p.backgroundColor : ``};
  backdrop-filter: brightness(1.15);
  border-radius: 4px;
  padding:8px 10px;
  cursor:text;
  width: 100%;
  &:focus-within > .input-label{
    font-size:0.8rem;
  }
  &:focus-within > .input{
    padding-top:4px;
  }
  max-width: 250px;
  ${p => p.css ? p.css : ``}
`
const InlineContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Label = styled.div`
  color: ${p => p.color || (p.error ? `red` : `rgb(70,70,70)`)};
  font-size:${p => p.value ? `0.8rem` : `1rem`};
  transition:font-size 0.2s;
`
const StyledInput = styled.input`
  width: 100%;
  border:none;
  background:transparent;
  flex:1 1;
  padding:0;
  font-size:1rem;
  outline:none;
`
const Error = styled.div`
  padding-top:4px;
  color:red;
  font-size:0.6rem;
`
const Inline = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  padding-top:${p => (p.value || p.error) ? `4px` : ``};
  max-height:${p => p.value ? `unset` : 0};
  border-bottom:1px solid ${p => p.error ? `red` : `transparent`};
  &:focus-within{
    max-height:unset;
  }
  &:focus-within > div{
    opacity:1;
  }
`
const Prefix = styled.div`
  font-size:1rem;
  opacity:${p => p.value ? `1` : `0`};
`
const Postfix = styled(Prefix)``

const StyledCopy = styled(Copy)`
  cursor:pointer;
  height:18px;
  width:18px;
  margin-right:10px;
`
const StyledX = styled(X)`
  cursor:pointer;
  height:20px;
  width:20px;
`
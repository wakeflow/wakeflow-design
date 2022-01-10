import React,{ useState,useEffect,useRef } from 'react'
import styled from 'styled-components'
import { validate } from './utils/validate'
import { X,Copy } from 'react-feather'

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
  style,
}) => {

  const ref = useRef()
  const [currentValue,setCurrentValue] = useState(value || ``)
  const [visited,setVisited] = useState(false)
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

  return (
    <Container onClick={() => ref.current.focus()}>
      <Label 
        className='input-label'
        value={currentValue}
        error={error}>{label}{required && `*`}</Label>
      <Inline
        value={currentValue}
        error={error}
      >
        {prefix && <Prefix value={currentValue}>{prefix}</Prefix>}
        <StyledInput
          type={type}
          className='input'
          ref={ref}
          error={error}
          placeholder={placeholder}
          value={currentValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          style={style}
        />
        {postfix && <Postfix value={currentValue}>{postfix}</Postfix>}
        {copyable && currentValue && <StyledCopy onClick={() => navigator.clipboard.writeText(currentValue)}/>}
        {deletable && currentValue && <StyledX onClick={() => setCurrentValue(``)}/>}
      </Inline>
      {error && <Error className='input-error' >{error}</Error>}
    </Container>
  )
}

export default Input

const Container = styled.div`
  display:flex;
  flex-direction:column;
  backdrop-filter: brightness(1.15);
  border-radius: 4px;
  padding:8px 10px;.2
  cursor:text;
  &:focus-within > .input-label{
    font-size:0.8rem;
  }
  &:focus-within > .input{
    padding-top:4px;
  }
`
const Label = styled.div`
  color:${p => p.error ? `red` : `rgb(70,70,70)`};
  font-size:${p => p.value ? `0.8rem` : `1rem`};
  transition:font-size 0.2s;
`
const StyledInput = styled.input`
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
  justify-content:space-between
  align-items:center;
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
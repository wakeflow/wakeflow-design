import React,{ useState,useEffect,useRef } from 'react'
import styled from 'styled-components'
import { validate } from './utils/validate'
import { X,Copy,Eye,EyeOff } from 'react-feather'
import PropTypes from 'prop-types'
import DateInput from './dateInput'
import TimeInput from './timeInput'
import DateTimeInput from './dateTimeInput'
import PasswordInput from './passwordInput'
import NormalInput from './normalInput'
import DropdownInput from './dropdownInput'

const Input = ({ 
  type,
  label,
  required,
  error,
  schema,
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
  css,
  size,
  labelColor,
  inputFormat,
  ...rest
}) => {

  const ref = useRef()
  const [currentValue,setCurrentValue] = useState(value || ``)
  const [visited,setVisited] = useState(false)
  useEffect(() => setCurrentValue(value || ``),[value])
  if(schema && visited && currentValue) error = validate(currentValue,schema).join(`, `)
  error = (required && visited && !currentValue) ? `This value is required` : error

  const handleChange = e => { 
    let { value } = e.target
    if(type === `number`) value = Number(value)
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
  
  // if(type === `date`) return <DateInput value={value} label={label} onChange={onChange} css={css} inputFormat={inputFormat} size={size}/>
  // if(type === `time`) return <TimeInput value={value} label={label} onChange={onChange} css={css} inputFormat={inputFormat} size={size}/>
  // if(type === `dateTime`) return <DateTimeInput value={value} onChange={onChange} css={css} />

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
          {type === `password` && <PasswordInput labelColor={labelColor} currentValue={currentValue} ref={ref} handleBlur={handleBlur} handleKeyUp={handleKeyUp} handleChange={handleChange} type={type} {...rest}/>}           
          {type === `time` && <TimeInput value={value} label={label} onChange={onChange} css={css} inputFormat={inputFormat} size={size}/>}
          {type === `date` && <DateInput value={value} label={label} onChange={onChange} css={css} inputFormat={inputFormat} size={size}/>}
          {type === `dateTime` && <DateTimeInput value={value} onChange={onChange} css={css}/>}
          {type === `dropdown` && <DropdownInput currentValue={currentValue} ref={ref} handleBlur={handleBlur} handleKeyUp={handleKeyUp} handleChange={handleChange} type={type} {...rest}/>}
          {(type === `text` || type === `number`) && <NormalInput currentValue={currentValue} ref={ref} handleBlur={handleBlur} handleKeyUp={handleKeyUp} handleChange={handleChange} type={type} {...rest}/>}
          {postfix && <Postfix value={currentValue}>{postfix}</Postfix>}
          {copyable && currentValue && <StyledCopy onClick={() => navigator.clipboard.writeText(currentValue)}/>}
          {deletable && currentValue && <StyledX onClick={() => setCurrentValue(``)}/>}
        </Inline>
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
  schema: PropTypes.object,
  list: PropTypes.array,
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
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
export const StyledInput = styled.input`
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
  width: 100%;
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
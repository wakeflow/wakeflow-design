import React,{ useState,useEffect,useRef } from 'react'
import styled from 'styled-components'
import { validate } from './utils/validate'
import { X,Copy } from 'react-feather'
import PropTypes from 'prop-types'
import DateInput from './dateInput'
import TimeInput from './timeInput'
import DateTimeInput from './dateTimeInput'
import PasswordInput from './passwordInput'
import NormalInput from './normalInput'
import DropdownInput from './dropdownInput'
import DropdownMultiSelectbox from './dropdownMultiSelectBox'
import DropdownMultiCheckbox from './dropdownMultiCheckbox'
import Calendar from './calendar'

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
  highlightColor,
  inputFormat,
  ...rest
}) => {
  const ref = useRef()
  const [currentValue,setCurrentValue] = useState(value || ``)
  const [visited,setVisited] = useState(false)
  useEffect(() => setCurrentValue(value || ``),[value])
  if(schema && visited && currentValue) error = validate(currentValue,schema).join(`, `)
  error = (required && visited && !currentValue) ? `This value is required` : error

  const handleChange = value => {
    if(type === `number` && value != ``) value = Number(value)
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
  if(type === `calendar`) return (<Calendar currentValue={currentValue} ref={ref} handleBlur={handleBlur} handleChange={handleChange} {...rest}/>)
  return (
    <Container backgroundColor={backgroundColor} onClick={() => ref.current.focus()} css={css} >
      <Label 
        className='input-label'
        value={currentValue}
        error={error}
        color={highlightColor}>{label}{required && `*`}</Label>
      <InlineContainer >
        <Inline
          value={currentValue}
          error={error}
        >
          {prefix && <Prefix value={currentValue}>{prefix}</Prefix>}
          {type === `password` && <PasswordInput highlightColor={highlightColor} currentValue={currentValue} ref={ref} handleBlur={handleBlur} handleKeyUp={handleKeyUp} handleChange={handleChange} type={type} {...rest}/>}           
          {type === `time` && <TimeInput ref={ref} value={currentValue} label={label} handleChange={handleChange} handleBlur={handleBlur} css={css} inputFormat={inputFormat} size={size}/>}
          {type === `date` && <DateInput ref={ref} value={currentValue} label={label} handleChange={handleChange} handleBlur={handleBlur}css={css} inputFormat={inputFormat} size={size}/>}
          {type === `dateTime` && <DateTimeInput ref={ref} value={currentValue} handleChange={handleChange} handleBlur={handleBlur} css={css}/>}
          {type === `dropdown` && <DropdownInput currentValue={currentValue} ref={ref} handleBlur={handleBlur} handleChange={handleChange} {...rest}/>}
          {type === `dropdownMultiSelectBox` && <DropdownMultiSelectbox currentValue={currentValue} ref={ref} handleBlur={handleBlur} handleChange={handleChange} {...rest}/>}
          {type === `dropdownMultiCheckbox` && <DropdownMultiCheckbox currentValue={currentValue} ref={ref} handleBlur={handleBlur} handleChange={handleChange} {...rest}/>}
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
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hideIncrements: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  css: PropTypes.string,
  deletable: PropTypes.bool,
  copyable: PropTypes.bool,
  highlightColor: PropTypes.string,
}
const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  background-color: ${p => p.backgroundColor ? p.backgroundColor : ``};
  backdrop-filter: brightness(1.15);
  border-radius: 4px;
  padding:8px 10px;
  cursor: text;
  width: 100%;
  &:focus-within > .input-label{
    font-size:0.8rem;
  }
  &:focus-within > .input{
    padding-top:4px;
  }
  max-width: 250px;
  border: 2px solid black;
  ${p => p.css ? p.css : ``}
`
const InlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: text;
`
const Label = styled.div`
  color: ${p => p.color || (p.error ? `red` : `black`)};
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
  cursor: text;
  padding-top:${p => (p.value || p.error || p.value === 0) ? `4px` : ``};
  max-height:${p => (p.value || p.show || p.value === 0) ? `unset` : 0};
  border-bottom:1px solid ${p => p.error ? `red` : `transparent`};
  &:focus-within{
    max-height:unset;
  }
  & > div{
    opacity: ${p => p.show || p.value ? 1 : 0};
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
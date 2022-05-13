import React,{ useState,useEffect,useRef } from 'react'
import styled from 'styled-components'
import { validate } from './utils/validate'
import { X,Copy } from 'react-feather'
import PropTypes from 'prop-types'
import DateInput from './dateInput'
import TimeInput from './timeInput'
import DateTimeInput from './dateTimeInput'
import PasswordInput from './passwordInput'
import NumberInput from './numberInput'
import StringInput from './stringInput'
import DropdownInput from './dropdownInput'
import DropdownMultiSelectbox from './dropdownMultiSelectBox'
import DropdownMultiCheckbox from './dropdownMultiCheckbox'
import Calendar from './calendar'

const Input = ({
  prefix = ``,
  postfix = ``,
  ...rest
}) => {
  const ref = useRef()
  let {
    type,label,required,error,schema,value,onChange: _onChange,onBlur: _onBlur,onError,onEnter,copyable,deletable,backgroundColor,css,highlightColor, 
  } = rest
  const [currentValue,setCurrentValue] = useState(value)
  const [visited,setVisited] = useState(false)
  useEffect(() => setCurrentValue(value),[value])
  if (schema && visited && currentValue)
    error = validate(currentValue,schema).join(`, `)
  error =
    required &&
    visited &&
    (typeof currentValue === `undefined` || currentValue === null)
      ? `This value is required`
      : error

  const onChange = value => {
    setCurrentValue(value)
    if (_onChange) _onChange(value)
  }

  const onBlur = () => {
    if (_onBlur) _onBlur(value)
    setVisited(true)
  }

  const onKeyUp = e => {
    if (e.key === `Enter` && onEnter) onEnter()
  }

  if (onError) onError(error)
  if (type === `calendar`)
    return (
      <Calendar currentValue={currentValue} ref={ref} onBlur={onBlur} onChange={onChange} {...rest}/>
    )
  return (
    <Container backgroundColor={backgroundColor} onClick={() => ref.current.focus()} css={css}>
      <Label className='input-label' value={currentValue} error={error} color={highlightColor}
      > {label} {required && `*`}
      </Label>
      <InlineContainer> 
        <Inline value={currentValue} error={error}>   
          {prefix && <Prefix value={currentValue}>{prefix}</Prefix>}   

          {type === `password` && (<PasswordInput currentValue={currentValue} ref={ref} onBlur={onBlur} onKeyUp={onKeyUp} onChange={onChange} {...rest} />)}   
          {type === `time` && (<TimeInput ref={ref} value={currentValue} onChange={onChange} onBlur={onBlur} {...rest} />)}   
          {type === `date` && (<DateInput ref={ref} value={currentValue} onChange={onChange} onBlur={onBlur} {...rest} />)}   
          {type === `dateTime` && (<DateTimeInput ref={ref} value={currentValue} onChange={onChange} onBlur={onBlur} {...rest} />)}   
          {type === `dropdown` && (<DropdownInput currentValue={currentValue} ref={ref} onBlur={onBlur} onChange={onChange} {...rest} />)}   
          {type === `dropdownMultiSelectBox` && (<DropdownMultiSelectbox currentValue={currentValue} ref={ref} onBlur={onBlur} onChange={onChange} {...rest} />)}   
          {type === `dropdownMultiCheckbox` && (<DropdownMultiCheckbox currentValue={currentValue} ref={ref} onBlur={onBlur} onChange={onChange} {...rest} />)}   
          {type === `number` && (<NumberInput currentValue={currentValue} ref={ref} onBlur={onBlur} onKeyUp={onKeyUp} onChange={onChange} {...rest} />)}   
          {type === `text` && (<StringInput currentValue={currentValue} ref={ref} onBlur={onBlur} onKeyUp={onKeyUp} onChange={onChange} {...rest} />)}  

          {postfix && <Postfix value={currentValue}>{postfix}</Postfix>}   
          {copyable && currentValue && (<StyledCopy onClick={() => navigator.clipboard.writeText(currentValue)} />)}   
          {deletable && currentValue && (<StyledX onClick={() => setCurrentValue(``)} />)}
        </Inline>
      </InlineContainer>
      {error && <Error className='input-error'>{error}</Error>}
    </Container>
  )
}

export default Input

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  hideIncrements: PropTypes.bool,
  _onChange: PropTypes.func,
  _onBlur: PropTypes.func,
  css: PropTypes.string,
  deletable: PropTypes.bool,
  copyable: PropTypes.bool,
  highlightColor: PropTypes.string,
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${p => (p.backgroundColor ? p.backgroundColor : ``)};
  backdrop-filter: brightness(1.15);
  border-radius: 4px;
  padding: 8px 10px;
  cursor: text;
  width: 100%;
  &:focus-within > .input-label {
    font-size: 0.8rem;
  }
  &:focus-within > .input {
    padding-top: 4px;
  }
  max-width: 250px;
  border: 2px solid black;
  ${p => (p.css ? p.css : ``)}
`
const InlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: text;
`
const Label = styled.div`
  color: ${p => p.color || (p.error ? `red` : `black`)};
  font-size: ${p => (p.value ? `0.8rem` : `1rem`)};
  transition: font-size 0.2s;
`
export const StyledInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  flex: 1 1;
  padding: 0;
  font-size: 1rem;
  outline: none;
`
const Error = styled.div`
  padding-top: 4px;
  color: red;
  font-size: 0.6rem;
`
const Inline = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: text;
  padding-top: ${p => (p.value || p.error || p.value === 0 ? `4px` : ``)};
  max-height: ${p => (p.value || p.show || p.value === 0 ? `unset` : 0)};
  border-bottom: 1px solid ${p => (p.error ? `red` : `transparent`)};
  &:focus-within {
    max-height: unset;
  }
  & > div {
    opacity: ${p => (p.show || p.value ? 1 : 0)};
  }
  &:focus-within > div {
    opacity: 1;
  }
`
const Prefix = styled.div`
  font-size: 1rem;
  opacity: ${p => (p.value ? `1` : `0`)};
`
const Postfix = styled(Prefix)``

const StyledCopy = styled(Copy)`
  cursor: pointer;
  height: 18px;
  width: 18px;
  margin-right: 10px;
`
const StyledX = styled(X)`
  cursor: pointer;
  height: 20px;
  width: 20px;
`

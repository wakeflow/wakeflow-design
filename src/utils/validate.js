import { Validator } from 'jsonschema'

const validator = new Validator()

export const validate = (thing,schema) => {
  const result = validator.validate(thing,schema,{ nestedErrors: true })
  return result.errors.map(e => e.message)
}
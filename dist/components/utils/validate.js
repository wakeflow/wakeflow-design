"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var _jsonschema = require("jsonschema");

const validator = new _jsonschema.Validator();

const validate = (thing, schema) => {
  const result = validator.validate(thing, schema, {
    nestedErrors: true
  });
  return result.errors.map(e => e.message);
};

exports.validate = validate;
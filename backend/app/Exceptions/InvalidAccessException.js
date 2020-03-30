'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class InvalidAccessException extends LogicalException {
  handle (error, { response }) {
    return response.status(403).json({
      error: 'invalid access to resource'
    });
  }
}

module.exports = InvalidAccessException

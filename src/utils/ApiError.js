class APIError extends Error {
/**
 * Creates an instance of ApiError.
 * 
 * @class
 * @extends {Error}
 * 
 * @param {number} statusCode - The HTTP status code associated with the error.
 * @param {string} message - The error message.
 * @param {Array} [errors=[]] - An array of specific errors or details.
 * @param {string} [stack=""] - The stack trace of the error.
 * 
 * @property {number} statusCode - The HTTP status code associated with the error.
 * @property {Array} errors - An array of specific errors or details.
 * @property {string} message - The error message.
 * @property {null} data - Placeholder for any additional data (default is null).
 * @property {boolean} success - Indicates the success status (default is false).
 * @property {string} stack - The stack trace of the error.
 */
  constructor(statusCode, message, errors = [], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.message = message;
    this.data = null;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default APIError;

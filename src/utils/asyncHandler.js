/**
 * A higher-order function that wraps an asynchronous request handler and catches any errors,
 * sending a 500 status response with the error message and passing the error to the next middleware.
 *
 * @function
 * @param {Function} requestHandler - The asynchronous request handler to be wrapped.
 * @returns {Function} A new request handler that catches errors and sends a 500 status response.
 *
 * @example
 * // Example usage in an Express route
 * const asyncHandler = require('./path/to/asyncHandler');
 *
 * app.get('/route', asyncHandler(async (req, res, next) => {
 *   const data = await someAsyncOperation();
 *   res.json(data);
 * }));
 */
// const asyncHandler = (requestHandler) => (req, res, next) =>
//   Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));

// export default asyncHandler;

const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (err) {
    res.status(500).send({ message: err.message });
    next(err);
  }
};

export default asyncHandler;

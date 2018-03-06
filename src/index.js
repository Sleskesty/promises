/**
 * Create a string with your name, wrap it with a promise, and return it.
 */
export const resolvingValues = () => {
  // return REPLACE_WITH_CODE
  return Promise.resolve(`Tyler`)
}

/**
 * Return a rejected promise that has 'Doh' as the message
 */
export const rejectedPromise = () => {
  // return REPLACE_WITH_CODE
  return Promise.reject('Doh')
}

/**
 * For this function, we're going to some code that conditionally checks the number (parameter)
 *  - When the number is positive, resolve the promise with the number
 *  - When the number is negative, reject the promise, provide the number as the rejection message
 */
export const conditionallyReject = (number = 0) => {
  // return REPLACE_WITH_CODE
  return new Promise((resolve, reject) => {
    if(number < 0) return reject(number)
    return resolve(number)
  })
}

const REPLACE_WITH_CODE = false

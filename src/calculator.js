/**
 * Create a variadic function (function that accepts a variable amount of values) and uses
 * reduce function to sum the values and return the reduced value as a promise.
 *
 * Use only async/await
 *
 * @param {Array<string>} values
 * @returns {Promise<Number>}
 */
export const add = async (...values) => {
    const reducifier = (accumlifier, curvalifier) => {
        return accumlifier + curvalifier
    }
    return new Promise((res, rej) =>{res(values.reduce(reducifier))})
}

/**
 * Create a variadic function (function that accepts a variable amount of values) and uses
 * reduce function to subtract values and return the reduced value as a promise.
 *
 * Use only async/await
 *
 * @param {Array<string>} values
 * @returns {Promise<Number>}
 */
const subtract = async (...values) => {
        const subtractifier = (accumlifier, curvalifier) => {
            return accumlifier - curvalifier
        }
        return new Promise((res, rej) =>{res(values.reduce(subtractifier, 0))})

}

/**
 * Export out the add, and subtract
 */
export default  {
add, subtract 
}

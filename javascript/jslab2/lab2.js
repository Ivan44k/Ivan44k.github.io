/**

 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
function pow(x, n){return x**n}


/**

 * @param {number} n 
 * @returns {number}
 */
function sumTo(n){
    let s = 0
    for (let i=0; i<=n; i++) s+=i
    return s
}


/**

 * @param {number} year
 * @returns {boolean}
 */
function isLeapYear(year){return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)}


/**

 * @param {number} n 
 * @returns {bigint}
 */
function factorial(n){
    if (n == 0) return BigInt(1)
    if (n == 1) return BigInt(1)
    if (n >= 2) return BigInt(n) * BigInt(factorial(n - 1));
}


/**

 * @param {number} n 
 * @returns {bigint}
 */
function fib(n){
    if (!n) return BigInt(0)
    let a = BigInt(1)
    let b = BigInt(1)
    for (let i = 3; i <= n; i++) {
      let c = a + b
      a = b
      b = c
    }
    return b
}

/**

 * @param {number} x
 * @param {number} y
 * @returns
 */
function compare(x){return function(y){return y==x ? null : y>x}}


/**

 * @param  {...number} args 
 * @returns {number}
 */
function sum(...args){
    let s = 0
    for(let i of args) s+=i
    return s
}
/**
* @param {object} obj 
* @return 
*/
function addBlackSpot(obj) {
    if (typeof obj !== 'object' || obj === null) {
    throw new Error('obj должен быть объектом');
    }
    
    if (!obj.hasOwnProperty(Symbol.for('blackSpot'))) {
    obj[Symbol.for('blackSpot')] = true;
    }
    
    return obj;
    }
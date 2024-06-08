import { fib } from "./lab3f.js";

/**
 * @param {number} num 
 * @returns {number}
 */
export function getDecimal(num){
    let cringe = num - Math.floor(num)
    return cringe ? Number(cringe.toFixed(num.toString().split('.').pop().length)) : 0}


/**
 * @param {string} url 
 * @returns {string} 
 */
export function normalizeUrl(url){
    const f = /http:\/\/|https:\/\//.test(url)
    if (f) return url.replace('http://', 'https://')
    return "https://"+url
}


/**

 * @param {string} str 
 * @returns {boolean}
 */
export function checkSpam(str){
    let lowStr = str.toLowerCase()
    return /xxx|viagra/.test(lowStr)
}


/**

 * @param {string} str 
 * @param {number} maxlength 
 * @returns {string}
 */
export function truncate(str, maxlength){
    let s = str.slice(maxlength-1)
    if (s) return str.replace(s, "\u2026")
    return str
}


/**

 * @param {string} str 
 * @returns {string} 
 */
export function camelize(str){
    let words = str.split("-")
    let newStr = words.shift()
    for(let word of words) newStr += (word.charAt(0).toUpperCase() + word.slice(1))
    return newStr
}
/**

 * @param {number} n 
 * @returns {bigint[]} 
 */
export function fibs(n){
    let l = []
    for(let i=0; i < n; i++) l.push(fib(i))
    return l
}

/**
 * @param {number[]} arr 
 * @returns {number[]}
 */
export function arrReverseSorted(arr){
    let l = arr.toSorted((a, b) => b-a)
    const arrForCopy = arr.slice();
    arrForCopy.sort((a, b) => b-a);
    return arrForCopy;
}


/**

 * @param {any[]} arr 
 * @returns {any[]}
 */
export function unique(arr){return Array.from(new Set(arr))}
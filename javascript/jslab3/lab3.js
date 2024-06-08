import { fib } from "./lab3_1.js";

/**
 * Считаем десятичную часть числа 
 * @param {number} num 
 * @returns {number}
 */
export function getDecimal(num){
    let cringe = num - Math.floor(num)
    return cringe ? Number(cringe.toFixed(num.toString().split('.').pop().length)) : 0}


/**
 * Нормализируем URL
 * @param {string} url в виде 'address' или 'http://address' или 'https://address'
 * @returns {string} 'https://address'
 */
export function normalizeUrl(url){
    const f = /http:\/\/|https:\/\//.test(url)
    if (f) return url.replace('http://', 'https://')
    return "https://"+url
}


/**
 * проверяет, содержит ли строка 'viagra' или 'XXX'
 * @param {string} str 
 * @returns {boolean}
 */
export function checkSpam(str){
    let lowStr = str.toLowerCase()
    return /xxx|viagra/.test(lowStr)
}


/**
 * если строка не помещается в макс длину, обрезаем ее и добавляем  … in the end
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
 * удаляет символ '-' из строки и возвращает ее в виде стандартного имени 
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
 * возвращает список из первых n чисел фибоначчи
 * @param {number} n 
 * @returns {bigint[]} - массив чисел фибоначчи
 */
export function fibs(n){
    let l = []
    for(let i=0; i < n; i++) l.push(fib(i))
    return l
}

/**
 * сортирует и переворачивает заданый массив 
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
 * удаляет дубликаты из массива
 * @param {any[]} arr 
 * @returns {any[]}
 */
export function unique(arr){return Array.from(new Set(arr))}
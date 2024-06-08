export function fib(n){
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
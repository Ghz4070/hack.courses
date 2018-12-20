/* TD04 - Fibonacci Filter

Écrivez une fonction prenant un tableau en paramètre et 
ne retournant que les nombres de ce tableau faisant partie 
de la suite de fibonacci.

Par exemple fibFilter([1,2,3,4,5]) == [1,2,3,5]

/* TD Part */

const fibFilter = (array) => {
    const fib = n => n < 2 ? n : fib(n-1) + fib(n-2)
    const checkFib = (n) => {
        let value = 0
        for (let i = 0; value < n; i++) {
            value = fib(i)
        }
        return value == n
    }
    return array.filter(term => checkFib(term))
}

/* Testing Part */
const array = [1,4,5,13,2,3,4,20,30,11,8,12]
console.log(fibFilter(array).toString() == [ 1, 5, 13, 2, 3, 8].toString() ? 'TD04 :: Success' : 'TD04 :: Failed')

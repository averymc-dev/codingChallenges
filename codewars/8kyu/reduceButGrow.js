//Given a non-empty array of integers, return the result of multiplying the values together in order.
const grow = (x) => {
    return x.reduce((acc, init) => acc * init, 1)
}

// REFACTOR
const reduceButGrow = x => x.reduce((acc, init) => acc * init, 1)
function returnsThree() {
  return 3
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new RangeError('number must be greater than 1 and less than 1000000')
  }
  return 1 / n
}

try {
  reciprocal(5)
} catch (error) {
  console.error('pick a number thats 1 or greater')
}



module.exports = {
  returnsThree,
  reciprocal
};

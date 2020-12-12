exports.sum = (n1, n2) => {
  const one = parseInt(n1)
  const two = parseInt(n2)

  if (Number.isNaN(one) || Number.isNaN(two)) {
    throw new Error('Please check your input!')
  }

  return +n1 + +two
}
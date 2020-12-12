exports.queryString = (obj) => {
  const arr = Object.entries(obj).map((x) => {
    return `${x[0]}=${x[1]}`
  })

  return arr.join('&')
}

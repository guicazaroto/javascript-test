const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Value cannot be nested object')
  }

  return `${key}=${value}`
}

exports.queryString = obj => Object.entries(obj).map(keyValueToString).join('&')

const getLocalStorage = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data) // ATTEMPT TO PARSE JSON DATA
  } catch (error) {
    return data // RETURN RAW DATA IF PARSING FAILS
  }
}
const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value)) // STRINGIFY DATA BEFORE STORING
}

const getItem = (key) => {
  const value = getLocalStorage(key)
  return ![undefined].includes(value) ? value : null // RETURN NULL IF KEY NOT FOUND
}

const setItem = (key, value) => {
  setLocalStorage(key, value)
}

const removeItem = (key) => {
  localStorage.removeItem(key)
}

const clear = () => {
  localStorage.clear()
}

export {
  getItem,
  setItem,
  removeItem,
  clear,
}
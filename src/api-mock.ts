const loadDataFromApi = async () => {
  return await getData()
}

const getData = async () => {
  return await Promise.resolve({ data: 'data' })
}
export { loadDataFromApi }

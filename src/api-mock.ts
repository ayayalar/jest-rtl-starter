const loadDataFromApi = async () => {
  return await getData()
}

const getData = async () => {
  return await Promise.resolve({ data: 'data' })
}

const getFormData = async () => {
  return await Promise.resolve({
    engagementId: '7-XRDMV12',
    tpid: '7-LRDMV32',
    customerName: 'John Doe',
    partner: 'Microsoft',
    requestTitle: 'Global Black Belt Request',
    region: [
      {
        key: 'Americas',
        value: 'Americas'
      },
      {
        key: 'EMEA',
        value: 'EMEA',
        default: true
      }
    ],
    area: 'NorthWest',
    engagementDescription: 'Global Black Belt Request description.',
    primaryTechnology: 'Azure',
    additionalTechnology: 'Service Fabric',
    technologyDescription: 'Microsoft Azure Services',
    expectedStartDate: new Date(),
    engagementDuration: '3 days',
    deliveryMethod: 'Online',
    additionalLocationDetails: 'None'
  })
}

export { loadDataFromApi, getFormData }

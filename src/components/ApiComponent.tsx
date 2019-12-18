import * as React from 'react';
import { loadDataFromApi } from 'api-mock';
import { useEffect, useState } from 'react';

const ApiComponent: React.FC = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadDataFromApi()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <span>{data && JSON.stringify(data)}</span>
    </>
  )
}

export default ApiComponent

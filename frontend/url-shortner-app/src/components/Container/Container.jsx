import React, { useEffect, useState } from 'react'
import FormContainer from '../FormContainer/FormContainer.jsx'
import axios from 'axios'
import { serverUrl } from '../../Helpers/Constant.jsx'
import DataTable from '../DataTable/DataTable.jsx'

const Container = () => {
  const [data, setData] = useState([])
  const [reload, setReload] = useState(false)

  const updateReloadState = () => {
    setReload(true)
  };

  const fetchTableData = async () => {
    try {
      const response = await axios.get(`${serverUrl}/shortUrl`)
      console.log(response)
      setData(response.data);
      setReload(false)
    } catch (error) {
      console.log("Error in fething data-->", error)
    }
  }

  useEffect(() => {
    fetchTableData();
  }, [reload])

  return (
    <div>
        <FormContainer updateReloadState={updateReloadState}  />
        <DataTable updateReloadState={updateReloadState} data={data} />
    </div>
  )
}

export default Container
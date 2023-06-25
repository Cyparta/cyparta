import React from 'react'
import {Box} from '@mui/material'
import Layout from '@/components/dashboard/layout'
import AddJobPage from '@/components/dashboard/job/addJob'
const AddJob = () => {
  return (
    <Box>
        <Layout page={<AddJobPage />}/>
    </Box>
  )
}

export default AddJob
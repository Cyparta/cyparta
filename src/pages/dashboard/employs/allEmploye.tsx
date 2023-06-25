import Layout from '@/components/dashboard/layout'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import AllEmployes from '@/components/dashboard/employs/allEmployes'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { RequestGetEmploye } from '@/store/employes/employesSlice'
const AllEmploye = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(RequestGetEmploye())
    }, [])
  return (
    <Box>
        <Layout page={<AllEmployes />}/>
    </Box>
  )
}

export default AllEmploye
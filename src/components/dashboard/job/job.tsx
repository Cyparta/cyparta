import React, { useEffect } from 'react'
import CustomContainer from '../customContainer'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { RequestDeleteJob, RequestGetJobs } from '@/store/job/jobSlice'
import NewContainer from '../newContainer'
import { RequestDeleteEmploye } from '@/store/employes/employesSlice'

const Job = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { jobs } = useSelector((state: RootState) => state.jobs)

    useEffect(() => {
        dispatch(RequestGetJobs())
    }, [])

    
    const columns = [
        { value: "ID", name: "id", type: "text" },
        { value: "Jobs", name: "title", type: "text" },
        { value: "options", name: "options", type: "option",  del: (id:number) => {
            dispatch(RequestDeleteJob(id))
        }},
    ];
    
    return (
        <div>
            {/* <Box>test JOB</Box> */}
            <CustomContainer rows={jobs} columns={columns} />


        </div>
    )
}

export default Job
import React from 'react'
import { Box } from "@mui/material";
import Layout from '@/components/dashboard/layout';
import Job from '@/components/dashboard/job/job';

const Index = () => {
    return (
        <Box>
            <Layout page={<Job />}/>
        </Box>
    )
}

export default Index
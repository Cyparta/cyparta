import React from 'react'
import Layout from '@/components/dashboard/layout'

import DailyPage from '@/components/dashboard/attendence/daily'


const Daily = () => {
    return (
        <div>
            <Layout page={<DailyPage />} />      
        </div>
    )
}

export default Daily
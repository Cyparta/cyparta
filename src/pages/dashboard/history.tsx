import React from 'react'
import Layout from '@/components/dashboard/layout'

import HistoryPage from '@/components/dashboard/attendence/history'


const History = () => {
    return (
        <div>
            <Layout page={<HistoryPage />} />      
        </div>
    )
}

export default History
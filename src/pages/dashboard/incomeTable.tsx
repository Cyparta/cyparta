import React from 'react'
import Layout from '@/components/dashboard/layout'

import InComeTablePage from '@/components/dashboard/income/inComeTable'


const incomeTable = () => {
    return (
        <div>
            <Layout page={<InComeTablePage />} />      
        </div>
    )
}

export default incomeTable
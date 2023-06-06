import React from 'react'
import Layout from '@/components/dashboard/layout'

import ViewholidaysPage from '@/components/dashboard/holiday/ViewHoliday'


const Viewholidays = () => {
    return (
        <div>
            <Layout page={<ViewholidaysPage />} />      
        </div>
    )
}

export default Viewholidays
import React from 'react'
import Layout from '@/components/dashboard/layout'

import HolidayPage from '@/components/dashboard/holiday/createHoliday'


const Holiday = () => {
    return (
        <div>
            <Layout page={<HolidayPage />} />      
        </div>
    )
}

export default Holiday
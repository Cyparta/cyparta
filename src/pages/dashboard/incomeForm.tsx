import React from 'react'
import Layout from '@/components/dashboard/layout'

// import OutComeForm from '@/components/dashboard/outcome/OutComeForm';
import InComeFormPage from '@/components/dashboard/income/inComeForm'


const InComeForm = () => {
    return (
        <div>
            <Layout page={<InComeFormPage />} />      
        </div>
    )
}

export default InComeForm
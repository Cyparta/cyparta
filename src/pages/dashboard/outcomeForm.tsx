import React from 'react'
import Layout from '@/components/dashboard/layout'

// import OutComeForm from '@/components/dashboard/outcome/OutComeForm';
import OutComeFormPage from '@/components/dashboard/outcome/outcomeForm'


const OutComeForm = () => {
    return (
        <div>
            <Layout page={<OutComeFormPage />} />      
        </div>
    )
}

export default OutComeForm
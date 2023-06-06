import React from 'react'
import Layout from '@/components/dashboard/layout'

// import OutComeForm from '@/components/dashboard/outcome/OutComeForm';
// import OutComeFormPage from '@/components/dashboard/outcome/outcomeForm'
import OutcomeTablePage from '@/components/dashboard/outcome/outcomeTable'


const OutComeTable = () => {
    return (
        <div>
            <Layout page={<OutcomeTablePage />} />      
        </div>
    )
}

export default OutComeTable
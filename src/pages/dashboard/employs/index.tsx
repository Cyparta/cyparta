

import Layout from '@/components/dashboard/layout'

import EmploysPage from '@/components/dashboard/employs';

import React from 'react'


const Index = () => {
    return (
        <div>
            <Layout page={<EmploysPage />} />
        </div>
    )
}

export default Index
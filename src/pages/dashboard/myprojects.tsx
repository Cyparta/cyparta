import React from 'react'
import Layout from '@/components/dashboard/layout'

import Myproject from '@/components/dashboard/projects/myproject';


const MyProjects = () => {
    return (
        <div>
            <Layout page={<Myproject />} />      
        </div>
    )
}

export default MyProjects


import Layout from '@/components/dashboard/layout'

import ProjectDetailsPage from '@/components/dashboard/projects/projectDetails';

import React from 'react'


const ProjectDetails = () => {
    return (
        <div>
            <Layout page={<ProjectDetailsPage />} />
        </div>
    )
}

export default ProjectDetails
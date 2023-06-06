import Layout from '@/components/dashboard/layout'
import CreateProject from '@/components/dashboard/projects/createProjects'
import React from 'react'

const Index = () => {
  return (
    <div>
        <Layout page={<CreateProject />}/>
    </div>
  )
}

export default Index
import React from 'react'
import Layout from '@/components/dashboard/layout'

// import OutComeForm from '@/components/dashboard/outcome/OutComeForm';
import ProfilePage from '@/components/dashboard/profile/profile'


const Profile = () => {
    return (
        <div>
            <Layout page={<ProfilePage />} />      
        </div>
    )
}

export default Profile
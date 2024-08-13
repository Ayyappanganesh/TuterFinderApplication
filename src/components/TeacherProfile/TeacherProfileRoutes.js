import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from './Layout'
import MyTution from './MyTution'
import MyProfile from './MyProfile'
import MyReview from './MyReview'
import AddTution from './AddTution'

const TeacherProfileRoutes = () => {
  return (
    <Layout>
        <Routes>
<<<<<<< HEAD
            <Route index path="/myaccount" element={<MyProfile/>}/>
=======
            <Route index path="/myaccount/myprofile" element={<MyProfile/>}/>
>>>>>>> c9a721c2760a4a20330d9ba42e07ad2f7882b12a
            <Route path="/myaccount/mytuitions" element={<MyTution/>}/>
            <Route path="/myaccount/myreview" element={<MyReview/>}/>
            <Route path="/myaccount/addtution" element={<AddTution/>}/> 
        </Routes>
    </Layout>
  )
}

export default TeacherProfileRoutes
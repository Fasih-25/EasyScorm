import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from './components/index'
import { CButton } from '@coreui/react'
import CourseCard from './components/CourseCard'
import AddCourse from './components/AddCourse'
const Courses = () => {
    const[buttonPopup, setButtonPopup] = useState(false);
    const handleOnClose = () => setButtonPopup(false)
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-4">
            <div className='d-flex justify-content-between '>
                <h4>Courses</h4>
                <CButton color='primary' onClick={() => setButtonPopup(true)}>Add Course </CButton>
            </div>
            <div className='d-flex justify-content-evenly flex-wrap bg-white pt-4 my-3'>
                <CourseCard />    
                <CourseCard />    
                <CourseCard />    
            </div>
        </div>
        <AppFooter />
      </div>
      <AddCourse trigger={buttonPopup} onClose={handleOnClose}>
        <h3>modal</h3>
        <p>this is popup</p>
      </AddCourse>
    </div>
  )
}

export default Courses


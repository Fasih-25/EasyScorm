import { cibFacebook, cibInstagram, cibLinkedin, cibTwitter } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CContainer } from '@coreui/react'
import React from 'react'
import Navbar from 'src/components/Navbar'
import avatar from '../assets/images/avatars/2.jpg' 
import StudentCourseCard from '../components/StudentCourseCard'

export default function StudentHome() {
  return (
    <>
        <Navbar />
        <CContainer>
            <div className='bg-light p-5 my-3 d-flex flex-column flex-sm-row align-items-center'>
                <div className='d-flex flex-column me-sm-5 justify-content-center align-items-center align-items-sm-start justify-content-sm-start'>
                        <div>
                            <h1>Daren Zack</h1>
                        </div>
                        <div className='text-center text-sm-start'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laborum ratione, quidem, nisi vel soluta dolorem consectetur nulla necessitatibus eius assumenda placeat exercitationem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates tenetur, ullam nesciunt cum, illo quas, mollitia dolores commodi aut blanditiis voluptas aliquid neque perspiciatis. Natus enim harum sequi culpa, iusto tempore totam eligendi veritatis!
                        </div>
                        <div>
                            <CIcon icon={cibFacebook} className='mx-1 my-4' width={20}/>
                            <CIcon icon={cibInstagram} className='mx-1 my-4' width={20}/>
                            <CIcon icon={cibLinkedin} className='mx-1 my-4' width={20}/>    
                            <CIcon icon={cibTwitter} className='mx-1 my-4' width={20}/>    
                        </div>
                </div>
                <div>
                    <img src={avatar} className='rounded-circle' />
                </div>
            </div>
            <StudentCourseCard />
            <StudentCourseCard />
            <StudentCourseCard />
            <StudentCourseCard />
        </CContainer>
    </>
  )
}

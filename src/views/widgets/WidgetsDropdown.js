import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = () => {
  return (
    <CRow>
      <CCol sm={12} lg={4}>
      <CWidgetStatsA
          className="mb-4 h-auto"
          color="primary" 
          title={
            <div className='d-flex align-items-center'>
              <p style={{fontSize: "50px"}} className='fw-normal text-white'>250 <CIcon className='text-danger' icon={cilArrowBottom} style={{height: "35px" , width: "35px"}}/></p>
            </div>
          }
          value={
            <>
              <p style={{fontSize: "15px"}} className='text-white'>No Of Courses</p>
            </>
          }
        />
      </CCol>
      
      <CCol sm={12} lg={4}>
      <CWidgetStatsA
          className="mb-4"
          color="info"
          title={
            <div className='d-flex align-items-center'>
              <p style={{fontSize: "50px"}} className='fw-normal text-white'>5000 <CIcon className='' icon={cilArrowTop} style={{height: "35px" , width: "35px"}}/></p>
            </div>
          }
          value={
            <>
              <p style={{fontSize: "15px"}} className='text-white'>No Of Students</p>
            </>
          }
        />
      </CCol>
      <CCol sm={12} lg={4}>
      <CWidgetStatsA
          className="mb-4"
          color="warning"
          title={
            <div className='d-flex align-items-center'>
              <p style={{fontSize: "50px"}} className='fw-normal text-white'>75 <CIcon className='' icon={cilArrowTop} style={{height: "35px" , width: "35px"}}/></p>
            </div>
          }
          value={
            <>
              <p style={{fontSize: "15px"}} className='text-white'>Courses Completed</p>
            </>
          }
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown

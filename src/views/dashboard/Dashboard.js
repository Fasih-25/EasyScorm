import React,{useState, useEffect } from 'react'
import store from '../../store';
import { useSelector, useDispatch } from 'react-redux'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../../components/index";
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import ComboCharts from 'src/components/ComboCharts'
import {useLocation,useNavigate} from 'react-router-dom';

const Dashboard = (props) => {
  return (
    <>
      <WidgetsDropdown data = {props.user} />
      <CCard className="mb-5">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButtonGroup className="float-end me-3">
                {["Day", "Month", "Year"].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === "Month"}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <ComboCharts />
        </CCardBody>
      </CCard>
    </>
  );
}

export default Dashboard

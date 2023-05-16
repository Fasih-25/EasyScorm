import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader, PaginatedItems } from './components/index'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCardTitle,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CFormTextarea,
    CInputGroup,
    CFormSelect,
    CInputGroupText,
    CRow,
    CTable,
    CTableBody,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableDataCell,
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
import { cilFile, cilUser } from '@coreui/icons'
// import paginatedItems from "./components/paginate/PaginatedItems"

const Students = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-4">
          <CCard className="p-4">
            <CCardBody>
              <CRow>
                <CCol md={5}>
                  <div className=" d-flex   pe-4 flex-column mb-4">
                    <p className="">
                      invite your students to signup using your link
                    </p>
                    <div className="d-flex ">
                      <CInputGroup className="mb-1">
                        <CFormInput
                          type="text"
                          placeholder="hi@regex.global"
                          className="focus-ring focus-ring-light"
                        />
                      </CInputGroup>
                      <Link to="/">
                        <CButton color="primary" className="px-4 mx-1">
                          Invite
                        </CButton>
                      </Link>
                    </div>
                    <div className="d-flex justify-content-end">
                      <CButton
                        color="Link"
                        className=""
                        onClick={() =>
                          navigator.clipboard.writeText("hi@regex.global")
                        }
                        style={{ fontSize: "12px" }}
                      >
                        <CIcon icon={cilFile} /> Copy Link
                      </CButton>
                    </div>
                  </div>
                </CCol>
              </CRow>
              <CCardTitle className="h4 mb-3">Students</CCardTitle>
              <div className="d-flex mb-3 w-25 align-items-center">
                <p className=" text-dark mb-1">Show </p>
                <CFormSelect
                  aria-label="Default select example"
                  className="mx-2 "
                  style={{ width: "fit-content" }}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </CFormSelect>
                <p className=" text-dark mb-1"> entries</p>
              </div>
              <div className="overflow-x-auto" style={{ overflow: "auto" }}>
                <CTable className="mb-5 ">
                  <CTableHead>
                    <CTableRow active>
                      <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                      <CTableHeaderCell scope="col">NAME</CTableHeaderCell>
                      <CTableHeaderCell scope="col">EMAIL</CTableHeaderCell>
                      <CTableHeaderCell scope="col">
                        JOINING DATE
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">ACTION</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Ellen</CTableDataCell>
                      <CTableDataCell>ellenjein023@gmail.com</CTableDataCell>
                      <CTableDataCell>03-May-2023</CTableDataCell>
                      <CTableDataCell>
                        <Link to="/Home">
                          <CButton
                            color=""
                            className="border border-1 border-dark px-4 mx-1 mb-1 mb-md-0"
                            style={{ fontSize: "12px", width: "80px" }}
                          >
                            Ban
                          </CButton>
                        </Link>
                        <Link to="/">
                          <CButton
                            color=""
                            className="border border-1 border-dark px-3 mx-1 "
                            style={{ fontSize: "12px", width: "80px" }}
                          >
                            Delete
                          </CButton>
                        </Link>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow active>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Andrew</CTableDataCell>
                      <CTableDataCell>andrewfoxs0@gmail.com</CTableDataCell>
                      <CTableDataCell>04-May-2023</CTableDataCell>
                      <CTableDataCell>
                        <Link to="/Home">
                          <CButton
                            color=""
                            className="border border-1 border-dark px-4 mx-1  mb-1 mb-md-0"
                            style={{ fontSize: "12px", width: "80px" }}
                          >
                            Ban
                          </CButton>
                        </Link>
                        <Link to="/">
                          <CButton
                            color=""
                            className="border border-1 border-dark px-3 mx-1"
                            style={{ fontSize: "12px", width: "80px" }}
                          >
                            Delete
                          </CButton>
                        </Link>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>Jenna</CTableDataCell>
                      <CTableDataCell>jenna520@gmail.com</CTableDataCell>
                      <CTableDataCell>05-May-2023</CTableDataCell>
                      <CTableDataCell>
                        <Link to="/Home">
                          <CButton
                            color=""
                            className="border border-1 border-dark px-4 mx-1  mb-1 mb-md-0"
                            style={{ fontSize: "12px", width: "80px" }}
                          >
                            Ban
                          </CButton>
                        </Link>
                        <Link to="/">
                          <CButton
                            color=""
                            className="border border-1 border-dark px-3 mx-1"
                            style={{ fontSize: "12px", width: "80px" }}
                          >
                            Delete
                          </CButton>
                        </Link>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow active>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>Chris</CTableDataCell>
                      <CTableDataCell>chrisjack750@gmail.com</CTableDataCell>
                      <CTableDataCell>06-May-2023</CTableDataCell>
                      <CTableDataCell>
                        <Link to="/Home">
                          <CButton
                            color=""
                            className="border border-1 border-dark px-4 mx-1  mb-1 mb-md-0"
                            style={{ fontSize: "12px", width: "80px" }}
                          >
                            Ban
                          </CButton>
                        </Link>
                        <Link to="/">
                          <CButton
                            color=""
                            className="border border-1 border-dark px-3 mx-1"
                            style={{ fontSize: "12px", width: "80px" }}
                          >
                            Delete
                          </CButton>
                        </Link>
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>Tennison</CTableDataCell>
                      <CTableDataCell>tennison54@gmail.com</CTableDataCell>
                      <CTableDataCell>07-May-2023</CTableDataCell>
                      <CTableDataCell>
                        <Link to="/Home">
                          <CButton
                            color=""
                            className="border border-1 border-dark px-4 mx-1  mb-1 mb-md-0"
                            style={{ fontSize: "12px", width: "80px" }}
                          >
                            Ban
                          </CButton>
                        </Link>
                        <Link to="/">
                          <CButton
                            color=""
                            className="border border-1 border-dark px-3 mx-1"
                            style={{ fontSize: "12px", width: "80px" }}
                          >
                            Delete
                          </CButton>
                        </Link>
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </div>
              <div className="d-flex justify-content-end">
                <CButton color="dark" variant="outline" className="mx-1">
                  previous
                </CButton>
                <CButton
                  color="primary"
                  className=" "
                  style={{ fontSize: "12px" }}
                >
                  1
                </CButton>
                <CButton color="dark" variant="outline" className="mx-1">
                  Next
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </div>
        <AppFooter />
      </div>
    </div>
  );
}

export default Students


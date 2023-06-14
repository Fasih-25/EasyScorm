import { React, useEffect, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
  PaginatedItems,
} from "./components/index";
import store from "./store";
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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilFile, cilUser } from "@coreui/icons";
import Pagination from "react-js-pagination";

import Global from "./Global";
import { Fragment } from "react";

const Students = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [students, setStudents] = useState([]);
  const [selectValue, setSelectValue] = useState(5);
  const [ban, setBan] = useState("");
  const [msg, setMsg] = useState();

  const state = store.getState();
  const user = state.user;

  const newstate = store.getState();
  const portal = newstate.portal[0];

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await Global.sendEmail(email, user[0].id);
    if (response == "The link sent successfully.") {
      // console.log(response);
      setEmail("");
      alert(response);
    } else {
      console.log("ERROR");
    }
  }

  async function handleCopy(e) {
    e.preventDefault();
    try {
      const response = await Global.copyLink(user[0].id);
      if (response == "Link copied to clipboard") {
        // console.log(response);
        alert(response);
      } else {
        console.log("ERROR");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Global.getStudents(user[0].id);
        // console.log(response.message);
        if (response.message == "No Record Found") {
          setMsg("No Record Found");
          alert("Record Not Found");
        } else {
          setStudents(response);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [ban]);

  async function handleBanClick(studentId, studentban) {
    // console.log(studentId, studentban);
    try {
      const response = await Global.handleBan(studentId, studentban);

      if (response.message === "user has been banned successfully") {
        // console.log("succcess");
        alert("user has been banned successfully");
        setBan((variable) => variable + 1);
      } else if (response.message === "user has been unbanned successfully") {
        setBan((variable) => variable + 1);
        alert("user has been unbanned successfully");
      } else {
        console.log("NOT success");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteStudentClick(studentId) {
    try {
      const success = await Global.handleDeleteStudent(studentId);
      // console.log(success.message);
      if (success.message === "User has been deleted successfully") {
        setBan((variable) => variable + 1);
      } else {
        console.log("something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const [activePage, setActivePage] = useState(1);

  const itemsPerPage = selectValue; // Number of items to display per page
  const totalItems = students.length; // Total number of items

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  // Calculate the starting and ending indexes of the items to display
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the students array based on the calculated indexes
  const displayedStudents = students.slice(startIndex, endIndex);

  return (
    <div>
      <AppSidebar user={user[0]} portal={portal} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader user={user[0]} />
        <div className="body flex-grow-1 px-4">
          <CCard className="p-4">
            <CCardBody>
              <CRow>
                <CCol md={5}>
                  <CForm onSubmit={handleSubmit}>
                    <div className=" d-flex   pe-4 flex-column mb-4">
                      <p className="">
                        invite your students to signup using your link
                      </p>
                      <div className="d-flex ">
                        <CInputGroup className="mb-1">
                          <CFormInput
                            type="email"
                            placeholder="hi@regex.global"
                            className="focus-ring focus-ring-light"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </CInputGroup>
                        <CButton
                          type="submit"
                          color="primary"
                          className="px-4 mx-1"
                        >
                          Invite
                        </CButton>
                      </div>
                      <div className="d-flex justify-content-end">
                        <CButton
                          color="Link"
                          className=""
                          onClick={handleCopy}
                          style={{ fontSize: "12px" }}
                        >
                          <CIcon icon={cilFile} /> Copy Link
                        </CButton>
                      </div>
                    </div>
                  </CForm>
                </CCol>
              </CRow>
              <CCardTitle className="h4 mb-3">Students</CCardTitle>
              <div className="d-flex mb-3 w-25 align-items-center">
                <p className=" text-dark mb-1">Show </p>
                <CFormSelect
                  aria-label="Default select example"
                  className="mx-2 "
                  style={{ width: "fit-content" }}
                  onChange={(e) => setSelectValue(e.target.value)}
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
                    {msg === "No Record Found" ? (
                      <>
                        <CTableRow>
                          <CTableHeaderCell
                            colspan="5"
                            scope="row"
                            className="text-center"
                          >
                            Data Not Found
                          </CTableHeaderCell>
                        </CTableRow>
                      </>
                    ) : (
                      <>
                        {displayedStudents.map((item, index) => {
                          return (
                            <>
                              <CTableRow
                                className={
                                  item.status === 0 ? "d-none" : "d-table-row"
                                }
                              >
                                <CTableHeaderCell scope="row">
                                  {item.id}
                                </CTableHeaderCell>
                                <CTableDataCell>{item.fullname}</CTableDataCell>
                                <CTableDataCell>{item.email}</CTableDataCell>
                                <CTableDataCell>03-May-2023</CTableDataCell>
                                <CTableDataCell>
                                  <CButton
                                    onClick={() =>
                                      handleBanClick(item.id, item.ban)
                                    }
                                    color=""
                                    className="border border-1 border-dark px-4 mx-1 mb-1 mb-md-0"
                                    style={{
                                      fontSize: "12px",
                                      width: "90px",
                                    }}
                                  >
                                    {item.ban == 1 ? "Ban" : "Unban"}
                                  </CButton>
                                  <CButton
                                    onClick={() =>
                                      handleDeleteStudentClick(item.id)
                                    }
                                    color=""
                                    className="border border-1 border-dark px-4 mx-1 mb-1 mb-md-0"
                                    style={{
                                      fontSize: "12px",
                                      width: "90px",
                                    }}
                                  >
                                    Delete
                                  </CButton>
                                </CTableDataCell>
                              </CTableRow>
                            </>
                          );
                        })}
                      </>
                    )}
                  </CTableBody>
                </CTable>
              </div>
              <div className="d-flex justify-content-end">
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={itemsPerPage}
                  totalItemsCount={totalItems}
                  pageRangeDisplayed={5} // Number of page links to display
                  onChange={handlePageChange}
                  itemClass="page-item"
                  linkClass="page-link"
                  prevPageText="Previous"
                  nextPageText="Next"
                />
              </div>
            </CCardBody>
          </CCard>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default Students;

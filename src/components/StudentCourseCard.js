import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";

const StudentCourseCard = (props) => {
  const progressBarRef = useRef(null);
  var progressVal = "100";
  var progressNum = parseInt(progressVal);
  useEffect(() => {
    progressBarRef.current.style.setProperty("--progress-value", progressVal);
  }, []);
  
  return (
    <CRow
      className={
        props.status == 0 ? "d-none" : "justify-content-center mb-4 courseCard "
      }
    >
      <CCol md={6} className="h-100">
        <CCard className="text-white border border-0 h-100">
          <CCardBody className="p-0">
            <img src={props.coverImage} className=" w-100  courseThumnail" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="p-4 h-100  backgroundColor">
          <CCardBody className="d-flex flex-column justify-content-between">
            <CCardGroup className="flex-column">
              <CCardTitle className="h3 fw-bold mb-4">
                {props.courseName}
              </CCardTitle>
              <CCardText className="text-black fw-semibold ">
                {props.description}
              </CCardText>
            </CCardGroup>
            <CCardGroup className="d-flex align-items-center mt-3">
              <CButton
                color="transparent "
                className={
                  progressNum === 0
                    ? " border border-2 border-dark me-3 px-5  fs-6 fw-semibold "
                    : "d-none"
                }
                disabled={props.user.ban === 0}
              >
                Start
              </CButton>
              <CButton
                color="transparent "
                className={
                  progressNum > 0 && progressNum < 100
                    ? " border border-2 border-dark me-3 px-5  fs-6 fw-semibold "
                    : "d-none"
                }
                disabled={props.user.ban === 0}
              >
                Start over
              </CButton>
              <CButton
                color="transparent "
                className={
                  progressNum > 0 && progressNum < 100
                    ? "border border-2 border-dark mx-3 px-5  fs-6 fw-semibold "
                    : " d-none "
                }
                disabled={props.user.ban === 0}
              >
                Resume
              </CButton>
              <CButton
                color="transparent "
                className={
                  progressNum === 100
                    ? "border border-2 border-dark me-3 px-5  fs-6 fw-semibold "
                    : " d-none "
                }
                disabled={props.user.ban === 0}
              >
                Start Again
              </CButton>
              <div className="progress-bar js " ref={progressBarRef}>
                {progressVal}%
              </div>
            </CCardGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default StudentCourseCard;

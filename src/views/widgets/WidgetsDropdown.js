import React, { useState, useEffect } from "react";
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from "@coreui/react";
import { getStyle } from "@coreui/utils";
import { CChartBar, CChartLine } from "@coreui/react-chartjs";
import CIcon from "@coreui/icons-react";
import { cilArrowBottom, cilArrowTop, cilOptions } from "@coreui/icons";
import axios from "axios";
import store from "src/store";
import Global from "src/Global";

const WidgetsDropdown = (props) => {
  const state = store.getState();
  const user = state.user;
  const [message, setMessage] = useState("");
  const [newVariable, setNewVariable] = useState(props.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Global.getTotalRecords(newVariable.id);
        if (response) {
          setMessage(response);
        } else {
          console.log("something went wrong");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props.data]);

  return (
    <CRow>
      <CCol sm={12} lg={4}>
        <CWidgetStatsA
          className="mb-4 h-auto"
          color="primary"
          title={
            <div className="d-flex align-items-center">
              <p style={{ fontSize: "50px" }} className="fw-normal text-white">
                {" "}
                {message.course == 0 ? (
                  <> No Record Found </>
                ) : (
                  <>
                    {message.course}
                    <CIcon
                      className="text-danger"
                      icon={cilArrowBottom}
                      style={{ height: "35px", width: "35px" }}
                    />
                  </>
                )}
              </p>
            </div>
          }
          value={
            <>
              <p style={{ fontSize: "15px" }} className="text-white">
                No Of Courses
              </p>
            </>
          }
        />
      </CCol>

      <CCol sm={12} lg={4}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          title={
            <div className="d-flex align-items-center">
              <p style={{ fontSize: "50px" }} className="fw-normal text-white">
                {message.course == 0 ? (
                  <> No Record Found </>
                ) : (
                  <>
                    {message.students}{" "}
                    <CIcon
                      className=""
                      icon={cilArrowTop}
                      style={{ height: "35px", width: "35px" }}
                    />
                  </>
                )}
              </p>
            </div>
          }
          value={
            <>
              <p style={{ fontSize: "15px" }} className="text-white">
                No Of Students
              </p>
            </>
          }
        />
      </CCol>
      <CCol sm={12} lg={4}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          title={
            <div className="d-flex align-items-center">
              <p style={{ fontSize: "50px" }} className="fw-normal text-white">
                75{" "}
                <CIcon
                  className=""
                  icon={cilArrowTop}
                  style={{ height: "35px", width: "35px" }}
                />
              </p>
            </div>
          }
          value={
            <>
              <p style={{ fontSize: "15px" }} className="text-white">
                Courses Completed
              </p>
            </>
          }
        />
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;

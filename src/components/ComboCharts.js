import React from 'react'
import { CChart, CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import {
    CRow,
    CCol,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle,
    CWidgetStatsA,
  } from '@coreui/react'

const ComboCharts = () => {
  return (
    <>
        <CRow>
            <CCol sm={12} lg={6}>
            <h6 className='mb-4'>Course Completed</h6>
            <CChart
                type="line"
                data={{
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                    label: "",
                    backgroundColor: "rgba(78,110,138, 1)",
                    borderColor: "rgba(78,110,138, 1)",
                    pointBackgroundColor: "rgba(78,110,138, 1)",
                    pointBorderColor: "#fff",
                    data: [5, 20, 12, 35, 40, 28, 31, 50, 70],
                },
                {
                    label: "    ",
                    backgroundColor: "rgba(151,202,117, 1)",
                    borderColor: "rgba(151,202,117, 1)",
                    pointBackgroundColor: "rgba(151,202,117,1)",
                    data: [10, 25, 17, 40,45, 33, 36, 55, 75]
                    },
                    {
                    label: "",
                    type: 'bar',
                    backgroundColor: "rgba(151,202,117, 1)",
                    borderColor: "rgba(151,202,117, 1)",
                    pointBackgroundColor: "rgba(151,202,117, 1)",
                    pointBorderColor: "#fff",
                    data: [5, 20, 12, 35, 40, 28, 31, 50, 70],
                    },
                    {
                    label: "",
                    type: 'bar',
                    backgroundColor: "rgba(78,110,138, 1)",
                    borderColor: "rgba(78,110,138, 1)",
                    pointBackgroundColor: "rgba(78,110,138, 1)",
                    pointBorderColor: "#fff",
                    data: [10, 25, 17, 40,45, 33, 36, 55, 75]
                    },
                    
                ],
                }}
            />
            </CCol>
            <CCol sm={12} lg={6}>
            <h6 className='mb-4'>Students Joining</h6>
            <CChart
                type="line"
                data={{
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                    label: "",
                    backgroundColor: "rgba(78,110,138, 1)",
                    borderColor: "rgba(78,110,138, 1)",
                    pointBackgroundColor: "rgba(78,110,138, 1)",
                    pointBorderColor: "#fff",
                    data: [5, 20, 12, 35, 40, 28, 31, 50, 70],
                },
                {
                    label: "    ",
                    backgroundColor: "rgba(151,202,117, 1)",
                    borderColor: "rgba(151,202,117, 1)",
                    pointBackgroundColor: "rgba(151,202,117,1)",
                    data: [10, 25, 17, 40,45, 33, 36, 55, 75]
                    },
                    {
                    label: "",
                    type: 'bar',
                    backgroundColor: "rgba(151,202,117, 1)",
                    borderColor: "rgba(151,202,117, 1)",
                    pointBackgroundColor: "rgba(151,202,117, 1)",
                    pointBorderColor: "#fff",
                    data: [5, 20, 12, 35, 40, 28, 31, 50, 70],
                    },
                    {
                    label: "",
                    type: 'bar',
                    backgroundColor: "rgba(78,110,138, 1)",
                    borderColor: "rgba(78,110,138, 1)",
                    pointBackgroundColor: "rgba(78,110,138, 1)",
                    pointBorderColor: "#fff",
                    data: [10, 25, 17, 40,45, 33, 36, 55, 75]
                    },
                    
                ],
                }}
            />
            </CCol>
        </CRow>    
    </>
  );
}

export default ComboCharts
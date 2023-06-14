import React, { useState, useEffect } from "react";
import { CChart, CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import { CRow, CCol } from "@coreui/react";
import Global from "src/Global";

const ComboCharts = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await Global.getJoiningInfo();
      // console.log(response);
      if (response) {
        setPosts(response)
      }
    };
    fetchData();
  }, []);

  const january = (posts.find(item => item.month === "January") || {}).no_of_student || 0;
  const february = (posts.find(item => item.month === "February") || {}).no_of_student || 0;
  const march = (posts.find(item => item.month === "March") || {}).no_of_student || 0;
  const april = (posts.find(item => item.month === "April") || {}).no_of_student || 0;
  const may = (posts.find(item => item.month === "May") || {}).no_of_student || 0;
  const june = (posts.find(item => item.month === "June") || {}).no_of_student || 0;
  const july = (posts.find(item => item.month === "July") || {}).no_of_student || 0;
  const august = (posts.find(item => item.month === "August") || {}).no_of_student || 0;
  const september = (posts.find(item => item.month === "September") || {}).no_of_student || 0;
  const octuber = (posts.find(item => item.month === "October") || {}).no_of_student || 0;
  const november = (posts.find(item => item.month === "November") || {}).no_of_student || 0;
  const december = (posts.find(item => item.month === "December") || {}).no_of_student || 0;

  return (
    <>
      <CRow>
        <CCol sm={12} lg={6}>
          <h6 className="mb-4">Course Completed</h6>
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
                "August",
                "September",
                "Octuber",
                "November",
                "December",
              ],
              datasets: [
                {
                  label: "",
                  backgroundColor: "rgba(78,110,138, 1)",
                  borderColor: "rgba(78,110,138, 1)",
                  pointBackgroundColor: "rgba(78,110,138, 1)",
                  pointBorderColor: "#fff",
                  data: [5, 20, 12, 35, 40, 28, 31, 50, 70, 15, 8, 20],
                },
                {
                  label: "    ",
                  backgroundColor: "rgba(151,202,117, 1)",
                  borderColor: "rgba(151,202,117, 1)",
                  pointBackgroundColor: "rgba(151,202,117,1)",
                  data: [10, 25, 17, 40, 45, 33, 36, 55, 75, 15, 20, 35],
                },
                {
                  label: "",
                  type: "bar",
                  backgroundColor: "rgba(151,202,117, 1)",
                  borderColor: "rgba(151,202,117, 1)",
                  pointBackgroundColor: "rgba(151,202,117, 1)",
                  pointBorderColor: "#fff",
                  data: [5, 20, 12, 35, 40, 28, 31, 50, 70, 15, 8, 20],
                },
                {
                  label: "",
                  type: "bar",
                  backgroundColor: "rgba(78,110,138, 1)",
                  borderColor: "rgba(78,110,138, 1)",
                  pointBackgroundColor: "rgba(78,110,138, 1)",
                  pointBorderColor: "#fff",
                  data: [10, 25, 17, 40, 45, 33, 36, 55, 75, 15, 20, 35],
                },
              ],
            }}
          />
        </CCol>
        <CCol sm={12} lg={6}>
          <h6 className="mb-4">Students Joining</h6>
          {/* <DataComponent posts={posts} /> */}
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
                "August",
                "September",
                "Octuber",
                "November",
                "December",
              ],
              datasets: [
                {
                  label: "",
                  backgroundColor: "rgba(78,110,138, 1)",
                  borderColor: "rgba(78,110,138, 1)",
                  pointBackgroundColor: "rgba(78,110,138, 1)",
                  pointBorderColor: "#fff",
                  data: [
                    january,
                    february,
                    march,
                    april,
                    may,
                    june,
                    july,
                    august,
                    september,
                    octuber,
                    november,
                    december,
                  ],
                },
                {
                  label: "    ",
                  backgroundColor: "rgba(151,202,117, 1)",
                  borderColor: "rgba(151,202,117, 1)",
                  pointBackgroundColor: "rgba(151,202,117,1)",
                  data: [
                    january,
                    february,
                    march,
                    april,
                    may,
                    june,
                    july,
                    august,
                    september,
                    octuber,
                    november,
                    december,
                  ],
                },
                {
                  label: "",
                  type: "bar",
                  backgroundColor: "rgba(151,202,117, 1)",
                  borderColor: "rgba(151,202,117, 1)",
                  pointBackgroundColor: "rgba(151,202,117, 1)",
                  pointBorderColor: "#fff",
                  data: [
                    january,
                    february,
                    march,
                    april,
                    may,
                    june,
                    july,
                    august,
                    september,
                    octuber,
                    november,
                    december,
                  ],
                },
                {
                  label: "",
                  type: "bar",
                  backgroundColor: "rgba(78,110,138, 1)",
                  borderColor: "rgba(78,110,138, 1)",
                  pointBackgroundColor: "rgba(78,110,138, 1)",
                  pointBorderColor: "#fff",
                  data: [
                    january,
                    february,
                    march,
                    april,
                    may,
                    june,
                    july,
                    august,
                    september,
                    octuber,
                    november,
                    december,
                  ],
                },
              ],
            }}
          />
        </CCol>
      </CRow>
    </>
  );
};

export default ComboCharts;

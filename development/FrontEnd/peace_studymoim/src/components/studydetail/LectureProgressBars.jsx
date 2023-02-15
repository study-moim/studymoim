import Chart from "../studypages/Chart";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function LectureProgressBars(props) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [chartData, setChartData] = useState([]);
  const studyId = useParams();
  // 내가 듣는 강좌들의 id 목록을 담은 courseIdList 
  // let courseIdList = [];

  // props.state.map((course) => {
  //   courseIdList.push(course.course);
  // });
  useEffect(() => {
    const getChartData = async () => {
      await fetch(
        `http://${API_SERVER}/api/v1/study/coursehistory/${studyId.study_id}`
      )
        .then((res) => res.json())
        .then((json) => {
          setChartData(json);
        });
    };
    getChartData();
  }, [studyId.study_id]);
  return (
    <>
      <div className="flex-grow-0 flex-shrink-0 w-1/2 relative">
        {chartData.map((course) => {
        })} 
        {/* {props.state.map((course) => {
          
        })}  */}

        {/* {chartDataPoints.map((course) => {     
        })} */}
        {/* <Chart className="h-full" dataPoints={chartDataPoints} /> */}
      </div>
    </>
  );
}

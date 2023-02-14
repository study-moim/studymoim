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
  // console.log('콜ㄹㄹ스', courseIdList)
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


  console.log('tmqkf', chartData)

  return (
    <>
      <div className="flex-grow-0 flex-shrink-0 w-1/2 relative">
        {chartData.map((course) => {
          console.log(course)    
        })} 
        {/* {props.state.map((course) => {
          
          console.log(course.course.course_id) 
        })}  */}

        {/* {chartDataPoints.map((course) => {
          console.log(course)
          console.log(course.val)       
        })} */}
        {/* <Chart className="h-full" dataPoints={chartDataPoints} /> */}
      </div>
    </>
  );
}

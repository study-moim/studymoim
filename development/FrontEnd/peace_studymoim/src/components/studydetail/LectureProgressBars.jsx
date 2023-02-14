import Chart from "../studypages/Chart";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function LectureProgressBars(props) {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [chartDataPoints, setChartDataPoints] = useState();
  const studyId = useParams();

  console.log(props.state) 
  useEffect(() => {
    const getChartDataPoints = async() => {
      await fetch(
        // `http://${API_SERVER}/api/v1/study/coursehistory/${studyId.study_id}`
        `http://${API_SERVER}/api/v1/study/coursehistory/1469` 
      )
      .then((res) => res.json())
      .then((json) => {
        setChartDataPoints(json); 
      })
    };
    getChartDataPoints(); 
  }, [studyId.study_id]); 

  console.log(chartDataPoints)    
  return (  
    <>
    
      <div className="flex-grow-0 flex-shrink-0 w-1/2 relative">
        {/* {chartDataPoints.map((course) => {
          console.log(course)
          console.log(course.val)       
        })} */}
        {/* <Chart dataPoints={chartDataPoints} /> */}
      </div>
    </>
  );
}

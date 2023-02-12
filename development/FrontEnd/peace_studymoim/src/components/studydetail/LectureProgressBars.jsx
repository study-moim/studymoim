import Chart from "../studypages/Chart";
export default function LectureProgress() {

    const chartDataPoints = [
        {value: 100, label: '전체'},  
        {value: 49, label: '채린'},
        {value: 70, label: '서연'},
        {value: 100, label: '동준'},
        {value: 30, label: '독준'},
      ]; 
    
  return (
    <>
    
      <div className="flex-grow-0 flex-shrink-0 w-1/2 relative"> 
        <Chart dataPoints={chartDataPoints} />
      </div>
    </>
  );
}

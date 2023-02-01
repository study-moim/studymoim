import Iframe from "react-iframe";

export default function PlayingVideoFrame({videoId}) {
  return (
    <div className="border w-full h-full">
      <Iframe
        url={`https://www.youtube.com/embed/${videoId}`}
        className="w-full h-full"
      />
    </div>
  );
}

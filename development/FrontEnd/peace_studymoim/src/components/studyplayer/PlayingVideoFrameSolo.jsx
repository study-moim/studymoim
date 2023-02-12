import YouTube from "react-youtube";

export default function PlayingVideoFrameSolo({
  videoId,
  setNowVideo,
  startVideo,
}) {
  
  const playWhere = (event) => {
    setNowVideo(event.target.playerInfo.currentTime);
  };
  return (
    <div className="border w-full h-full">
      <YouTube
        className="w-full h-full video"
        videoId={videoId}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            start: startVideo,
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
          },
        }}
        //이벤트 리스너
        onPlay={playWhere}
      />
    </div>
  );
}

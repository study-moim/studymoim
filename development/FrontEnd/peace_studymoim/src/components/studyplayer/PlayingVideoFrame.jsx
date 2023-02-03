import Iframe from "react-iframe";
import YouTube from 'react-youtube';

export default function PlayingVideoFrame({videoId}) {

  return (
    <div className="border w-full h-full">
      <YouTube
          videoId={videoId}
          onPause={_onReady}
      />
    </div>
  );
    const _onReady = (event) => {
        console.log(event)
    }

}

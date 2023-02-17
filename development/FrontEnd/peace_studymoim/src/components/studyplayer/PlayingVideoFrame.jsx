import YouTube from "react-youtube";
import { useEffect, useState } from "react";

export default function PlayingVideoFrame(props) {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    if (player.id != null && props.playerSync != null) {
      if (player.playerInfo.playerState != props.playerSync.playerState) {
        if (player.playerInfo.playerState == 2) {
          player.seekTo(props.playerSync.currentTime);
          player.playVideo();
        } else if (player.playerInfo.playerState == 1) player.pauseVideo();
      }
      player.setPlaybackRate(props.playerSync.playbackRate);
    }
  }, [props]);
  const _onStatePlay = (event) => {
    props.setNowVideo(event.target.playerInfo.currentTime);
    setPlayer(event.target);
    let data = {
      type: "PLAY",
      currentTime: event.target.playerInfo.currentTime,
      playbackRate: event.target.playerInfo.playbackRate,
      playerState: 1,
    };
    props.eventHandler.onStateChange(data);
  };
  const _onStatePause = (event) => {
    props.setNowVideo(event.target.playerInfo.currentTime);
    setPlayer(event.target);
    let data = {
      type: "PAUSE",
      currentTime: event.target.playerInfo.currentTime,
      playbackRate: event.target.playerInfo.playbackRate,
      playerState: 2,
    };
    props.eventHandler.onStateChange(data);
  };
  return (
    <div className="border w-full h-full">
      <YouTube
        className="w-full h-full"
        videoId={props.videoId}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            start: props.startVideo,
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
          },
        }}
        //이벤트 리스너
        onPlay={_onStatePlay}
        onPause={_onStatePause}
        playerInfo={props.playerSync}
      />
    </div>
  );
}

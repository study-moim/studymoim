import YouTube from 'react-youtube';
import {useEffect, useRef, useState} from "react";

export default function PlayingVideoFrame(props) {

    const [player, setPlayer] = useState({});

    useEffect(() => {
        if(player.id != null && props.playerSync != null) {
            console.log(player.playerInfo.playerState, props.playerSync.playerState)
            if(player.playerInfo.playerState != props.playerSync.playerState) {
                if (player.playerInfo.playerState == 2){
                    player.seekTo(props.playerSync.currentTime);
                    player.playVideo();
                }
                else if (player.playerInfo.playerState == 1) player.pauseVideo();
            }
            player.setPlaybackRate(props.playerSync.playbackRate);
        }
    }, [props]);
    const _onStatePlay = (event) => {
        console.log(event.target);
        setPlayer(event.target);
        let data = {
            currentTime: event.target.playerInfo.currentTime,
            playbackRate: event.target.playerInfo.playbackRate,
            playerState: 1
        }
        props.eventHandler.onStateChange(data);
    }
    const _onStatePause = (event) => {
        setPlayer(event.target);
        let data = {
            currentTime: event.target.playerInfo.currentTime,
            playbackRate: event.target.playerInfo.playbackRate,
            playerState: 2
        }
        props.eventHandler.onStateChange(data);
    }
  return (
    <div className="border w-full h-full">
        <YouTube
            className="w-full h-full"
            videoId={props.videoId}
            //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
            //밑에서 더 설명하겠습니다.
            opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                    autoplay: 0, //자동재생 O
                    rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
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

import YouTube from 'react-youtube';

export default function PlayingVideoFrameSolo({ videoId }) {

  return (
    <div className="border w-full h-full">
        <YouTube
            className="w-full h-full"
            videoId={videoId}
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
        />
    </div>
  );
}

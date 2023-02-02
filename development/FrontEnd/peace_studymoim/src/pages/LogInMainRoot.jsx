// TODO: 이 화면은 로그인된 애는 못오게 해야함
import { Link } from "react-router-dom";

/** @function 로그인창 */
export default function LogInMainRoot() {
  const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const REDIRECT_URI = `http://${API_SERVER}/api/v1/oauth/login`;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URI;  
  }; 
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col justify-start items-center relative gap-[60px]">
        {/* TODO: 홈화면으로 가게해야하나? */}
        <img
          src="/logo.png"
          className="flex-grow-0 flex-shrink-0 w-[495px] h-[271px] object-cover"
        />
        
        <button onClick={handleLogin}>
          카카오로 바로 가즈아! 
        </button>

        {/* TODO: 관심사 선택페이지 이동용 라우트라서 나중에 지워야함 */}
        <Link to="/choice" className="text-xl">
          관심사 선택 테스트용 Click
        </Link>
      </div>
    </div>
  );
}

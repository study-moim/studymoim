import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

export default function LogInMainRoot() {
  const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const REDIRECT_URI = `http://${API_SERVER}/api/v1/oauth/login`;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const navigate = useNavigate(); 
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URI;
  }; 

  const moveToMain = () => {
    navigate('/'); 
  }
  return (
    <div className="max-w-6xl mx-auto p-[140px] mb-5">
      <div className="w-full h-[500px] rounded-lg shadow-lg pt-[50px]">
        <div className="flex flex-col items-center justify-center py-5 px-6 gap-5">
          <img
            src={"/logo.png"}
            className="border w-[150px] object-cover rounded-full"
          />
          <p className="text-gray-500 text-[22px] text-center">
            스터디 모임은 쓰임 <br /> 간편 로그인 및 회원가입
          </p>
          <button
            className="bg-[#F7E600] w-[250px] h-[50px] rounded-[7px] flex justify-center items-center gap-4 hover:scale-105"
            onClick={handleLogin}
          >
            <FontAwesomeIcon
              icon={faComment}
              size="lg"
              className="text-[#3A1D1D]"
            />
            <p className="font-bold">카카오로 시작하기</p>
          </button>

          <button
           className="bg-white w-[250px] h-[50px] rounded-[7px] flex justify-center items-center gap-4 hover:scale-105 border-2 border-[#B1B2FF]"
           onClick={moveToMain}>
            <FontAwesomeIcon
              icon={faHouse}
              size="lg"
              className="text-[#3A1D1D]"
            />
            <p className="font-bold">메인으로 돌아가기</p>
          </button>
        </div>
      </div>
    </div>
  );
}

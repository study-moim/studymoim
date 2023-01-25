// TODO: 이 화면은 로그인된 애는 못오게 해야함
import { Link } from "react-router-dom";

/** @function 로그인창 */
export default function LogInMain() {
  return (
    <>
      <div className="flex flex-col justify-start items-center relative gap-[60px]">
        {/* TODO: 홈화면으로 가게해야하나? */}
        <img
          src="\src\assets\logo.png"
          className="flex-grow-0 flex-shrink-0 w-[495px] h-[271px] object-cover"
        />
        {/* TODO: 구글 소셜 연결 기능 추가, 이 버튼을 추가 컴포로 분리해야하나? */}
        <button
          className="flex-grow-0 flex-shrink-0 w-[375px] h-10 relative overflow-hidden rounded-[20px] bg-white"
          style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        >
          <div className="flex justify-start items-center absolute left-[104px] top-2.5 gap-4">
            {/* 하트 */}
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M17.3667 3.84172C16.941 3.41589 16.4357 3.0781 15.8795 2.84763C15.3232 2.61716 14.7271 2.49854 14.125 2.49854C13.5229 2.49854 12.9268 2.61716 12.3705 2.84763C11.8143 3.0781 11.309 3.41589 10.8833 3.84172L10 4.72506L9.11666 3.84172C8.25692 2.98198 7.09086 2.49898 5.875 2.49898C4.65914 2.49898 3.49307 2.98198 2.63333 3.84172C1.77359 4.70147 1.29059 5.86753 1.29059 7.08339C1.29059 8.29925 1.77359 9.46531 2.63333 10.3251L3.51666 11.2084L10 17.6917L16.4833 11.2084L17.3667 10.3251C17.7925 9.89943 18.1303 9.39407 18.3608 8.83785C18.5912 8.28164 18.7099 7.68546 18.7099 7.08339C18.7099 6.48132 18.5912 5.88514 18.3608 5.32893C18.1303 4.77271 17.7925 4.26735 17.3667 3.84172Z"
                fill="#B1B2FF"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">
              Google로 로그인 하기
            </p>
          </div>
        </button>
        {/* TODO: 관심사 선택페이지 이동용 라우트라서 나중에 지워야함 */}
        <Link to="/choice" className="text-xl">관심사 선택 테스트용 Click</Link>
      </div>
    </>
  );
}

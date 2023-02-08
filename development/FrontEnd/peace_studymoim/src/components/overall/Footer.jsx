import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  // if (window.location.pathname.startsWith("/player")) return null;
  return (
    <div className="w-full h-[350px] mt-[50px] pt-[70px] p-[50px] bg-gray-100 text-[14px] text-gray-500">
      <div className="max-w-6xl mx-auto px-4 mb-5 flex flex-col">
        {/* <div>
      혹시 몰라 ^^*
      </div> */}
        <div className="flex flex-col">
          <div className="flex flex-row gap-5">
            <p className="font-bold">이용안내</p>
            <p>|</p>
            <Link to={`/course`}>
              <p>강좌</p>
            </Link>
            <Link to={`/study`}>
              <p>스터디</p>
            </Link>
            <Link to={`/community`}>
              <p>커뮤니티</p>
            </Link>
          </div>
          <div className="w-full border-b mt-[40px] border-gray-300"></div>
          <img src="/logo.png" className="rounded-full w-[100px]" />
          <div className="gap-2">
            <p>쓰임 주식회사</p>
            <p>사업자 등록번호: 1588-3357</p>
            <p>사업장 소재지: 서울특별시 강남구 역삼동 테헤란로 212</p>
          </div>
          <div className="pt-2 text-end">
            <FontAwesomeIcon icon={faCopyright} /> 피스
          </div>
        </div>
      </div>
    </div>
  );
}

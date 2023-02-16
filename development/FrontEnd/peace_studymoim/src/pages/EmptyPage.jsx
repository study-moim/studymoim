import { Link } from "react-router-dom";


/** 빈페이지로 접속할 경우의 컴포넌트 */
export default function EmptyPage () {
  return (
    <div>
      <h2>잘못된 접근입니다.</h2>
      <Link to="/">돌아가기</Link>
    </div>
  )
}
import userInfo from "../../zustand/store";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import RingModal from "./RingModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";


/** @function 로그인된상태네비게이션바 */
export default function NavBarLogIn() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { setLogOut , info } = userInfo();
  const [alarmList, setAlarmList] = useState([]);
  const [alarmIsPresent, setAlarmStatus] = useState(false);

  useEffect(() => {
      checkAlarms();
  }, [info])
  if (!info) {
    return null
  }
  async function checkAlarms() {
      if(!info.userId){
          return
      }
      let resp = await fetch(`http:///${API_SERVER}/api/v1/user/${info.userId}/check/alarm`)
      let alarmIsPresent = await resp.json();
      setAlarmStatus(alarmIsPresent)
  }
  async function getAlarmList(userId) {
      let resp = await fetch(`http:///${API_SERVER}/api/v1/user/${userId}/alarms`)
      let alarmList = await resp.json();
      setAlarmList(alarmList);
  }

  function openModalHandler() {
      getAlarmList(info.userId)
      setShowModal(true);
  }
  function closeModalHandler() {
    checkAlarms();
    setShowModal(false);
  }

  function logoutHandler() {
    setLogOut();
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="flex justify-end items-center w-[360px] relative gap-[10px]">
      <div onClick={() => openModalHandler()} className="w-[30px] flex items-center hover:scale-110 cursor-pointer">
        <FontAwesomeIcon icon={faBell} className="text-[20px]"/>
        {alarmIsPresent ? (<span className="relative bottom-1 right-2 inline-flex rounded-full h-2 w-2 bg-red-500"></span>) : null}
      </div>
      {showModal ? <RingModal alarmList={alarmList} setAlarmList={setAlarmList} onCancel={closeModalHandler} /> : null}
      <a href={`/mypage/${info.userId}`}>
        <button
          className="text-[14px] w-[80px] text-white px-3 py-[5px] rounded-[10px] bg-[#f0db4f] hover:bg-[#ebd43c]"
        >
          MyPage
        </button>
      </a>
      <button
        className="text-[14px] w-[80px] text-white px-3 py-[5px] rounded-[10px] bg-[#ff7262] hover:bg-[#ff5441]"
        onClick={logoutHandler}
      >
        로그아웃
      </button>
    </div>
  );
}

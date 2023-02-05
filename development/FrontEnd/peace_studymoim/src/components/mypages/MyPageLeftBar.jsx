import { userInfo } from "../../zustand/store";
import MyPageMine from "./MyPageMine";
import MyPageYours from "./MyPageYours";

export default function MyPageLeftBar({getClick, clickModal, clickUserId}) {

  const { info } = userInfo();
  if (clickUserId.clickWho === info.userId || clickUserId.clickWho === 0 ) {
    return (
      <MyPageMine getClick={getClick} myId = {info.userId} clickModal={clickModal}/>
    );
  } else {
    <MyPageYours getClick={getClick} yourId = {clickUserId} clickModal={clickModal}/>
  }
}

import userInfo from "../../zustand/store";
import MyPageMine from "./MyPageMine";
import MyPageYours from "./MyPageYours";

export default function MyPageLeftBar({ getClick, clickModal, getPageName }) {
  const { info } = userInfo();
  if (getPageName === info.userId) {
    return (
      <MyPageMine
        getClick={getClick}
        myId={info.userId}
        clickModal={clickModal}
      />
    );
  } else {
    return (
      <MyPageYours
        getClick={getClick}
        yourId={getPageName}
        clickModal={clickModal}
      />
    );
  }
}

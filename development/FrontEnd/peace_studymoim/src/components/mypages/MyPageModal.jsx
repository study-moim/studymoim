import React from "react";
import FollowerList from "./FollowerList";
import FollowingList from "./FollowingList";
import MyPageUpdateForm from "./MyPageUpdateForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router";

export default function MyPageModal({ showModal, clickModal, setShowModal, getPageName }) {
  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      setShowModal(null);
    }
  };
  const userId = useLocation().pathname.substring(8, 255) * 1
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const followings = useFetch(`http://${API_SERVER}/api/v1/user/${userId}/follow/following/list/`);
  const followers = useFetch(`http://${API_SERVER}/api/v1/user/${userId}/follow/follower/list/`);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto min-w-[400px] max-w-fit">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between pl-5 py-2 border-b border-solid rounded-t">
                  {showModal === "follower" ? (
                    <h3 className="text-[16px] font-semibold">팔로워</h3>
                  ) : null}
                  {showModal === "following" ? (
                    <h3 className="text-[16px] font-semibold">팔로잉</h3>
                  ) : null}
                  {showModal === "modify" ? (
                    <h3 className="text-[16px] font-semibold">프로필 수정</h3>
                  ) : null}
                  <button className="pr-6 py-2 transition-all" onClick={clickModal}>
                    <FontAwesomeIcon icon={faXmark} size="lg" className="hover:text-red-500" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 flex-auto">
                  <div className="my-4 leading-relaxed overflow-auto">
                    {showModal === "follower" ? (
                      <div>
                        {followers.map((follower) => (
                          <FollowerList key={follower.userId} follower={follower} userId={userId} />
                        ))}
                      </div>
                    ) : null}

                    {showModal === "following" ? (
                      <div>
                        {followings.map((following) => (
                          <FollowingList
                            key={following.userId}
                            following={following}
                            userId={userId}
                          />
                        ))}
                      </div>
                    ) : null}
                    {showModal === "modify" ? (
                      <MyPageUpdateForm key={userId} userId={userId} />
                    ) : null}
                  </div>
                </div>
                {/* footer */}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

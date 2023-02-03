import React from "react";

export default function RingModal(props) {
  window.onkeydown = function (event) {
    if (event.keyCode == 27) {
      props.onCancel();
    }
  };
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        style={{ filter: "drop-shadow(0px 5px 15px rgba(0,0,0,0.2))" }}
      >
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-px">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[440px] gap-2 pt-2 pb-4 bg-white"
              style={{ boxShadow: "0px 1px 0px 0 #e4e8ee" }}
            >
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-2">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-4 h-2 gap-2.5 pl-2" />
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 px-4">
                  <div className="flex justify-start items-center flex-grow relative gap-2.5">
                    <p className="flex-grow w-[360px] text-sm text-left">
                      <span className="flex-grow w-[360px] text-sm font-bold text-left text-[#7b61ff]">
                        독기가득독준
                      </span>
                      <span className="flex-grow w-[360px] text-sm text-left text-black">
                        님이
                      </span>
                      <span className="flex-grow w-[360px] text-sm font-bold text-left text-black">
                        ‘프론트엔드 다모여’
                      </span>
                      <span className="flex-grow w-[360px] text-sm text-left text-black">
                        {" "}
                        스터디 가입을 요청했습니다.{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-2 pl-16">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-7 overflow-hidden gap-2.5 px-2 py-1 rounded bg-[#f0db4f]">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-white">
                          수락
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-7 overflow-hidden gap-2.5 px-2 py-1 rounded bg-[#f24e1e]">
                    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                        <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-white">
                          거절
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 pl-16">
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#a5acb8]">
                  2023.01.22 9:42 AM
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[440px] gap-2 pt-2 pb-4 bg-white"
              style={{ boxShadow: "0px 1px 0px 0 #e4e8ee" }}
            >
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-2">
                <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-4 px-4">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.6666669845581055px]">
                        <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative overflow-hidden rounded-3xl bg-[url('initials-2.jpeg')] bg-cover bg-no-repeat bg-center" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow relative gap-2.5">
                    <p className="flex-grow w-[360px] text-sm text-left">
                      <span className="flex-grow w-[360px] text-sm font-bold text-left text-[#7b61ff]">
                        배배서연
                      </span>
                      <span className="flex-grow w-[360px] text-sm text-left text-black">
                        님이 ‘
                      </span>
                      <span className="flex-grow w-[360px] text-sm font-bold text-left text-black">
                        JPA 다뿌셔
                      </span>
                      <span className="flex-grow w-[360px] text-sm text-left text-black">
                        ’ 스터디에 참여했습니다.{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 pl-16">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#a5acb8]">
                  2023.01.21 11:42 PM
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[440px] gap-2 pt-2 pb-4 bg-white"
              style={{ boxShadow: "0px 1px 0px 0 #e4e8ee" }}
            >
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-2">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-2">
                  <div className="flex-grow-0 flex-shrink-0 opacity-0" />
                </div>
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 px-4">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.6666669845581055px]">
                        <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative overflow-hidden rounded-3xl bg-[url('initials.jpeg')] bg-cover bg-no-repeat bg-center" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow relative gap-2.5">
                    <p className="flex-grow w-[360px] text-sm text-left">
                      <span className="flex-grow w-[360px] text-sm font-bold text-left text-[#7b61ff]">
                        독기가득독준
                      </span>
                      <span className="flex-grow w-[360px] text-sm text-left text-black">
                        님이{" "}
                      </span>
                      <span className="flex-grow w-[360px] text-sm font-bold text-left text-black">
                        ’피그마 어떻게 공부하죠
                      </span>
                      <span className="flex-grow w-[360px] text-sm text-left text-black">
                        ’ 글에 댓글을 남겼습니다.{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 pl-16 pr-4">
                <div className="flex justify-start items-start flex-grow relative gap-2">
                  <div className="self-stretch flex-grow-0 flex-shrink-0 w-1 rounded-sm bg-[#dddee1]" />
                  <p className="flex-grow w-[348px] text-sm text-left text-black">
                    저는 그냥 막해도 잘하던데..이런 질문이 왜 필요하죠?{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 pl-16">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#a5acb8]">
                  2023.01.20 5:42 PM
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
            <div
              className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[440px] gap-2 pt-2 pb-4 bg-white"
              style={{ boxShadow: "0px 1px 0px 0 #e4e8ee" }}
            >
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 pb-2">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 pl-2">
                  <div className="flex-grow-0 flex-shrink-0 opacity-0" />
                </div>
                <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-4 px-4">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[6.6666669845581055px]">
                        <div className="flex-grow-0 flex-shrink-0 w-8 h-8 relative overflow-hidden rounded-3xl bg-[url('initials.jpeg')] bg-cover bg-no-repeat bg-center" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center flex-grow relative gap-2.5">
                    <p className="flex-grow w-[360px] text-sm text-left">
                      <span className="flex-grow w-[360px] text-sm font-bold text-left text-[#7b61ff]">
                        독기가득독준
                      </span>
                      <span className="flex-grow w-[360px] text-sm text-left text-black">
                        님이 회원님을 팔로우하기 시작했습니다.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 pl-16">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#a5acb8]">
                  2023.01.19 at 11:15 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <button
                className="text-red-500 background-transparent text-xl font-bold uppercase px-6 py-2 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 hover:scale-125 hover:text-red-800"
                onClick={() => props.onCancel()}
              >
                X
              </button> */
}

import { useState } from "react";
import PlayerQuestionDetail from "./PlayerQuestionDetail";

export default function PlayerQuestion({ propData }) {
  const cutTitle = propData.title.substring(0, 8) + "...";
  const [detailToggle, setDetailToggle] = useState(false);
  const clickDetail = () => {
    setDetailToggle(!detailToggle);
  };

  return (
    <>
      {!detailToggle ? (
        <div
          onClick={clickDetail}
          className="w-full flex justify-between items-center h-[40px] relative gap-[18px] rounded-[15px] border px-[20px] border-[#b1b2ff] cursor-pointer hover:scale-105"
        >
          <p className="h-[30px] text-[16px] font-bold text-center text-[#bd6ffc]">
            {propData.time}
          </p>
          <p className="h-[30px] text-[16px] font-bold text-center text-black">
            {cutTitle}
          </p>
        </div>
      ) : (
        <div className="w-full p-5 flex flex-col justify-start items-start overflow-auto gap-2.5 bg-white border border-[#898989]">
          {/* 맨위 부분 질문 스터디 공개 여부 X */}
          <div className="w-full flex flex-row justify-between items-end">
            <p className="font-bold text-left">
              <span className="text-xl font-bold text-left text-[#7b61ff]">
                질문
              </span>
              <span className="text-base font-bold text-left text-black">
                | 스터디 공개
              </span>
            </p>
            <p
              className="text-[20px] font-bold cursor-pointer hover:text-red-500"
              onClick={clickDetail}
            >
              X
            </p>
          </div>
          <p className="w-full text-xl font-bold text-left text-black">
            피그마가 무엇인가요?
          </p>
          <p className="text-base text-left text-[#484848]">
            싸피킴 | 2023.01.19 | 조회수 12
          </p>
          <div className="flex justify-center items-center h-0.5 relative overflow-hidden">
            <div className="flex-grow bg-[#bbb]" />
          </div>
          {/* 내용 부분 */}
          <div className="flex justify-start items-start h-[200px] relative overflow-hidden gap-2.5 p-2.5">
            <p className="flex-grow  text-base text-left text-black">
              <span className="flex-grow  text-base text-left text-black">
                아무리 생각해도
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                이게 뭔지 모르겠어요
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                써도 써도
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                사람을 피말리게 해요 ㅜㅜ
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                엄마도 보구 싶구...
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                그래도 열심히 해보겠습니당
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                글이 길어지면
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                스크롤로 보여줄 거예요
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                아시겠쬬??
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                확인해보시겠써요??
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                이곳에서
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                마우스로 스르륵 해보세용
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                음하하하하
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                제가 만든 거랍니다
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                아주 자랑스러워용
              </span>
              <br />
              <span className="flex-grow  text-base text-left text-black">
                이렇게 몇 개 정도 만들면 될까나용??
              </span>
            </p>
          </div>
          {/* 수정 삭제 */}
          <div className="w-full flex flex-row justify-end gap-[15px]">
            <button className="w-[60px]  rounded-[5px] bg-[#f1fd85] text-[17px] font-bold text-center text-black ">
              수정
            </button>
            <button className="w-[60px]  rounded-[5px] bg-[#e84e4e] text-[17px] font-bold text-center text-white ">
              삭제
            </button>
          </div>
          {/* 선 */}
          <div className="flex justify-center items-center h-0.5 relative overflow-hidden">
            <div className="flex-grow bg-[#bbb]" />
          </div>
          {/* 답글 부분 일단 보류 */}
          {/* <div className="flex flex-col justify-start items-start relative gap-[15px]">
            <p className="text-xl font-bold text-left text-[#7b61ff]">
              답변
            </p>
            <div className="flex flex-col justify-start items-start h-80 overflow-hidden gap-2.5">
              <div className="flex flex-col justify-start items-start w-[451px] relative gap-2.5 p-2.5 rounded-[5px] bg-[#eef]">
                <p className="text-base text-left">
                  <span className="text-base font-bold text-left text-black">
                    가자독쥬니 |
                  </span>
                  <span className="text-base text-left text-black">
                    {" "}
                  </span>
                  <span className="text-base text-left text-[#7b7474]">
                    2023.01.20
                  </span>
                </p>
                <p className="w-[434px] text-base text-left text-black">
                  <span className="w-[434px] text-base text-left text-black">
                    안녕하세요 독쥬니입니다.
                  </span>
                  <br />
                  <span className="w-[434px] text-base text-left text-black">
                    기능을 제대로 넣어서 사용하면 날먹할 수 있어요!
                  </span>
                  <br />
                  <span className="w-[434px] text-base text-left text-black">
                    남들이 2라고 외칠 때 1이라고 외칠 수 있는 용기!
                  </span>
                </p>
                <p className="w-[65px] h-[15px] text-sm text-left text-black">
                  답글 작성
                </p>
              </div>
              <div className="flex flex-col justify-start items-start w-[451px] relative gap-2.5 p-2.5 rounded-[5px] bg-[#eef]">
                <p className="text-base text-left">
                  <span className="text-base font-bold text-left text-black">
                    가자독쥬니 |
                  </span>
                  <span className="text-base text-left text-black">
                    {" "}
                  </span>
                  <span className="text-base text-left text-[#7b7474]">
                    2023.01.20
                  </span>
                </p>
                <p className="w-[434px] text-base text-left text-black">
                  <span className="w-[434px] text-base text-left text-black">
                    안녕하세요 독쥬니입니다.
                  </span>
                  <br />
                  <span className="w-[434px] text-base text-left text-black">
                    기능을 제대로 넣어서 사용하면 날먹할 수 있어요!
                  </span>
                  <br />
                  <span className="w-[434px] text-base text-left text-black">
                    남들이 2라고 외칠 때 1이라고 외칠 수 있는 용기!
                  </span>
                </p>
                <p className="w-[65px] h-[15px] text-sm text-left text-black">
                  답글 작성
                </p>
              </div>
              <div className="flex flex-col justify-start items-start w-[451px] relative gap-2.5 p-2.5 rounded-[5px] bg-[#eef]">
                <p className="text-base text-left">
                  <span className="text-base font-bold text-left text-black">
                    가자독쥬니 |
                  </span>
                  <span className="text-base text-left text-black">
                    {" "}
                  </span>
                  <span className="text-base text-left text-[#7b7474]">
                    2023.01.20
                  </span>
                </p>
                <p className="w-[434px] text-base text-left text-black">
                  <span className="w-[434px] text-base text-left text-black">
                    안녕하세요 독쥬니입니다.
                  </span>
                  <br />
                  <span className="w-[434px] text-base text-left text-black">
                    기능을 제대로 넣어서 사용하면 날먹할 수 있어요!
                  </span>
                  <br />
                  <span className="w-[434px] text-base text-left text-black">
                    남들이 2라고 외칠 때 1이라고 외칠 수 있는 용기!
                  </span>
                </p>
                <p className="w-[65px] h-[15px] text-sm text-left text-black">
                  답글 작성
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2.5">
              <div className="flex justify-start items-center w-[398px] h-[30px] relative px-2.5 rounded-[5px] border border-[#7b7474]">
                <p className="text-base text-left text-[#7b7474]">
                  질문에 답변을 작성해보세요.
                </p>
              </div>
              <div className="flex justify-center items-center h-[30px] relative gap-2.5 p-2.5 rounded-[5px] bg-[#d2daff]">
                <p className="text-base text-center text-black">
                  등록
                </p>
              </div>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
}

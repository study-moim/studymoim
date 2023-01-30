import { useNavigate } from 'react-router-dom'; 

export default function DeleteModal(props) {
  const navigate = useNavigate(); 

  function cancelHandler() {
    props.onCancel(); 
  }
  function confirmHandler() {
    navigate("/study")
  }
  return (
    <div className="w-[729px] h-[525px] relative">
      <div className="w-[729px] h-[525px] absolute left-0 top-0">
        <div
          className="flex flex-col justify-center items-center w-[729px] h-[525px] absolute left-0 top-0 gap-6 px-10 py-9 rounded-lg bg-white border border-[#dee2e6]"
          style={{
            boxShadow:
              "0px 0px 2px 0 rgba(0,0,0,0.12), 0px 20px 20px 0 rgba(0,0,0,0.08)",
          }}
        >
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
            <img
              src="rectangle-1.png"
              className="flex-grow-0 flex-shrink-0 w-[385px] h-[237.5px] rounded-xl object-cover"
            />
            <div className="flex flex-col justify-end items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#54595e]">
                작성한 내용이 모두 사라집니다. 
              </p>
              <p className="flex-grow-0 flex-shrink-0 w-[385px] text-sm text-center text-[#54595e]/60">
                정말로 취소하시겠습니까?
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
            <button onClick={confirmHandler} className="flex justify-center items-center flex-grow h-11 relative gap-2.5 px-5 py-3.5 rounded-lg bg-white border border-[#4f4f4f] text-sm text-[#4f4f4f]">
                네, 취소하겠습니다.
            </button>
            <button onClick={cancelHandler} className="flex justify-center items-center flex-grow h-11 relative gap-2.5 px-5 py-3.5 rounded-lg bg-[#b1b2ff] text-sm text-white">
                아니요, 다시 돌아갈래요.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

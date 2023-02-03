export default function StudyRecruitModalNotOpen(props) {
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
      <>
        <div className="justify-between items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none focus:outline-none">
          <div className="justify-center items-center relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex flex-col justify-end items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <p className="mt-5 mx- 5 flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-[#54595e]">
                  방장에게 보낼 메세지를 작성해주세요.
                </p>
              </div>
              <div className="flex flex-col items-center justify-around p-6 gap-5">
                <form className="flex flex-col justify-center items-center">
                  <textarea name="" id="" cols="30" rows="10" maxLength={256}></textarea>
                  <button className="flex justify-center items-center flex-grow h-11 relative gap-2.5 px-1 py-3.5 rounded-lg bg-white border border-[#4f4f4f] text-sm text-[#4f4f4f]">
                    제출하기
                  </button>
                </form>

                <button
                  className="flex justify-center items-center flex-grow h-11 relative gap-2.5 px-1 py-3.5 rounded-lg bg-[#b1b2ff] text-sm text-white"
                  onClick={cancelHandler}
                >
                  신청 안할래요..
                </button>

              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

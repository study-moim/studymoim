export default function MyPageArticleItem() {
    return (
        <div className="flex flex-col justify-start items-end h-[780px] gap-[27px] p-[50px] rounded-[20px] border-none">
            <div className="flex justify-start items-start w-full">
                <div className="flex-grow-0 flex-shrink-0 h-[100px] relative overflow-hidden" />
                    <div
                    className="w-full flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0  relative px-[30px] bg-white border-t-0 border-r-0 border-b-0 border-l-[11px] border-[#eef1ff]/[0.98]"
                    style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
                    >
                        <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-black">
                        @프론트 : 뷰3이랑 리액트 중에 뭐 공부 할까요?
                        </p>
                    </div>
            </div>
        </div>
    );
}

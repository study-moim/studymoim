
export default function LectureProgress(props) {
    return (
        <>
            <div className="flex-grow-0 flex-shrink-0 w-1/2 relative">

                <p className="absolute left-0 top-0 text-xl text-center text-black">
                    강의 진도율
                    {props.curricula}
                </p>
                <div className="w-full h-[31px] absolute left-0 top-[51px]">
                    <div
                        className="w-full h-[31px] absolute left-[0.19px] top-[-1px] rounded-full bg-[#bebebe]/[0.22]"/>
                    <div className="w-1/2 h-[31px] absolute left-[-1px] top-[-0.5px] rounded-full bg-[#1abcfe]"/>
                </div>

                <div
                    className="flex flex-col w-full justify-start items-start absolute left-0 top-[109px] gap-2.5 px-[23px] pt-4 pb-[33px] rounded-[5px] bg-white">
                    <div className="flex-grow-0 flex-shrink-0 w-full h-[65px] relative">
                        <div className="flex justify-center items-center w-full absolute left-0 top-0 gap-[19px]">
                            <p className="flex-grow w-full text-xl text-left text-black">
                                킹갓채린
                            </p>
                        </div>
                        <div className="w-full h-[31px] absolute left-0 top-[34px]">
                            <div
                                className="w-full h-[31px] absolute left-[0.11px] top-[-1px] rounded-full bg-[#bebebe]/[0.22]"/>
                            <div
                                className="w-3/4 h-[31px] absolute left-[-1px] top-[-0.5px] rounded-full bg-[#f78e8e]/[0.65]"/>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                        <div
                            className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-full relative gap-[19px]">
                            <p className="flex-grow w-full text-xl text-left">
                                똥준
                            </p>
                        </div>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-full h-[31px] relative">
                        <div
                            className="w-full h-[31px] absolute left-[0.11px] top-[-1px] rounded-full bg-[#bebebe]/[0.22]"/>
                        <div
                            className="w-1/5 h-[31px] absolute left-[-1px] top-[-0.5px] rounded-full bg-[#f78e8e]/[0.65]"/>
                    </div>

                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                        <div
                            className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-full relative gap-[19px]">
                            <p className="flex-grow w-full text-xl text-left">
                                독기가득동준
                            </p>
                        </div>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-full h-[31px] relative">
                        <div
                            className="w-full h-[31px] absolute left-[0.11px] top-[-1px] rounded-full bg-[#bebebe]/[0.22]"/>
                        <div
                            className="w-full h-[31px] absolute left-[-1px] top-[-0.5px] rounded-full bg-[#f78e8e]/[0.65]"/>
                    </div>

                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2.5">
                        <div
                            className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-full relative gap-[19px]">
                            <p className="flex-grow w-full text-xl text-left">
                                독준
                            </p>
                        </div>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-full h-[31px] relative">
                        <div
                            className="w-full h-[31px] absolute left-[0.11px] top-[-1px] rounded-full bg-[#bebebe]/[0.22]"/>
                        <div
                            className="w-3/5 h-[31px] absolute left-[-1px] top-[-0.5px] rounded-full bg-[#f78e8e]/[0.65]"/>
                    </div>
                </div>
            </div>
        </>
    );
}
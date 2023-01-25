export default function MainSearch() {
  return (
    <>
      <input
        type="text"
        className="flex-grow-0 flex-shrink-0 w-6/12 h-[63px] relative overflow-hidden rounded-[20px] bg-[#eef] text-lg font-medium text-left"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
        placeholder = "듣고 싶은 기술을 검색하세요"
      />

      <div
        className="flex-grow-0 flex-shrink-0 w-6/12 h-[63px] relative overflow-hidden rounded-[20px] bg-[#eef]"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      >
        {/* <div className="flex flex-col justify-start items-start w-[544px] h-[63px] absolute left-0 top-0 opacity-40 overflow-hidden gap-2.5 pl-3 pr-2 py-2 rounded-lg bg-[#eef1ff]/[0.98]">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[524px] h-6 gap-2" />
      </div> */}
        <svg
          width={50}
          height={50}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[50px] h-[50px] absolute left-5 top-1.5"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M32.8234 29.6979H31.1776L30.5942 29.1354C32.6359 26.7604 33.8651 23.6771 33.8651 20.3229C33.8651 12.8437 27.8026 6.78125 20.3234 6.78125C12.8442 6.78125 6.78174 12.8437 6.78174 20.3229C6.78174 27.8021 12.8442 33.8646 20.3234 33.8646C23.6776 33.8646 26.7609 32.6354 29.1359 30.5937L29.6984 31.1771V32.8229L40.1151 43.2187L43.2192 40.1146L32.8234 29.6979ZM20.3234 29.6979C15.1359 29.6979 10.9484 25.5104 10.9484 20.3229C10.9484 15.1354 15.1359 10.9479 20.3234 10.9479C25.5109 10.9479 29.6984 15.1354 29.6984 20.3229C29.6984 25.5104 25.5109 29.6979 20.3234 29.6979Z"
            fill="black"
          />
        </svg>
        {/* <p className="absolute left-[83px] top-5 text-lg font-medium text-left">
        듣고 싶은 기술을 검색하세요
      </p> */}
      </div>
    </>
  )
}
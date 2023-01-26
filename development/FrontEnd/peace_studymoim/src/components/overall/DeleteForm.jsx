export default function DeleteForm() {
  return (
    <div
      className="flex flex-col justify-center items-end overflow-hidden gap-20 p-[30px] rounded-[30px] bg-white"
      style={{ boxShadow: "0px 5px 41px 0 #929292" }}
    >
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[19px]">
        <svg
          width={34}
          height={44}
          viewBox="0 0 34 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path
            d="M2.422 38.756C2.42596 40.0397 2.93771 41.2696 3.8455 42.1772C4.75329 43.0848 5.98334 43.5963 7.267 43.6H26.645C27.9288 43.5963 29.159 43.0847 30.0669 42.1769C30.9747 41.269 31.4863 40.0388 31.49 38.755V9.689H2.422V38.756ZM8.381 21.51L11.8 18.094L16.959 23.229L22.094 18.094L25.509 21.509L20.374 26.644L25.509 31.779L22.091 35.2L16.956 30.06L11.821 35.2L8.405 31.78L13.54 26.645L8.381 21.51ZM25.434 2.422L23.011 0H10.9L8.478 2.422H0V7.267H33.912V2.422H25.434Z"
            fill="#F24E1E"
          />
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-black">
          Are you sure you want to delete ?
        </p>
      </div>
      <div className="flex justify-end items-end flex-grow-0 flex-shrink-0 h-10 relative gap-3">
        <div className="flex-grow-0 flex-shrink-0 w-[121px] h-10">
          <svg
            width={122}
            height={41}
            viewBox="0 0 122 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[121px] h-10"
            preserveAspectRatio="none"
          >
            <path
              d="M111.912 0.599609H10.912C5.38914 0.599609 0.911987 5.07676 0.911987 10.5996V30.5996C0.911987 36.1225 5.38914 40.5996 10.912 40.5996H111.912C117.435 40.5996 121.912 36.1225 121.912 30.5996V10.5996C121.912 5.07676 117.435 0.599609 111.912 0.599609Z"
              fill="white"
            />
            <path
              d="M111.912 1.09961H10.912C5.66528 1.09961 1.41199 5.3529 1.41199 10.5996V30.5996C1.41199 35.8463 5.66528 40.0996 10.912 40.0996H111.912C117.159 40.0996 121.412 35.8463 121.412 30.5996V10.5996C121.412 5.3529 117.159 1.09961 111.912 1.09961Z"
              stroke="#707070"
            />
          </svg>
          <button className="absolute left-[29.5px] top-[8.69px] text-lg text-left text-[#323131]">
            Cancel
          </button>
        </div>
        <div className="flex-grow-0 flex-shrink-0 w-[120px] h-10">
          <svg
            width={121}
            height={41}
            viewBox="0 0 121 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[132.5px] top-[-0.5px]"
            preserveAspectRatio="none"
          >
            <path
              d="M110.912 0.599609H10.912C5.38914 0.599609 0.911987 5.07676 0.911987 10.5996V30.5996C0.911987 36.1225 5.38914 40.5996 10.912 40.5996H110.912C116.435 40.5996 120.912 36.1225 120.912 30.5996V10.5996C120.912 5.07676 116.435 0.599609 110.912 0.599609Z"
              fill="#F24E1E"
            />
          </svg>
          <button className="absolute left-[163px] top-[8.69px] text-lg text-left text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

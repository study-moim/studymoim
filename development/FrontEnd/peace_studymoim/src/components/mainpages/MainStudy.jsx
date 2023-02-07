import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainStudy({ propData }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <Link
      to={`/study/${propData.studyId}`}
      state={{
        popData: propData,
      }}
    >
      <div className="min-w-[350px] max-w-[350px] h-[250px] rounded-[15px] border p-5 cursor-pointer gap-2 transition ease-in-out duration-300 hover:-translate-y-1.5 hover:shadow-md">
        <div className="flex flex-col gap-2 h-[150px]">
          <p className="text-[15px] font-bold">{propData.title}</p>
          <p className="text-[13px] text-gray-500">{propData.content}</p>
          <p className="text-[13px] text-gray-500">
            시작예정일 | {propData.startTime}
          </p>
          <p className="text-[13px] text-[#B1B2FF]">
            {propData.userLimit - propData.userGathered} 명 모집 중{}
          </p>
        </div>
        <div className="py-3 border-t flex flex-row justify-end">
          {preview ? (
            <img
              src={preview}
              required
              className="border w-[50px] object-cover rounded-full"
            />
          ) : (
            <img
              src={"/logo.png"}
              className="border w-[50px] object-cover rounded-full"
            />
          )}
        </div>
      </div>
    </Link>
  );
}

import MainBanner from "./MainBanner";
import MainSearch from "./MainSearch";
import Tag from "../overall/Tag";

export default function MainPageRoot() {
  return (
    <div className="flex flex-col justify-start items-center gap-[20px]">
      <MainBanner />
      <MainSearch />
      <div className="w-full flex flex-col justify-between items-center">
        <p className="text-xl text-left text-gray-400"># 인기태그</p>
        <div className="grid gap-4 grid-cols-5 grid-flow-row auto-rows-auto">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
    </div>
  );
}

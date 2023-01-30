import Iframe from "react-iframe";

export default function PlayingVideoFrame() {
  return (
    <div className="border w-full h-full">
      <Iframe
        url="https://www.youtube.com/embed/XP_cf_GFFR4"
        className="w-full h-full"
      />
    </div>
  );
}

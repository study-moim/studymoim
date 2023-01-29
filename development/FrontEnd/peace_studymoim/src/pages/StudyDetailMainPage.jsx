import StudyNotice from "../components/studydetail/StudyNotice";
import StudyIntroduceBanner from "../components/studydetail/StudyIntroduceBanner";
export default function StudyDetailMainRoot() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <StudyIntroduceBanner /> 
      <StudyNotice /> 
    </div>
  );
}
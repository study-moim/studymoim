import { useParams } from "react-router-dom";
import StudyMakeForm from "../components/studypages/StudyMakeForm";
import StudyUpdateForm from "../components/studypages/StudyUpdateForm";
import { useState, useEffect } from "react";

export default function StudyUpdatePage() {
  const [title, setTitle] = useState(); 
  const [content, setContent] = useState(); 
  const [member, setMember] = useState(); 
  const [start, setStart] = useState(); 
  const [finish, setFinish] = useState(); 
  const [close, setClose] = useState(); 
  const [publics, setPublics] = useState(); 



  const studyId = useParams();
  const detailId = studyId.study_recruit_id;
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;

  useEffect(() => {
    const getStudyDetail = async () => {
      await fetch(`http://${API_SERVER}/api/v1/study/${detailId}`)
        .then((res) => res.json())
        .then((json) => {
          setTitle(json.title); 
          setContent(json.content);
          setMember(json.userLimit);
          setStart(json.startTime);
          setFinish(json.finished);
          setClose(json.close); 
          setPublics(json.public);   
        });
    };
    getStudyDetail();
  }, [detailId]);
  
  const propData = {
    title: title, 
    content: content,  
    member: member,  
    start: start, 
    finish: finish, 
    close: close, 
    publics: publics 
  }; 

  return (
    <div>
      <StudyUpdateForm propData={propData}/>
    </div>
  );
}


import Tag from "./Tag";
import useFetch from "../../hooks/useFetch";

export default function TagList() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const tags = useFetch(`http://${API_SERVER}/api/v1/category/best`);

  return (
    <div className="flex flex-row flex-wrap gap-2">
    {tags.map((tag) => (
      <div key={tag.courseCategoryId} onClick={async() => { window.location.href = '/search/' + tag.name_kor;}}> 
        <Tag tag={tag} />
      </div> 
    ))}
  </div>
  )
}
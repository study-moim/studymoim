import Tag from "./Tag";
import useFetch from "../../hooks/useFetch";

export default function TagList() {
  const API_SERVER = import.meta.env.VITE_APP_API_SERVER;
  const tags = useFetch(`http://${API_SERVER}/api/v1/category/`);

  return (
    <div className="grid gap-4 grid-cols-5 grid-flow-row auto-rows-auto my-5">
    {tags.map((tag) => (
      <div onClick={async() => { window.location.href = '/search/' + tag.name_kor;}}> 
        <Tag key={tag.courseCategoryId} tag={tag} />
      </div> 
    ))}
  </div>
  )
}
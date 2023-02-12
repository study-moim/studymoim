// import CourseSearchBar from "../studypages/CourseSearchBar";
// import useFetch from "../../hooks/useFetch";
// import { useParams } from "react-router";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import CourseGaro from "../overall/CourseGaro";
// import { useState, useEffect } from "react";


// export default function LectureManage() {
//   const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list); 
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);

//     return result; 
//   }; 

//   const studyId = useParams();
//   const API_SERVER = import.meta.env.VITE_APP_API_SERVER; 
//   const studyInfo = useFetch(`http://${API_SERVER}/api/v1/study/${studyId.study_id}`).curricula

//   const [items, setItems] = useState([{order:0, course: {course_id: 0}}]); 

//   useEffect(() => {
//     setItems(studyInfo)
//   }, [studyInfo])

//   const onDragEnd = (result) => { 
//     if(!result.destination) {
//       return; 
//     }
//     setItems((studyInfo) => 
//       reorder(studyInfo, result.source.index, result.destination.index)
//     ); 
//   };

//   return (
//     <>
//       <div className="flex flex-col justify-start items-center h-[1512px] relative gap-[78px] px-[120px] py-[50px]">
//         <CourseSearchBar />
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="droppable">
//             {(provided) => (
//               <div ref={provided.innerRef} {...provided.droppableProps}>
//                   {items && items.map((item, index) => (
//                     <Draggable
//                       key={item.course.title}
//                       draggableId={item.course.title}
//                       index={index}
//                     >
//                       {(provided) => (
//                         <div
                        
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                         >
//                           <CourseGaro key={item.course.course_id} item={item} />
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </div>
//     </>
//   );
// }


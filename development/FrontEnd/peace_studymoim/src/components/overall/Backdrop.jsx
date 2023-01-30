export default function Backdrop(props) {
  return <div className="fixed bg-rgba(0,0,0,0.75) w-full h-100vh top-0 left-0 z-0" onClick={props.onCancel}></div>;
}

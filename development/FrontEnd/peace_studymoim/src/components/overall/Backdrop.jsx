// TODO: Tailwind에서 Backdrop 어케 하는 지 알아보기 ! 흑

export default function Backdrop(props) {
  return <div className='backdrop:filter' onClick={props.onCancel} />;
}

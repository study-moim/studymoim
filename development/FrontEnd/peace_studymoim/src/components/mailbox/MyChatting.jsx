export default function MyChatting(props) {
  return (
    <div className="mt-2 mr-2 grid justify-items-end">
      <div className="p-3 text-right border rounded-lg text-sm max-w-xs">
        {props.text}입니당ㅋ
      </div>
    </div>
  );
}
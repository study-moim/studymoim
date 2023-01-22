interface Fields {
  field: string,
}

export default function FieldButton({ field }: Fields) {
  return (
    <div className="flex justify-center items-center relative px-[46px] py-7 rounded-[20px] bg-white border-[3px] border-[#b1b2ff] shadow-innerDown bg-[white] active:shadow-innerUp active:bg-[#e7e7e7] text-xl font-medium text-center text-black active:text-[#7b61ff] cursor-pointer">
      {field}
    </div>
  );
}

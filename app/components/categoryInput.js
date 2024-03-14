"use client"


const CategoryInput = ({  label, selected, onClick }) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
        rounded-xl
        border-2
        p-2
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? "border-black" : "border-neutral-200"}
      `}
    >
      
      <div className="font-semibold">{label}</div>
    </div>
  )
}

export default CategoryInput; 
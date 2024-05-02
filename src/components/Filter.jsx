export default function Filter() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center p-[4rem] text-[#737373] lg:flex-row lg:justify-between">
      <p className="font-bold">Showing all 12 results</p>
      <div className="flex gap-8 items-center justify-center font-bold">
        <span>Views:</span>
        <button className="w-10 aspect-square border border-[#ECECEC] rounded-[0.3rem]">
          <img className="mx-auto" src=".\assets\filter\Vector.svg" alt="" />
        </button>
        <button className="w-10 aspect-square border border-[#ECECEC] rounded-[0.3rem]">
          <img className="mx-auto" src=".\assets\filter\Vector-1.svg" alt="" />
        </button>
      </div>
      <div className="flex gap-5">
        <select
          id="sort"
          name="sort"
          className="w-[10rem] bg-[#F9F9F9] border border-[#ECECEC] rounded-[0.3rem] px-4 py-2"
        >
          <option
            value="Popularity"
            className="leading-[1.75rem] text-sm text-[#737373]"
          >
            Popularity
          </option>
          <option value="New">New</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
        <button className="w-[6rem] bg-[#23A6F0] rounded-[0.3rem] px-4 py-2 font-bold text-white">
          Filter
        </button>
      </div>
    </div>
  );
}

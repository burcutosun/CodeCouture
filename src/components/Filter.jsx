import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/16/solid";

export default function Filter() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center p-[4rem] text-[#737373] lg:flex-row lg:justify-between">
      <label className="font-bold text-h6">Showing all 12 results</label>
      <div className="flex gap-8 items-center justify-center">
        <label className=" font-bold text-h6">Views:</label>
        <button className="w-10 aspect-square flex items-center justify-center border border-[#ECECEC] rounded-[0.3rem]">
          <Squares2X2Icon className="h-6 w-6 text-gray-500" />
        </button>
        <button className="w-10 aspect-square flex items-center justify-center border border-[#ECECEC] rounded-[0.3rem]">
          <ListBulletIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
      <div className="flex gap-5">
        <select
          id="sort"
          name="sort"
          className="w-[10rem] bg-[#F9F9F9] border border-[#ECECEC] px-4 py-2 rounded-[0.3rem]"
        >
          <option value="Popularity" className="text-btnText text-[#737373]">
            Popularity
          </option>
          <option value="New">New</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
        <button className="w-[6rem] bg-[#23A6F0] px-4 py-2 rounded-[0.3rem] font-bold text-h6 text-white">
          Filter
        </button>
      </div>
    </div>
  );
}

import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/16/solid";

export default function Filter() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center p-16 text-[#737373] lg:flex-row lg:justify-between">
      <label className="font-bold text-h6">Showing all 12 results</label>
      <div className="flex gap-8 items-center justify-center">
        <label className=" font-bold text-h6">Views:</label>
        <button className="w-10 aspect-square flex items-center justify-center border border-[#ECECEC] rounded-md">
          <Squares2X2Icon className="h-6 w-6 text-gray-500" />
        </button>
        <button className="w-10 aspect-square flex items-center justify-center border border-[#ECECEC] rounded-md">
          <ListBulletIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
      <div className="flex gap-5">
        <select
          id="sort"
          name="sort"
          className="w-40 bg-[#F9F9F9] border border-[#ECECEC] px-4 py-2 rounded-md"
        >
          <option value="Popularity" className="text-btnText text-second">
            Popularity
          </option>
          <option value="New">New</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
        <button className="w-24 bg-primary px-4 py-2 rounded-md font-bold text-h6 text-white">
          Filter
        </button>
      </div>
    </div>
  );
}

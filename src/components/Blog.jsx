import BlogCard from "./BlogCard";

export default function Blog() {
  const data = useContext(DataContext);
  const { blogContent } = data;
  return (
    <div className="w-screen flex flex-col items-center py-[5rem] lg:py-[6rem]">
      <div className="w-[13.5rem] text-center mb-[4rem] lg:w-[43rem]">
        <h6 className="font-bold text-sm text-[#23A6F0]">Practice Advice</h6>
        <h2 className="font-bold leading-[3.125rem] text-[2.5rem] text-[#252B42]">
          Featured Products
        </h2>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between the two major
        </p>
      </div>
      <div className="flex flex-col gap-[2rem] xl:flex-row xl:justify-center lg:px-[5rem]">
        <BlogCard content={blogContent} />
      </div>
    </div>
  );
}

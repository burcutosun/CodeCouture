import { useContext } from "react";
import BlogCard from "./BlogCard";
import { DataContext } from "../context/DataContext";

export default function Blog() {
  const data = useContext(DataContext);
  const { blogContent } = data;

  return (
    <div className="flex flex-col items-center py-20 lg:py-24">
      <div className="w-72 mb-16 text-center lg:w-1/3">
        <h6 className="font-bold text-h6 text-primary">Practice Advice</h6>
        <h2 className="font-bold text-h2 text-default">Featured Products</h2>
        <p className="text-paragraph text-second">
          Problems trying to resolve the conflict between the two major
        </p>
      </div>
      <div className="flex flex-col gap-8 xl:flex-row xl:justify-center lg:px-20">
        <BlogCard content={blogContent} />
      </div>
    </div>
  );
}

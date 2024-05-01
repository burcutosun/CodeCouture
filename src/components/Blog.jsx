import BlogCard from "./BlogCard";

export default function Blog() {
  const cardContent = [
    {
      image: "./assets/blog/unsplash_gEZkP23pLZ4.png",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      commentCount: "10 comments",
    },
    {
      image: "./assets/blog/unsplash_CuEvrPd3NYc.png",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      commentCount: "10 comments",
    },
    {
      image: "./assets/blog/unsplash_k0rVudBoB4c.png",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      commentCount: "10 comments",
    },
  ];
  return (
    <div className="w-screen flex flex-col items-center py-[5rem]">
      <div className="w-[13.5rem] text-center mb-[4rem] lg:w-[43rem] lg:my-[6rem]">
        <h6 className="font-bold text-sm text-[#23A6F0]">Practice Advice</h6>
        <h2 className="font-bold leading-[3.125rem] text-[2.5rem] text-[#252B42]">
          Featured Products
        </h2>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between the two major
        </p>
      </div>
      <div className="flex flex-col gap-[2rem] xl:flex-row xl:justify-center lg:px-[5rem]">
        <BlogCard content={cardContent} />
      </div>
    </div>
  );
}

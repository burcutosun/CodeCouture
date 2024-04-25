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
    <div className="w-screen 144rem flex flex-col items-center mb-[4rem] lg:h-[65rem]">
      <div className="w-[13.5rem] text-center my-[4rem] lg:w-[43rem] lg:my-[6rem]">
        <h6 className="font-bold text-sm text-[#23A6F0]">Practice Advice</h6>
        <h2 className="font-bold leading-[3.125rem] text-[2.5rem] text-[#252B42]">
          Featured Products
        </h2>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between the two major
        </p>
      </div>
      <div className="flex flex-col gap-[3rem] lg:flex-row lg:gap-2">
        {cardContent.map((card, index) => {
          return (
            <div key={index} className="p-[2rem] shadow-md">
              <img className="w-[20rem] h-[18rem]" src={card.image} alt="" />
              <div className="w-[20rem] flex flex-col gap-6 p-4">
                <div>
                  {card.tags.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className={`mr-3 text-sm ${
                          index === 0 ? "text-[#8EC2F2]" : "text-[#737373]"
                        }`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
                <h4 className="w-[15rem] text-xl text-[#252B42]">
                  {card.title}
                </h4>
                <p className="w-[17rem] text-sm text-[#737373]">
                  {card.description}
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <img src=".\assets\blog\coolicon.svg" alt="" />
                    <span className="text-xs">{card.date}</span>
                  </div>
                  <div className="flex gap-2">
                    <img src=".\assets\blog\Vector.svg" alt="" />
                    <span className="text-xs">{card.commentCount}</span>
                  </div>
                </div>
                <a
                  className="flex gap-2 font-bold text-sm text-[#737373]"
                  href=""
                >
                  Learn More <img src=".\assets\blog\@none.svg" alt="" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

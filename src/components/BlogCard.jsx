import {
  ChartBarIcon,
  ChevronRightIcon,
  ClockIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  const { content } = props;
  return (
    <>
      {content.map((card, index) => {
        return (
          <div key={index} className="p-[2rem] shadow-md">
            <img src={card.image} alt="" />
            <div className="flex flex-col gap-6 p-4">
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
              <h4 className="w-[15rem] text-xl text-[#252B42]">{card.title}</h4>
              <p className="w-[17rem] text-sm text-[#737373]">
                {card.description}
              </p>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <ClockIcon className="h-4 w-4 text-[#23A6F0]" />
                  <span className="text-xs">{card.date}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <ChartBarIcon className="h-4 w-4 text-green" />
                  <span className="text-xs">{card.commentCount}</span>
                </div>
              </div>
              <Link
                className="flex gap-2 items-center font-bold text-sm text-[#737373]"
                to=""
              >
                Learn More{" "}
                <ChevronRightIcon className="h-6 w-6 text-[#23A6F0]" />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

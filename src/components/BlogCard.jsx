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
          <div key={index} className="p-8 shadow-md hover:scale-105">
            <img className="mx-auto" src={card.image} alt="" />
            <div className="w-[20.625rem] flex flex-col gap-6 p-4">
              <div>
                {card.tags.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={`mr-3 text-small ${
                        index === 0 ? "text-[#8EC2F2]" : "text-second"
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
              <h4 className="text-h4 text-default">{card.title}</h4>
              <p className="text-paragraph text-second">{card.description}</p>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <ClockIcon className="h-4 w-4 text-primary" />
                  <span className="text-small">{card.date}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <ChartBarIcon className="h-4 w-4 text-secondary-1" />
                  <span className="text-small">{card.commentCount}</span>
                </div>
              </div>
              <Link
                className="flex gap-2 items-center font-bold text-small text-second"
                to=""
              >
                Learn More <ChevronRightIcon className="h-6 w-6 text-primary" />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

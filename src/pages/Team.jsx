import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import TeamCard from "../components/TeamCard";

export default function Team() {
  const data = useContext(DataContext);
  const { teamMembers } = data;

  return (
    <div className="bg-[#FAFAFA] flex flex-col gap-20 p-20 lg:pb-44 lg:px-80 lg:py-32">
      <div className="flex flex-col gap-5 text-center">
        <h2 className="font-bold text-h2 text-default">Meet Our Team</h2>
        <p className="text-paragraph text-second">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex flex-col gap-10 items-center justify-evenly lg:flex-row">
        {teamMembers.map((item, index) => {
          return <TeamCard member={item} id={index} />;
        })}
      </div>
    </div>
  );
}

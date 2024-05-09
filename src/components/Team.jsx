import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import TeamCard from "./TeamCard";

export default function Team() {
  const data = useContext(DataContext);
  const { teamMembers } = data;

  return (
    <div className="flex flex-col items-center justify-center gap-20 py-20 lg:p-32">
      <div className="flex flex-col gap-5 text-center">
        <h2 className="font-bold text-h2 text-default">Meet Our Team</h2>
        <p className="text-paragraph text-second">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex flex-col gap-10 items-center justify-between lg:flex-row">
        {teamMembers.map((item, index) => {
          return <TeamCard member={item} id={index} />;
        })}
      </div>
    </div>
  );
}

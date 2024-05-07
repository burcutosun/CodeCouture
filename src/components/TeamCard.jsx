export default function TeamCard(props) {
  const { member, id } = props;
  return (
    <div className="w-56 h-80 bg-white flex flex-col gap-2 items-center justify-center shadow-md text-center hover:scale-105">
      <img className="w-40 h-40 rounded-full" src={member.image} alt="" />
      <h6 className="font-bold text-h6 text-primary">{member.job}</h6>
      <h5 className="font-bold text-h5 text-default">{member.name}</h5>
      <p className="text-paragraph text-second">{member.info}</p>
    </div>
  );
}

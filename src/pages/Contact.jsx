export default function Contact() {
  return (
    <div className="sm: bg-contact-mobile bg-cover flex flex-col gap-12 items-center px-12 py-52 text-center lg:bg-contact-desktop lg:p-80">
      <h2 className="font-bold text-h2 text-default md:w-[30rem]">
        Get answers to all your questions.
      </h2>
      <p className="text-h4 text-second md:w-[35rem]">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:{" "}
      </p>
      <button className="w-60 h-16 bg-[#23A6F0] rounded-md font-bold text-btnText text-white">
        CONTACT OUR COMPANY
      </button>
    </div>
  );
}

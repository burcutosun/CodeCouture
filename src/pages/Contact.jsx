import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="flex flex-col gap-12 items-center p-36 text-center lg:px-[40rem]">
      <h2 className="font-bold text-h2 text-default">
        Get answers to all your questions.
      </h2>
      <p className="text-h4 text-second">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:{" "}
      </p>
      <button className="w-60 h-16 bg-[#23A6F0] rounded-[5px] font-bold text-btnText text-white">
        CONTACT OUR COMPANY
      </button>
      <div className="flex gap-7 items-center">
        <Link className="" to="">
          <img
            src=".\assets\contact-logos\logos_twitter.svg"
            alt="Twitter Logo"
          />
        </Link>
        <Link className="" to="">
          <img
            src=".\assets\contact-logos\logos_facebook.svg"
            alt="Facebook Logo"
          />
        </Link>
        <Link className="" to="">
          <img
            src=".\assets\contact-logos\ant-design_instagram-outlined.svg"
            alt="Instagram Logo"
          />
        </Link>
        <Link className="" to="">
          <img
            src=".\assets\contact-logos\logos_linkedin-icon.svg"
            alt="Linkedin Logo"
          />
        </Link>
      </div>
    </div>
  );
}

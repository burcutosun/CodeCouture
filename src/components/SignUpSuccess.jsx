export default function SignUpSuccess() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center p-56">
      <div className="flex gap-5 items-end">
        <h2 className="font-bold text-h2 text-default">
          Signed Up Successfully!{" "}
        </h2>
        <img
          className="w-28 aspect-square"
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f389.gif"
          alt="Google - Noto Color Emoji 15.0 (Animated)"
        />
      </div>
      <p className="text-h3 text-second">
        You need to click link in email to activate your account.
      </p>
    </div>
  );
}

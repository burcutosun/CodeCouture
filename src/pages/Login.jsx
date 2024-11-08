import { API } from "../api/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginSuccess, setUser } from "../store/actions/clientActions";
import gravatar from "gravatar";
import { useHistory } from "react-router-dom";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.client.isAuthenticated);
  const rememberMe = watch("rememberMe");

  const login = async (formData) => {
    const getGravatar = (email) => {
      return gravatar.url(email, { s: "100", r: "x", d: "wavatar" }, true);
    };

    setIsLoading(true);

    try {
      const response = await API.post("/login", formData);
      const data = response.data;
      if (data && data.token) {
        const gravatarUrl = getGravatar(data.email);

        if (rememberMe) {
          localStorage.setItem("token", data.token);
        }

        dispatch(
          setUser({
            name: data.name,
            email: data.email,
            gravatar: gravatarUrl,
            isLoggedIn: true,
          })
        );

        dispatch(setLoginSuccess(data.token));

        /*         const roles = await getRoles();
        const role = roles.find((item) => item.id === data.role_id); */

        toast.success("Logged in successfully!");
        history.push("/");
      } else {
        toast.error("Login failed: Invalid response from server");
      }
    } catch (err) {
      toast.error("Login failed: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <div className="sm:w-[70%] max-w-md mx-auto my-28">
      <form onSubmit={handleSubmit(login)}>
        <div className="px-16 pt-8 pb-16 rounded-lg shadow-lg space-y-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: emailRegex,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <div className="mt-2 text-xs text-red-500">
                  {errors.email.message}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/"
                    className="font-semibold text-blue-500 hover:text-blue-400"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                />
              </div>
              {errors.password && (
                <div className="mt-2 text-xs text-red-500">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div>
              <label className="flex gap-2 items-center justify-center text-sm font-semibold text-blue-500 hover:text-blue-400">
                <input
                  type="checkbox"
                  className="accent-pink-500"
                  {...register("rememberMe")}
                />{" "}
                Remember Me
              </label>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-x-6">
            <button
              type="submit"
              className={`flex items-center rounded-md bg-blue-500 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                isLoading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isLoading && (
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-400"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
              <span>{isLoading ? "Logging in" : "Login"}</span>
            </button>
            <div className="flex mt-4">
              <p className="text-center text-sm text-gray-500">Not a member?</p>
              <Link
                to="/signup"
                className="ml-2 font-semibold text-sm text-blue-500 hover:text-blue-400"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

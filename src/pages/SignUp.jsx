import { API } from "../api/api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

export default function SignUp() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role_id: "3",
      store_name: "",
      phone: "",
      tax_no: "",
      bank_account: "",
    },
    mode: "all",
  });

  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const selectedRole = watch("role_id");

  useEffect(() => {
    API.get("/roles")
      .then((res) => {
        const sorted = res.data.reverse();
        setRoles(sorted);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onSubmit = (data) => {
    setIsLoading(true);
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: selectedRole,
    };

    if (selectedRole === "2") {
      formData.store = {
        name: data.store_name,
        phone: data.phone,
        tax_no: data.tax_no,
        bank_account: data.bank_account,
      };
    }
    console.log(formData);
    API.post("/signup", formData)
      .then((res) => {
        history.push("/signup_success");
      })
      .catch((err) => {
        toast.error("Sign up failed! " + err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const ibanRegex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,}$/;
  const taxIDRegex = /^T\d{4}V\d{6}$/;
  const turkeyPhoneRegex = /^5(0[5-7]|[3-5]\d) ?\d{3} ?\d{4}$/;

  return (
    <div className="lg:w-[65%] xl:w-[55%] max-w-3xl mx-auto py-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-4 p-24 pt-16 rounded-lg shadow-lg space-y-12">
          <h2 className="font-bold text-h3 text-gray-900">Sign Up</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("name", {
                    required: "Name is required (*)",
                    minLength: {
                      value: 3,
                      message: "The name must be at least 3 characters",
                    },
                  })}
                />
              </div>
              {errors.name && (
                <div className="mt-2 text-xs text-red-500">
                  {errors.name.message}
                </div>
              )}
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  placeholder="john@doe.com"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("email", {
                    required: "Email is required (*)",
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

            <div className="sm:col-span-3 sm:col-start-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password", {
                    required: "Password is required (*)",
                    pattern: {
                      value: passwordRegex,
                      message:
                        "The password must be at least 8 characters including numbers, lowercase letters, uppercase letters and special characters",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <div className="mt-2 text-xs text-red-500">
                  {errors.password.message}
                </div>
              )}
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  id="confirmPassword"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === ""
                        ? "Confirm your password (*)"
                        : value === watch("password") ||
                          "Passwords do not match",
                  })}
                />
              </div>
              {errors.confirmPassword && (
                <div className="mt-2 text-xs text-red-500">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="role_id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Role
              </label>
              <div className="mt-2">
                <select
                  id="role_id"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  {...register("role_id", {})}
                  value={watch("role_id")}
                >
                  {roles.map((role, index) => {
                    return (
                      index < 2 && (
                        <option key={index} value={role.id}>
                          {role.name}
                        </option>
                      )
                    );
                  })}
                </select>
              </div>
              {errors.role_id && (
                <div className="mt-2 text-xs text-red-500">
                  {errors.role_id.message}
                </div>
              )}
            </div>

            {selectedRole === "2" && (
              <>
                <div className="sm:col-span-3 sm:col-start-1">
                  <label
                    htmlFor="store_name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Store Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="store_name"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("store_name", {
                        required: "Store name is required (*)",
                      })}
                    />
                  </div>
                  {errors.store_name && (
                    <div className="mt-2 text-xs text-red-500">
                      {errors.store_name.message}
                    </div>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Store Phone
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      placeholder="(5xx)-xxx-xxxx"
                      type="tel"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("phone", {
                        required: "Phone number is required (*)",
                        pattern: {
                          value: turkeyPhoneRegex,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                  </div>
                  {errors.phone && (
                    <div className="mt-2 text-xs text-red-500">
                      {errors.phone.message}
                    </div>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="tax_no"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Store Tax ID
                  </label>
                  <div className="mt-2">
                    <input
                      id="tax_no"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("tax_no", {
                        required: "Tax ID is required (*)",
                        pattern: {
                          value: taxIDRegex,
                          message: "Invalid TaxID",
                        },
                      })}
                    />
                  </div>
                  {errors.tax_no && (
                    <div className="mt-2 text-xs text-red-500">
                      {errors.tax_no.message}
                    </div>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Store IBAN
                  </label>
                  <div className="mt-2">
                    <input
                      id="bank_account"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("bank_account", {
                        required: "IBAN is required (*)",
                        pattern: {
                          value: ibanRegex,
                          message: "Invalid IBAN",
                        },
                      })}
                    />
                  </div>
                  {errors.bank_account && (
                    <div className="mt-2 text-xs text-red-500">
                      {errors.bank_account.message}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mr-4 mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => history.push("/")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
              isLoading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {isLoading && (
              <svg
                aria-hidden="true"
                className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
            <span>{isLoading ? "Submitting" : "Submit"}</span>
          </button>
        </div>
      </form>
      <ToastContainer position="top-right" />
    </div>
  );
}

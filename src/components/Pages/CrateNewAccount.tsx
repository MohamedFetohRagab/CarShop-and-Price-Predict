import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import LoginTemp from "../UI/LoginTemp";

const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  FirstName: z.string().trim().min(1, "FirstName is required"),
  LastName: z.string().trim().min(1, "LastName is required"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const CrateNewAccount = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      FirstName: "",
      LastName: "",
    },
  });
  const onSubmit = async (data: SignUpFormData) => {
    console.log(data);
    // const response = await fetch("", {
    //   method: "POST",
    //   body: {
    //     email: data.email,
    //     password: data.password,
    //   },
    // });
  };
  return (
    <div className="sm:h-[calc(100dvh-104px)] h-screen flex">
      <div className="bg-gray-500 flex-1 h-full px-5 sm:px-10 flex flex-col sm:pt-20 pt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-2 sm:gap-5 items-center"
        >
          <div className="w-full sm:w-[70%] flex gap-4">
            <div className="flex-1">
              <label htmlFor="FirstName" className="text-xl mb-2 text-white">
                First Name
              </label>
              <input
                id="FirstName"
                {...register("FirstName")}
                className={`bg-slate-200 p-3 rounded-md w-[100%]  outline-0 focus:ring-2 focus:ring-blue-500 ${errors.LastName ? "ring-2 ring-red-500" : ""}`}
              />
              {errors.FirstName && (
                <span className="sm:text-lg text-sm text-red-500 block">
                  {errors.FirstName.message}
                </span>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="LastName" className="text-xl mb-2 text-white">
                Last Name
              </label>
              <input
                id="LastName"
                {...register("LastName")}
                className={`bg-slate-200 p-3 rounded-md w-[100%]  outline-0 focus:ring-2 focus:ring-blue-500 ${errors.LastName ? "ring-2 ring-red-500" : ""}`}
              />
              {errors.LastName && (
                <span className="sm:text-lg text-sm text-red-500 block">
                  {errors.LastName.message}
                </span>
              )}
            </div>
          </div>

          <div className="w-full sm:w-[70%] flex sm:gap-4 flex-col">
            <label htmlFor="email" className="text-xl mb-2 text-white">
              Email
            </label>
            <input
              id="email"
              {...register("email")}
              className={`bg-slate-200 p-3 rounded-md w-[100%]  outline-0 focus:ring-2 focus:ring-blue-500 ${errors.email ? "ring-2 ring-red-500" : ""}`}
            />
            {errors.email && (
              <span className="sm:text-lg text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full sm:w-[70%] flex sm:gap-4 flex-col">
            <label htmlFor="password" className="text-xl mb-2 text-white">
              Password
            </label>
            <input
              id="password"
              {...register("password", { required: true })}
              className={`bg-slate-200 p-3 rounded-md w-[100%]  outline-0 focus:ring-2 focus:ring-blue-500 ${errors.password ? "ring-2 ring-red-500" : ""}`}
            />
            {errors.password && (
              <span className="sm:text-lg text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-slate-700 p-3 rounded-md w-full sm:w-[70%] text-xl text-white cursor-pointer hover:bg-slate-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        </form>
      </div>
      <LoginTemp
        imgurl="/car2.jpg"
        title="Create New Account..."
        className="text-white font-semibold text-lg"
      />
    </div>
  );
};

export default CrateNewAccount;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import LoginTemp from "../UI/LoginTemp";
import { Link } from "react-router";

const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;
const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
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
  //   const isSubmitting = useState<boolean>(false);
  return (
    <div className="sm:h-[calc(100dvh-104px)] h-screen flex">
      <LoginTemp imgurl="/car1.jpg" title="LogIn Using your account" />
      <div className="bg-gray-500 flex-1 h-full px-5 sm:px-10 flex flex-col sm:pt-20 pt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-2 sm:gap-5 items-center"
        >
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
              <span className="sm:text-lg text-sm text-red-500 block">
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
              <span className="sm:text-lg text-sm text-red-500 block">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-slate-700 p-3 mt-5 rounded-md w-full sm:w-[70%] text-xl text-white cursor-pointer hover:bg-slate-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Sign In"}
          </button>
          <Link to="/createnewaccount" className="hover:underline tex-lg">
            Or Create A New Account...
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

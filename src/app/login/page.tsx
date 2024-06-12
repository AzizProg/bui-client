"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { z } from "zod";
import Logo from "@/components/logo";
import { login } from "../../lib/login";
import LaunchToast from "@/components/launch-toast";


const loginSchema = z.object({
  username: z.string().min(1, {
    message: "Username must be not empty.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginSchema>>({});

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse({ username, password });
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        username: fieldErrors.username ? fieldErrors.username[0] : "",
        password: fieldErrors.password ? fieldErrors.password[0] : "",
      });
      return;
    }

    setIsLoading(true);
    try {
      const res = await login(username, password);

      if (res === "Login successful!") {
        LaunchToast("default", res);
        router.push("/dashboard");
      } else {
        LaunchToast("destructive", res);
      }
    } catch (error) {
      console.log(error);
      LaunchToast("destructive", "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2">
      {/* Form section */}
      <div className="flex flex-col p-8 justify-center items-center">
        <div className="max-w-md w-full">
          <Logo size={50} />
          <h2 className="font-extrabold text-xl mt-4">
            Sign in to your account
          </h2>

          <form className="space-y-4 w-full mt-4"  onSubmit={onSubmit} method="POST">
            <div className="flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="p-3 outline-none focus:border-black border-2"
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <p className="text-red-500">{errors.username}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="p-3 outline-none focus:border-black border-2"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full p-3 text-white duration-300 font-medium ${
                !isLoading
                  ? "bg-black hover:bg-slate-800"
                  : "bg-black bg-opacity-50"
              }`}
            >
              {isLoading ? (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Image section */}
      <div className="hidden md:flex w-full h-full items-center justify-center relative overflow-hidden">
        <Image
          priority
          src={"/login_cover.jpg"}
          fill
          style={{ objectFit: "cover" }}
          alt={"login cover"}
        />
      </div>
    </div>
  );
}

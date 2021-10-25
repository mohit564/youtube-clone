import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function LoginScreen() {
  return (
    <main className="flex items-center justify-center h-screen">
      <section className="flex flex-col items-center p-10 text-center border shadow md:p-20 gap-y-8">
        <Logo className="w-60" />
        <button
          class="w-full bg-red-700 text-white font-bold py-2 px-4 focus:outline-none shadow rounded-sm"
          type="button"
        >
          LOGIN WITH GOOGLE
        </button>
        <p className="text-md">This Project is made using YouTube Data API</p>
      </section>
    </main>
  );
}

export default LoginScreen;

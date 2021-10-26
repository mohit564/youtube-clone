import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { login } from "../../redux/actions/auth.action";

function LoginScreen() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  const handleLogin = () => {
    dispatch(login());
  };
  return (
    <main className="flex items-center justify-center h-screen">
      <section className="flex flex-col items-center p-10 text-center border shadow md:p-20 gap-y-8">
        <Logo className="w-60" />
        <button
          className="w-full px-4 py-2 font-bold text-white bg-red-700 rounded-sm shadow focus:outline-none"
          type="button"
          onClick={handleLogin}
        >
          LOGIN WITH GOOGLE
        </button>
        <p className="text-md">This Project is made using YouTube Data API</p>
      </section>
    </main>
  );
}

export default LoginScreen;

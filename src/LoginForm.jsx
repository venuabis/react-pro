import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { object, string } from "yup";
import { API } from "./global";
import { useEffect } from "react";

const loginSchema = object({
  username: string().required("A cool name is in need 😉"),
  password: string()
    .required("A cool password is in need 😉")
    .min(8, "Please provide a longer password 😁"),
});

export function LoginForm() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: { username: "", password: "" },
      validationSchema: loginSchema, // only if passes onSubmit
      onSubmit: (user) => {
        console.log("Cool", user);
        // API
        loginUser(user);
      },
    });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const loginUser = async (user) => {
    // POST
    // 1. method - POST
    // 2. Data - Body & JSON
    // 3. Headers - JSON

    const response = await fetch(`${API}/users/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem("token", data?.token);

    navigate("/movies");
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="text"
        placeholder="username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        name="username"
      />

      {touched.username && errors.username ? <p>{errors.username}</p> : null}

      <input
        type="text"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
      />

      {touched.password && errors.password ? <p>{errors.password}</p> : null}
      <button type="submit">Login</button>
    </form>
  );
}

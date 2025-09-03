import { useFormik } from "formik";
import { object, string, number } from "yup";

const loginSchema = object({
  username: string().required("A cool name is in need 😉"),
  password: string()
    .required("A cool password is in need 😉")
    .min(8, "Please provide a longer password 😁"),
});

export function BasicForm() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: { username: "", password: "" },
      validationSchema: loginSchema, // only if passes onSubmit
      onSubmit: (user) => {
        console.log("Cool", user);
        // API
      },
    });

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

export function BasicForm1() {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: loginSchema, // only if passes onSubmit
    onSubmit: (user) => {
      console.log("Cool", user);
      // API
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="login-form">
      <input
        type="text"
        placeholder="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="username"
      />

      {formik.touched.username && formik.errors.username ? (
        <p>{formik.errors.username}</p>
      ) : null}

      <input
        type="text"
        placeholder="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="password"
      />

      {formik.touched.password && formik.errors.password ? (
        <p>{formik.errors.password}</p>
      ) : null}
      <button type="submit">Login</button>
    </form>
  );
}

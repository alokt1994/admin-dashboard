import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import "./Login.scss";
import { useFormik } from "formik";
import * as yup from "yup";
export default function Login() {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/pages");
    }
  }, []);

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Login API call
      localStorage.setItem("token", "some-token");
      navigate("/pages");
    },
  });
  return (
    <div className="login-component">
      <Paper elevation={3} className="form-container p-3">
        <form
          className="d-flex align-items-center flex-column"
          onSubmit={formik.handleSubmit}
        >
          <h3>Login</h3>
          <TextField
            fullWidth
            name="email"
            type="text"
            className="mb-3"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            type="password"
            name="password"
            className="mb-3"
            id="outlined-basic"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

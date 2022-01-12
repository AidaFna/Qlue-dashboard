import { Form, Button, FloatingLabel, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./landing.css";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { email, password } = form;
  const navigate = useNavigate();

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const newErrors = {};
    const regexEmail =
      // eslint-disable-next-line
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // email errors
    if (!email || email === "") newErrors.email = "required";
    else if (regexEmail.test(email) === false)
      newErrors.email = "email is not valid!";
    // password errors
    if (!password || password === "") newErrors.password = "required";

    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      const body = {
        email: email,
        password: password,
      };
      console.log(body);
      // return;
      axios
        .post("https://ayodhya-dev.qlue.id/api/auths/login", body)
        .then((data) => {
          console.log(data);
          navigate("/home");
          swal(data.data.message);
        })
        .catch((err) => {
          const online = window.navigator.onLine;
          console.log(err.response.data.message);

          if (online) {
            console.log("Back Online");
            swal(err.response.data.message);
          } else if (!online) {
            swal(err.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div div className="login-card">
      <Form className="login-form">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            onChange={(e) => setField("email", e.target.value)}
            autoComplete="off"
            required
            isInvalid={!!errors.email}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            onChange={(e) => setField("password", e.target.value)}
            autoComplete="off"
            required
            isInvalid={!!errors.password}
          />
        </FloatingLabel>
        <Button
          className="mt-3 btn-login"
          variant="primary"
          type="submit"
          size="lg"
          onClick={(e) => handleLogin(e)}
        >
          {loading ? <Spinner animation="border" /> : "Login"}
        </Button>
      </Form>
    </div>
  );
};

export default Login;

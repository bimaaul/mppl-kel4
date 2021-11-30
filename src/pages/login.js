import axios from "axios";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Container } from "@material-ui/core";
import LoginForm from "../components/Login/Form";
import classes from "./Login.module.css";
import logo from "../assets/logouniverse.png";

export default function Login() {
  const history = useHistory();
  const [, setUser] = useContext(UserContext);

  const loginHandler = (data) => {
    axios
      .post("https://be-mppl.herokuapp.com/api/admin/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        const admin = res.data.admin;
        const token = res.data.token;
        const loginAdmin = {
          name: admin.name,
          isSuperAdmin: admin.isSuperAdmin,
          token,
        };
        setUser(loginAdmin);
        localStorage.setItem("user", JSON.stringify(loginAdmin));
        history.push("/admin");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <section className={classes.background}>
      <Container className={classes.content}>
        <img src={logo} alt="logo mamen" className={classes.logo} draggable="false" />
        <h1>Masuk</h1>
        <p>Tuliskan email dan password untuk masuk ke dasboard admin</p>
        <LoginForm onSubmit={loginHandler} />
      </Container>
    </section>
  );
}

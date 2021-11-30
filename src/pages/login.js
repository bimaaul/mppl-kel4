import LoginForm from "../components/Login/Form";
import { Container } from "@material-ui/core";
import classes from "./Login.module.css";
import logo from "../images/logouniverse.png";

export default function Login() {
  return (
    <section className={classes.background}>
      <Container className={classes.content}>
        <img src={logo} alt="logo mamen" className={classes.logo} draggable="false" />
        <h1>Masuk</h1>
        <p>Tuliskan email dan password untuk masuk ke dasboard admin</p>
        <LoginForm />
      </Container>
    </section>
  );
}

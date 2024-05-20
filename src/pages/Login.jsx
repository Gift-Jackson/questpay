import LoginForm from "../components/auth/LoginForm";
import PageTransition from "../components/reusable/PageTransition";

const Login = () => {
  return (
    <>
      <PageTransition>
        <LoginForm/>
      </PageTransition>
    </>
  );
};

export default Login;

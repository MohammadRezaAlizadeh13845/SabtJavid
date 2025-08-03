import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useAuth } from "../context/AuthContext";

const Initial = () => {
  const { isSignUp } = useAuth();

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-row justify-center mb-5 "></div>
      {isSignUp ? <SignUpForm /> : <LoginForm />}
    </div>
  );
};

export default Initial;

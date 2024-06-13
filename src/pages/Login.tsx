import FormsImage from "../features/login/FormsImage";
import LoginForm from "../features/login/LoginForm";

const Login: React.FC = () => {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block md:w-1/2">
          <FormsImage />
        </div>
        <div className="w-full md:w-1/2">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Login;

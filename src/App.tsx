import Global from "./styles/global";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Global />
      <Routes />
      <ToastContainer limit={3} pauseOnHover />
    </>
  );
}

export default App;

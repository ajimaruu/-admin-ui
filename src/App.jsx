import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorPage from "./pages/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (				
          <div className="flex justify-center items-center min-h-screen">
          <a href="/login" className="p-2 m-5 bg-primary text-white">
            Login
          </a>
           |
          <a href="/register" className="p-2 m-5 bg-primary text-white">
            Register
          </a>
          </div>
      ), 
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
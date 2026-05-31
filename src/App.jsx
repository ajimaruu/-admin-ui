import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorPage from "./pages/error";
import Dashboard from "./pages/dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
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
import React, { useContext} from 'react'
import Logo from "../Elements/Logo";
import DarkModeToggle from "../Elements/DarkModeToggle";
import { ThemeContext } from "../../context/themeContext";

function AuthLayout(props) {  
    const { children } = props;
    const { theme } = useContext(ThemeContext);

  return (
    <>
    <main className={`min-h-screen bg-special-mainBg dark:bg-[#181818] flex items-center justify-center transition-colors duration-300 ${theme.name}`}>
      <div className="w-full max-w-sm">
        <Logo/>
        {children}
        <div className="flex justify-center mt-6">
          <DarkModeToggle />
        </div>
      </div>
    </main>  
    </>
    );
}

export default AuthLayout
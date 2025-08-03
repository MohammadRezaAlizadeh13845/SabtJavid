import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";
import { BurgerMenuProvider } from "./BurgerMenuContext";

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BurgerMenuProvider>{children}</BurgerMenuProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default AppProviders;

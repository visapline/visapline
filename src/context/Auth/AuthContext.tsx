import { createContext } from "react";
import { AuthContextType} from "../../types/";

export const AuthContext = createContext<AuthContextType>({
    User: null,
    token: null,
    login: async () => {},
    logout: () => {}
});
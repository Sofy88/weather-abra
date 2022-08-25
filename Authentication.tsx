/*import {createContext, ReactElement} from "react"
const Authentication = createContext<any>(undefind);

export const AuthenticationProvider: React.FC<{children: ReactElement }> = ({choldren,
}) => {
    const login = () => {

    }
    const api = {login}
    return (
        <AuthenticationContext.Provider value={}>
        {children}
        </AuthenticationContext.Provider>
    );
}

export const useAuthentication = () => {
    const ctx = useContext(AuthenticationContext)

}
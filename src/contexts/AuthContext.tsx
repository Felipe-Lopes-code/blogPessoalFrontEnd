import { createContext, useState, type ReactNode } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";
 
// Definir os Estados e Funções disponibilizadas pela Context
interface AuthContextProps{
    usuario: UsuarioLogin
    handleLogin(usuario: UsuarioLogin): void
    handleLogout(): void
    isLoading: boolean
}
 
// Quem irá consumir a context
interface AuthProviderProps{
    children: ReactNode
}
 
// Criar o contexto usando a tipagem AuthContextProps
// O Contexto irá disponibilizar os estados e as funções globalmente
export const AuthContext = createContext({} as AuthContextProps)
 
// Inicializar o provedor AuthProvider
// O provedor irá implementar as funções e inicializar os estados
export function AuthProvider({ children }: AuthProviderProps) {
 
    // Inicializar o estado usuário, que é do tipo UsuarioLogin
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: "",
    })
 
    // Inicializar o estado isLoading
    const [isLoading, setIsLoading] = useState<boolean>(false);
 
    // Implementar a função handleLogin
    async function handleLogin(usuarioLogin: UsuarioLogin) {
       
        setIsLoading(true);
 
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            ToastAlerta("Usuário foi autenticado com sucesso!", "success")
 
        } catch(error) {
            ToastAlerta("Os dados do Usuário estão inconsistentes!", "error")
        }
        setIsLoading(false);
       
    }
 
    // Implementar a função handleLogout
    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: "",
        });
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}
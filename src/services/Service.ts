import axios from "axios";

const api = axios.create({
    baseURL: "https://blogpessoal-q6q1.onrender.com"
});

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    try {
        const response = await api.post(url, dados);
        setDados(response.data);
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
    }
};

export const loginUsuario = async (url: string, dados: Object, setDados: Function) => {
    try {
        const response = await api.post(url, dados);
        setDados(response.data);
    } catch (error) {
        console.error("Erro ao fazer login:", error);
    }
};
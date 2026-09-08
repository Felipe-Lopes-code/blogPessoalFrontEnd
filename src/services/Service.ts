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

export const login = async (url: string, dados: Object, setDados: Function) => {
    try {
        const response = await api.post(url, dados);
        setDados(response.data);
    } catch (error) {
        console.error("Erro ao fazer login:", error);
    }
};

export const buscar = async (url: string, setDados: Function, header: Object) => {
    const response = await api.get(url, header);
    setDados(response.data);
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const response = await api.post(url, dados, header)
    setDados(response.data);
};

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object
) => {
    const response = await api.put(url, dados, header)
    setDados(response.data);
};

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header);
};
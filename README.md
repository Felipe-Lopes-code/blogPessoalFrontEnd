# Blog Pessoal Spring

Projeto front-end de um blog pessoal desenvolvido em React + TypeScript com Vite, voltado para o gerenciamento de postagens, temas e autenticação de usuários. A aplicação se conecta a uma API backend em Java/Spring para realizar cadastro, login, listagem, criação, edição e exclusão de conteúdos.

## 📌 Descrição

Este projeto foi desenvolvido para simular um blog pessoal, com:

- Cadastro e login de usuários;
- Autenticação por token;
- Gerenciamento de temas;
- Criação, edição e exclusão de postagens;
- Navegação por rotas com React Router;
- Feedback visual por toasts e modais.

## 🧰 Tecnologias utilizadas

- React
- TypeScript
- Vite
- JavaScript/JSX
- HTML5
- CSS3
- React Router DOM
- Axios
- Tailwind CSS
- Context API do React
- Toast notifications

## 📚 Bibliotecas e dependências

Principais bibliotecas presentes no projeto:

### Dependências

- `@phosphor-icons/react` — ícones do sistema Phosphor;
- `axios` — cliente HTTP para comunicação com a API;
- `react` — biblioteca principal para a interface;
- `react-dom` — renderização do React no navegador;
- `react-router-dom` — navegação entre páginas e rotas;
- `react-spinners` — indicadores de carregamento;
- `react-toastify` — notificações visuais;
- `reactjs-popup` — modais popup;
- `tailwindcss` — framework de estilos utilitários.

### Dependências de desenvolvimento

- `@vitejs/plugin-react` — suporte ao React no Vite;
- `@types/node` — tipagem para Node.js;
- `@types/react` e `@types/react-dom` — tipagem do React;
- `eslint` — análise estática de código;
- `typescript` — linguagem e tipagem;
- `vite` — bundler e servidor de desenvolvimento.

## ⚙️ Requisitos do ambiente

Antes de rodar o projeto, certifique-se de ter instalado:

- Node.js 18 ou superior;
- npm ou yarn;
- Backend em Java/Spring conectado à aplicação.

## 🔧 Configurações necessárias

Crie um arquivo `.env` na raiz do projeto com a URL da API backend, por exemplo:

```env
VITE_API_URL=http://localhost:8080
```

Se a API estiver rodando em outra porta ou domínio, ajuste o valor conforme o ambiente.

Além disso, é importante que o backend tenha:

- CORS habilitado para o frontend;
- Endpoints para autenticação e gerenciamento de postagem e tema;
- Autenticação com token JWT ou mecanismo equivalente;
- Rotas compatíveis com as chamadas da API feitas no serviço `src/services/Service.ts`.

## ▶️ Como executar o projeto

1. Clone o repositório.
2. Acesse a pasta do projeto.
3. Instale as dependências:

```bash
npm install
```

4. Configure a variável de ambiente no arquivo `.env`.
5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

6. Acesse a aplicação no navegador, normalmente em:

```bash
http://localhost:5173
```

## 🏗️ Scripts disponíveis

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Explicação

- `npm run dev` — executa o projeto em modo de desenvolvimento;
- `npm run build` — compila a aplicação para produção;
- `npm run preview` — visualiza a build localmente;
- `npm run lint` — valida a qualidade do código com ESLint.

## 🧠 Estrutura principal do projeto

```text
src/
├── components/
│   ├── footer/
│   ├── navbar/
│   ├── postagem/
│   └── tema/
├── contexts/
│   └── AuthContext.tsx
├── models/
├── pages/
│   ├── cadastro/
│   ├── home/
│   ├── login/
│   └── perfil/
├── services/
│   └── Service.ts
├── utils/
│   └── ToastAlerta.ts
├── App.tsx
├── main.tsx
└── index.css
```

## ⚠️ Pontos de atenção

- Verifique se a URL da API definida em `VITE_API_URL` está correta.
- Certifique-se de que o backend e o frontend estejam na mesma rede ou no ambiente esperado pelo projeto.
- O projeto usa rotas do tipo SPA; ao publicar em plataformas de hospedagem, pode ser necessário configurar o fallback de rotas.
- Tokens e estados de autenticação devem ser tratados com cuidado para evitar inconsistências de sessão.
- Valide o uso de headers de autorização e o comportamento quando os tokens expirarem.
- Em produção, evite expor dados sensíveis em variáveis públicas ou logs.
- Em caso de deploy em hosting estático, configure corretamente o arquivo de rewrite para rotas do React Router.

## 🌐 Exemplos de plataformas para testar o projeto

A aplicação front-end pode ser hospedada em diversas plataformas, como:

- Vercel;
- Netlify;
- GitHub Pages;
- Firebase Hosting;
- Azure Static Web Apps;
- Render.

### Observação

Para plataformas estáticas, normalmente é necessário configurar:

- variável de ambiente `VITE_API_URL`;
- fallback para SPA em rotas;
- backend externo ou API pública acessível pela aplicação.

## 🚀 Futuras implementações

Algumas melhorias que podem ser adicionadas no futuro:

- paginação de postagens;
- busca e filtros por categoria ou tema;
- carregamento de imagens e upload de fotos;
- autenticação com refresh token;
- melhor organização de componentes e hooks reutilizáveis;
- dark mode;
- testes automatizados com Vitest ou React Testing Library;
- dashboard administrativo para gerenciamento de conteúdo;
- deploy automatizado com pipeline CI/CD.

## 🛡️ Licença

Este projeto pode ser distribuído sob a licença MIT, conforme o padrão de projetos open source.

Se desejar, adicione um arquivo `LICENSE` ao repositório com o texto completo da licença MIT para formalizar o uso e a distribuição.

## 🤝 Observações finais

Este projeto é uma base sólida para um blog pessoal com arquitetura moderna de frontend, integração com API e estrutura escalável para evoluções futuras. Ele pode ser expandido para um sistema completo de blog, portfólio pessoal, notícias ou CMS leve.

---

Desenvolvido como parte do projeto de formação e estudo em React + Spring.

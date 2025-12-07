# 🍅 Pomodoro Dev

> Um timer Pomodoro moderno, construído para maximizar a produtividade e o foco nos estudos.

![Project Status](https://img.shields.io/badge/status-concluído-green)
![React](https://img.shields.io/badge/react-18-blue)
![TypeScript](https://img.shields.io/badge/typescript-strict-blue)

## 🎯 Objetivo

Este projeto nasceu de uma necessidade pessoal: **estudar melhor**.

Acredito que a Técnica Pomodoro é uma das formas mais eficazes de manter o foco e evitar a fadiga mental. O objetivo deste app é fornecer uma ferramenta limpa, livre de distrações e tecnicamente robusta para gerenciar ciclos de foco e pausa, ajudando estudantes e desenvolvedores a manterem a consistência.

## 🚀 Tecnologias & Ferramentas

O projeto foi desenvolvido com foco em **Clean Code**, escalabilidade e tipagem estrita.

-   **[React 18](https://reactjs.org/)**: Biblioteca para construção da interface.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript para tipagem estática e segurança do código.
-   **[Vite](https://vitejs.dev/)**: Tooling de frontend para build rápido e otimizado.
-   **[Styled Components](https://styled-components.com/)**: CSS-in-JS para estilização isolada e temas.
-   **[Context API + useReducer](https://react.dev/reference/react/useReducer)**: Gerenciamento de estado global nativo (sem libs externas pesadas).
-   **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leve e consistente.
-   **ESLint & Prettier**: Padronização de código e boas práticas.

## 🏗️ Arquitetura e Estrutura

O projeto segue uma arquitetura modular, separando claramente as responsabilidades de visualização (UI) e lógica de negócios (Business Logic).

### Destaques Técnicos:
* **Gestão de Estado:** Utilizamos o padrão `useReducer` para lidar com a lógica complexa de transição de estados (Foco -> Pausa Curta -> Pausa Longa), mantendo os componentes limpos.
* **Persistência:** O estado do timer é salvo automaticamente no `localStorage`, garantindo que o progresso não seja perdido ao atualizar a página.
* **Acessibilidade/UX:** Alertas sonoros ao fim dos ciclos e atualização dinâmica do título da página (`(24:59) Foco...`) para acompanhamento em outras abas.

## ✨ Funcionalidades

- [x] Timer regressivo preciso.
- [x] Modos configuráveis: Foco (25min), Pausa Curta (5min) e Longa (15min).
- [x] Automação de Ciclos: Troca automática de modos e contagem de ciclos.
- [x] Notificação sonora (Alarme) ao finalizar um tempo.
- [x] Persistência de dados local (sobrevive ao F5).
- [x] Título da aba dinâmico com o tempo restante.

## 📦 Como rodar o projeto

```bash
# 1. Clone o repositório
git clone [https://github.com/SEU_USUARIO/pomodoro-dev.git](https://github.com/SEU_USUARIO/pomodoro-dev.git)

# 2. Entre na pasta
cd pomodoro-dev

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
O projeto estará rodando em http://localhost:5173.

🤝 Autor
Feito por Lucas Neves durante estudos aprofundados de Arquitetura React e TypeScript.

Entre em contato: https://www.linkedin.com/in/lucasneves00

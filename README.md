# 🚀 Projeto Final - Sistema de Pet Shop

Este é o projeto final da disciplina de Banco de Dados, focado na criação de um sistema de gerenciamento para um Pet Shop (Tema 10).

O sistema inclui o gerenciamento de clientes (donos), animais, consultas, vacinas e exames.

---

## 🛠️ Tecnologias Utilizadas

* **Backend:** Node.js, Express, TypeScript
* **Banco de Dados:** PostgreSQL (hospedado no Supabase)
* **ORM:** Prisma

---

## 🏃 Como Rodar (Desenvolvimento)

1.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/Jota-Pais/sistema-pet-shop.git
    cd sistema-pet-shop
    ```

2.  **Instalar as dependências:**
    ```bash
    npm install
    ```

3.  **Configurar o Ambiente:**
    * Renomeie o arquivo `.env.example` para `.env`.
    * Preencha a variável `DATABASE_URL` com a string de conexão do banco.

4.  **Rodar o servidor:**
    ```bash
    npm run dev
    ```
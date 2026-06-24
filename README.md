# 🐾 Sistema de Pet Shop

Projeto final da disciplina de **Banco de Dados I** — uma API REST com interface web para gerenciar a rotina de um pet shop: clientes (donos), seus animais, os veterinários, as consultas e os serviços oferecidos.

**Stack:** Node.js · Express · TypeScript · Prisma (ORM) · PostgreSQL (Supabase)

---

## ✨ Funcionalidades

- **CRUD completo** das 5 entidades: clientes, animais, veterinários, consultas e serviços.
- **Interface web** (páginas em `public/`) com telas de listagem, cadastro e edição para cada entidade.
- **API REST** organizada por módulo, com uma rota por operação (GET / POST / PUT / DELETE).
- **Modelagem relacional** com chaves estrangeiras e tipos adequados (`Decimal`, `Date`, `VarChar`), definida via Prisma.

---

## 🗂️ Modelo de dados

5 entidades relacionadas (definidas em [`prisma/schema.prisma`](prisma/schema.prisma)):

| Entidade | Descrição |
|---|---|
| **cliente** | Dono do animal |
| **animal** | Pet, vinculado a um cliente |
| **veterinario** | Profissional que realiza as consultas |
| **consulta** | Atendimento de um animal por um veterinário |
| **servico** | Serviços oferecidos pelo pet shop |

---

## 🔌 Endpoints da API

Base local: `http://localhost:3333`

| Recurso | Rota base | Operações |
|---|---|---|
| Clientes | `/clientes` | GET · POST · PUT · DELETE |
| Animais | `/animal` | GET · POST · PUT · DELETE |
| Veterinários | `/veterinarios` | GET · POST · PUT · DELETE |
| Consultas | `/consulta` | GET · POST · PUT · DELETE |
| Serviços | `/servico` | GET · POST · PUT · DELETE |

A interface web é servida na raiz (`/`).

---

## 🏃 Como rodar

Pré-requisitos: **Node.js 18+** e um banco **PostgreSQL** (local ou hospedado, ex.: Supabase/Neon).

```bash
# 1. Clonar o repositório
git clone https://github.com/Jota-Pais/sistema-pet-shop.git
cd sistema-pet-shop

# 2. Instalar as dependências
npm install

# 3. Configurar o ambiente
cp .env.example .env        # depois preencha a DATABASE_URL no .env

# 4. Aplicar o schema no banco (gera o Prisma Client e cria as tabelas)
npx prisma db push

# 5. Rodar em modo de desenvolvimento
npm run dev
```

Acesse **http://localhost:3333**.

---

## 🛠️ Tecnologias

- **Backend:** Node.js, Express, TypeScript
- **ORM:** Prisma
- **Banco:** PostgreSQL (hospedado no Supabase)
- **Front:** HTML, CSS e JavaScript (páginas estáticas em `public/`)

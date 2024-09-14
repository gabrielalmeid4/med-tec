# 🏥 MedTec - Sistema de Gerenciamento de Consultas Médicas

**MedTec** é uma aplicação web que visa registrar, organizar e gerenciar consultas médicas, bem como os dados dos envolvidos nessas operações, como pacientes, médicos e funcionários do hospital. O projeto ainda está no começo de seu desenvolvimento.

---

## 🚀 Funcionalidades

- 📋 **Gerenciamento de Pacientes**: Adição, edição, exclusão e listagem de pacientes.
- 🩺 **Registro de Consultas**: Cadastro de consultas médicas com informações detalhadas.
- 🔧 **Administração do Hospital**: Gestão de funcionários, cargos, médicos e supervisores.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **TypeScript**
- **TypeORM** - Mapeamento Objeto-Relacional (ORM)
- **PostgreSQL** - Banco de Dados Relacional
- **Express.js** - Framework para APIs

### Frontend
- **React.js**
- **TypeScript**
- **CSS**
- **Axios** - Cliente HTTP para comunicação com o backend

- ## Screenshots
![React App - Brave 10_09_2024 12_03_35](https://github.com/user-attachments/assets/a170d689-2ee0-471b-8913-e861b2ae6cac)
![React App - Brave 10_09_2024 12_22_44](https://github.com/user-attachments/assets/f38cc175-42fa-4e6a-831a-2b8680cce39c)



## Como rodar

### 1. Instale as Dependências do Projeto

Navegue até a pasta do projeto clonado:

```
cd <nome-do-projeto>
```

Instale as dependências do backend e frontend com o comando:

```
npm install
```

### 2. Configure o Banco de Dados

Abra o pgAdmin e crie um novo banco de dados chamado `medtec-bd`.

No arquivo `data-source.ts`, configure a conexão com o PostgreSQL com os parâmetros do seu ambiente local. Para isso, abra o arquivo `src/data-source.ts` e edite a configuração conforme o exemplo abaixo:

```typescript
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Paciente } from "./entity/Paciente";
import { Cargo } from "./entity/Cargo";
import { Funcionario } from "./entity/Funcionario";
import { Medico } from "./entity/Medico";
import { Especializacao } from "./entity/Especializacao";
import { Consulta } from "./entity/Consulta";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",  // seu usuário PostgreSQL
    password: "sua_senha_aqui",  // sua senha PostgreSQL
    database: "medtec-bd",  // nome do banco de dados criado
    synchronize: true,
    logging: false,
    entities: [Paciente, Cargo, Funcionario, Medico, Especializacao, Consulta],
    migrations: [],
    subscribers: [],
});
```

### 3. Configure e Rode o Backend

No terminal, navegue para a pasta principal do projeto e inicie o servidor do backend com o comando:

```
npm run dev
```

Isso irá iniciar o servidor em `http://localhost:3000`.

### 4. Configure e Rode o Frontend

Navegue até a pasta `frontend` do projeto:

```
cd frontend
```

Instale as dependências do React com o comando:

```
npm install
```

Inicie o servidor do frontend com o comando:

```
npm start
```

O frontend estará disponível em `http://localhost:3001`.

### 5. Teste!

Agora que tanto o backend quanto o frontend estão rodando:

- O backend estará ouvindo as requisições em `http://localhost:3000`.
- O frontend estará rodando em `http://localhost:3001`, e você poderá ver a lista de pacientes ou adicionar novos pacientes conforme o que já foi implementado.

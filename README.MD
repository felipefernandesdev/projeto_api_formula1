# 🏎️ Formula 1 API

Uma API REST simples e rápida desenvolvida com Node.js + TypeScript + Fastify para fornecer informações sobre:

* 🏁 Equipes da Fórmula 1
* 👨‍🏎️ Pilotos
* 🔎 Busca por ID
* ⚡ Endpoints rápidos usando Fastify

O projeto foi criado com foco em:

* aprendizado de APIs REST
* uso moderno do Fastify
* TypeScript
* tipagem de rotas
* estrutura backend simples e escalável

---

# 🚀 Tecnologias Utilizadas

## Backend

* Node.js
* TypeScript
* Fastify
* @fastify/cors

## Ferramentas

* tsx
* tsup

---

# 📂 Estrutura do Projeto

```bash
src/
└── server.ts

Arquivos raiz:
├── package.json
├── tsconfig.json
├── .env
├── .gitignore
└── README.MD
```

---

# 🧠 Análise Arquivo por Arquivo

## `src/server.ts`

Arquivo principal da aplicação.

Responsável por:

* iniciar servidor Fastify
* registrar CORS
* armazenar dados mockados
* criar endpoints
* retornar respostas JSON

---

## ⚙️ Inicialização do Fastify

```ts
const server = fastify({ logger: true });
```

### O que isso faz

* cria o servidor HTTP
* habilita logs automáticos
* prepara sistema de rotas

### Pontos positivos

✅ Código limpo

✅ Inicialização simples

✅ Boa escolha de framework

### Sugestões

* Criar plugin de inicialização
* Separar configuração em outro arquivo

---

## 🌐 Configuração de CORS

```ts
server.register(cors, {
  origin: '*'
});
```

### Função

Permite acesso à API de qualquer origem.

### Pontos positivos

✅ Fácil integração frontend

✅ Bom para estudos e desenvolvimento

### Atenção

Em produção, o ideal seria limitar origens:

```ts
origin: ['https://meusite.com']
```

---

## 📦 Interfaces de Params

```ts
interface DriveParams {
  id: string;
}
```

```ts
interface TeamParams {
  id: string;
}
```

### Objetivo

Tipar parâmetros das rotas.

### Pontos positivos

✅ Uso correto de TypeScript

✅ Segurança de tipos

### Melhoria recomendada

Existe um pequeno typo:

```ts
DriveParams
```

O ideal seria:

```ts
DriverParams
```

---

## 🏁 Array `teams`

Contém as equipes da Fórmula 1.

### Estrutura

```ts
{
  id,
  name,
  base
}
```

### Exemplo

```json
{
  "id": 1,
  "name": "Ferrari",
  "base": "Maranello, Italy"
}
```

### Pontos positivos

✅ Dados organizados

✅ Fácil manutenção

✅ Estrutura simples

### Sugestões futuras

* Adicionar logo
* Adicionar motor
* Adicionar chefe da equipe
* Adicionar nacionalidade

---

## 👨‍🏎️ Array `drivers`

Contém os pilotos da Fórmula 1.

### Estrutura

```ts
{
  id,
  name,
  team
}
```

### Pontos positivos

✅ Estrutura clara

✅ Boa organização

### Sugestões futuras

* Número do piloto
* Nacionalidade
* Vitórias
* Títulos
* Pontos na temporada
* Foto do piloto

---

# 📡 Endpoints da API

---

## 🏁 Listar Equipes

### Endpoint

```http
GET /teams
```

### Resposta

```json
{
  "teams": [
    {
      "id": 1,
      "name": "Ferrari",
      "base": "Maranello, Italy"
    }
  ]
}
```

### Fluxo

```txt
Request
   ↓
Retorna array teams
```

### Pontos positivos

✅ Endpoint simples

✅ Boa estrutura JSON

---

## 👨‍🏎️ Listar Pilotos

### Endpoint

```http
GET /drivers
```

### Resposta

```json
{
  "drivers": []
}
```

### Fluxo

```txt
Request
   ↓
Retorna array drivers
```

---

## 🔎 Buscar Equipe por ID

### Endpoint

```http
GET /teams/:id
```

### Exemplo

```http
GET /teams/1
```

### Fluxo

```txt
Recebe ID
    ↓
Busca no array
    ↓
Retorna equipe
```

### Tratamento de erro

```json
{
  "error": "Team not found"
}
```

### Pontos positivos

✅ Boa validação

✅ Uso correto de status HTTP

---

## 🔎 Buscar Piloto por ID

### Endpoint

```http
GET /drivers/:id
```

### Exemplo

```http
GET /drivers/1
```

### Fluxo

```txt
Recebe ID
    ↓
Busca piloto
    ↓
Retorna resultado
```

### Tratamento de erro

```json
{
  "error": "Driver not found"
}
```

---

# ⚙️ Scripts do Projeto

## Desenvolvimento

```bash
npm run start:dev
```

## Watch Mode

```bash
npm run start:watch
```

## Build

```bash
npm run dist
```

## Executar build

```bash
npm run start:dist
```

---

# ⚙️ Configuração

## 1. Instalar dependências

```bash
npm install
```

## 2. Configurar `.env`

O projeto já utiliza:

```env
PORT=3333
```

---

# ▶️ Executando o Projeto

## Desenvolvimento

```bash
npm run start:dev
```

Servidor disponível em:

```txt
http://localhost:3333
```

---

# 🏗️ Arquitetura Atual

Atualmente a aplicação utiliza uma arquitetura simples:

```txt
server.ts
 ├── dados mockados
 ├── rotas
 └── handlers
```

### Pontos positivos

✅ Muito simples para aprendizado

✅ Fácil entendimento

✅ Código enxuto

### Limitações atuais

⚠️ Tudo está centralizado em um único arquivo.

Isso pode dificultar manutenção futura.

---

# 🔥 Melhorias Recomendadas

## Curto prazo

* [ ] Separar rotas
* [ ] Separar controllers
* [ ] Criar services
* [ ] Criar models/interfaces
* [ ] Mover arrays para arquivos externos

## Médio prazo

* [ ] Banco de dados
* [ ] Paginação
* [ ] Busca por nome
* [ ] Filtro por equipe
* [ ] Variáveis de ambiente tipadas
* [ ] Swagger/OpenAPI

## Longo prazo

* [ ] Docker
* [ ] Testes automatizados
* [ ] Autenticação JWT
* [ ] Cache
* [ ] Deploy cloud
* [ ] CI/CD
* [ ] Prisma ORM
* [ ] PostgreSQL

---

# 🧱 Arquitetura Recomendada Futuramente

```txt
src/
├── server.ts
├── routes/
├── controllers/
├── services/
├── repositories/
├── models/
├── database/
└── utils/
```

Essa estrutura deixaria o projeto:

✅ escalável

✅ organizado

✅ desacoplado

✅ fácil de testar

---

# 📈 Avaliação Técnica

| Critério            | Nota  |
| ------------------- | ----- |
| Organização         | 7/10  |
| Legibilidade        | 9/10  |
| Simplicidade        | 10/10 |
| Escalabilidade      | 5/10  |
| TypeScript          | 8/10  |
| Estrutura REST      | 8/10  |
| Tratamento de erros | 6/10  |

---

# 💡 Considerações Finais

O projeto é excelente para estudos de:

* Fastify
* APIs REST
* Node.js
* TypeScript
* rotas HTTP
* JSON APIs
* parâmetros de rota
* status HTTP

Mesmo sendo pequeno, já demonstra:

✅ uso moderno do Fastify

✅ organização mínima correta

✅ boas práticas iniciais

✅ tipagem com TypeScript

A API pode evoluir facilmente para:

* backend completo de Fórmula 1
* dashboard esportivo
* API pública
* sistema em tempo real
* integração com frontend React/Vue

---

# 📄 Dependências

## `fastify`

Framework web extremamente rápido para Node.js.

## `@fastify/cors`

Permite integração da API com aplicações frontend.

## `tsx`

Executa TypeScript diretamente sem build manual.

## `tsup`

Responsável pelo build da aplicação.

---

# 📄 Licença

ISC

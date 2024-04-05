## Scripts Disponíveis

- `npm start`: Inicia o servidor em produção.
- `npm run build`: Compila o código TypeScript para JavaScript.
- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run db:migrate`: Aplica as migrações do banco de dados utilizando o Prisma.
- `npm run db:studio`: Abre o Prisma Studio para visualização e edição do banco de dados.

## Tecnologias Utilizadas

- [Fastify](https://www.fastify.io/) - Framework web para Node.js.
- [Prisma](https://www.prisma.io/) - ORM para bancos de dados SQL.
- [Zod](https://github.com/colinhacks/zod) - Biblioteca para validação de dados.
- [fastify-type-provider-zod](https://github.com/turkerdev/fastify-type-provider-zod) - Provedor de tipos para validação de dados com Zod em Fastify.
- [Day.js](https://day.js.org/) - Manipulação de datas.
- [Fastify Swagger](https://github.com/fastify/fastify-swagger) - Plugin Fastify para documentação Swagger.
- [Fastify Swagger UI](https://github.com/fastify/fastify-swagger-ui) - Interface de usuário Swagger para Fastify.

## Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poser visualizar a lista de participantes; 
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

## Uso do Swagger

A documentação da API está disponível através do Swagger UI. Você pode acessá-la através da rota `/docs`.

## Banco de dados

Nessa aplicação vamos utilizar banco de dados relacional (SQL). Para ambiente de desenvolvimento utilizei o SQLite.

### Estrutura do banco (SQL)

```sql
-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL,
    "maximum_attendees" INTEGER
);

-- CreateTable
CREATE TABLE "attendees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "attendees_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "check_ins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attendeeId" INTEGER NOT NULL,
    CONSTRAINT "check_ins_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "attendees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "attendees_event_id_email_key" ON "attendees"("event_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "check_ins_attendeeId_key" ON "check_ins"("attendeeId");
```

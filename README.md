# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**. 
- OBS: Informações dos requisitos na pasta `server`

## Configurações

### Configuração do Servidor

1. Navegue até o diretório do servidor: `cd server`  

2. Instale as dependências do servidor: `npm install`

3. Crie um arquivo `.env` no diretório `server` e adicione a seguinte variável de ambiente:
   - `DATABASE_URL="file:./dev.db"`
4. Execute o comando para popular o banco de dados com dados de exemplo: `npx prisma db seed` 

5. Inicie o servidor em modo de desenvolvimento: `npm run dev`

### Configuração do Cliente

1. Navegue até o diretório do cliente: `cd client`

2. Instale as dependências do cliente: `npm install`

3. Inicie o cliente em modo de desenvolvimento: `npm run dev`

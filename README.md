# API para lista de tarefa
Essa API utiliza NodeJS + Sequelize + Sqlite para criar o CRUD (Create, Read, Update e Delete) de uma aplicação para listagem de tarefas.

## Instalação do Express e Sequelize:

```
$ npm init

$ npm install --save express

$ npm install --save sequelize

$ npm install -D sequelize-cli

$ npm install --save sqlite3

$ npx sequelize init
```

Diretórios: 

* **config** - configuração do banco de dados
* **migrations** - mudanças estruturais no banco de dados
* **models** - são referências com os tabelas do banco de dados
* **seeders** - dados iniciais para o banco

## Criação de modelos e migrações
Comandos Sequelize-cli:
```
$ npx sequelize-cli model:generate --name=Tarefa --attributes name:string,desc:string,status:boolean,dataDeConclusao:date,prioridade:string

$ npx sequelize-cli db:migrate
```

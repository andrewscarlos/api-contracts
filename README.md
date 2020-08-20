
## API CONTRTOS

 - Esta API cria contratos para futuro emprestimos, ela possue 3 estados ('Criação', 'Upload' e 'Resultado'), é necessario a criacao de um contrato, logo apos o usuario devera passar as imagens requisitadas para avalição do e em seguida o usuario tera o resultado se seu emprestimo.

 

## Recursos do Projeto

- Linguagem: [_NodeJS 14_](https://nodejs.org/en/docs/)
- Dependencias:  [_Express ^4.17.1_](https://www.npmjs.com/package/express), [_Mongoose ^5.10.0_](https://www.npmjs.com/package/mongoose), 
[_multer^1.4.2_](https://github.com/expressjs/multer)
- DB: [_MongoDB_](https://docs.mongodb.com/manual/)
- Schema: Contrato

## Executando

run:


```bash
$ npm i

$ npm start
```
# Metodos Contratos

- GET todos osContratos

[_http://localhost:5000/contratos/_](http://localhost:5000/contratos/)

- GET por id

[_http://localhost:5000/contratos/<:id>_](http://localhost:5000/contratos/<:id>)

- POST para criar contratos

[_http://localhost:5000/contratos_](http://localhost:5000/contratos)

```javascript
// Body
{
    "nome": "nome",
	"email": "email",
	"cpf": "cpf",
	"valorEmprestimo": 40.000,
	"rendaMensal": 2.000,
	"dataNascimento": "1996-10-08T15:17:00.000",
	"estadoCivil": "Estado Ciil",
	"endereco": "endereço"
}
```

- PUT atualizar contratos por id

[_http://localhost:5000/contratos/<:id>_](http://localhost:5000/contratos/<:id>)

```javascript
// Body

{
	"nome": "nome",
	"email": "email",
	"cpf": "cpf",
	"valorEmprestimo": 40.000,
	"rendaMensal": 2.000,
	"dataNascimento": "1996-10-08T15:17:00.000",
	"estadoCivil": "Estado Ciil",
	"endereco": "endereço"
}

```
## Metodos Upload

- PUT  Envio de imagens
  é necessario o envio de "files" e o id como paramatro

[_http://localhost:5000/contratos/upload/<:id>_](http://localhost:5000/contratos/upload/<:id>)



## Metodos para verificar o resultado dos contratos POR ID

- GET todos osContratos

[_http://localhost:5000/contratos/upload/result/<:ID>_](http://localhost:5000/contratos/upload/result/<:ID>)


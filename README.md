# apiContratos


* run:
 npm i
 npm start
 
* Metodos dos Contratos

GET todos contratos
http://localhost:5000/contratos/

GET por id
http://localhost:5000/contratos//<:id>

POST para criar contratos
http://localhost:5000/contratos

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

PUT atualizar contratos por id
http://localhost:5000/contratos/<:id>

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

 
* Metodos para Uploads contratos POR ID

PUT http://localhost:5000/contratos/upload/<:id>
//é necessario passar 3 files como requisição e tbm o id que sera colocado as imagens

Metodos para ve o resultado dos contratos POR ID

GET http://localhost:5000/contratos/upload/result/<:ID>


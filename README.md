<h1 align="center">Desafio técnico - Allugator 🐊</h1>

<p align="center">
  <img alt="Challenge"  src="https://github.com/twistershark/AllugatorChallenge/blob/main/assets/1.png" />

  <img alt="Challenge"  src="https://github.com/twistershark/AllugatorChallenge/blob/main/assets/2.png" />
</p>


---
# 📑 Índice

- [Sobre](#-sobre)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Como utilizar o projeto](#-como-utilizar-o-projeto)
- [Testes](#testes)
- [Autor](#-autor)
---

## 📋 Sobre

Esse projeto foi desenvolvido como resposta ao teste técnico requisitado pela Allugator no seu processo seletivo. Decidi criar a API em NodeJS com Express e o Frontend com React.
<br />
Busquei organizar o backend de forma a permitir que fosse fácil de escalar e adicionar novas features.
<br />
Já no frontend, busquei fazer o melhor que pude no tempo disponibilizado. Meu objetivo era criar um layout bonito e eficiente que facilitasse o uso da aplicação.

---

## 🚀 Tecnologias

- [NodeJS](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Docker](https://www.docker.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [Jest](https://jestjs.io/)
- [Styled Components](https://styled-components.com/)


---

## 🔧 Pré-requisitos

- **NodeJS** versão 12 ou maior - Você pode encontrar as informações e arquivos necessários para instalação nesse [link](https://nodejs.org/en/).
- **Yarn** - Com o NodeJS instalado, execute o seguinte comando no terminal para que o yarn seja instalado na sua máquina:
  ```sh
  $ npm install -g yarn
  ```

- **Docker** Caso ainda não tenha o Docker instalado na sua máquina, você pode seguir o seguinte tutorial para efetuar a instalação seguindo seu SO: [Link](https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2)

<br />

- Com todos os requisitos acima instalados, vamos criar um container com a imagem do PostgreSQL que foi utilizado como Banco de Dados dessa API. Para isso, vamos executar o seguinte comando no terminal: 

<br />

  ```sh
   $ sudo docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
  ```

<br />

Assim que o comando acima finalizar sua execução, é necessário criar um banco de dados com o nome "allugator". Para isso, utilizaremos uma ferramenta chamada **DBeaver** que pode ser encontrada para download nesse link: [DBeaver](https://dbeaver.io/download/)

<br />

---

Após a instalação do DBeaver, vamos criar uma conexão com nosso container do Docker.

<br />

Clique no ícone de tomada no canto esquerdo superior do DBeaver.

<p align="center">
  <img alt="Challenge"  src="https://github.com/twistershark/AllugatorChallenge/blob/main/assets/instructions/dbeaver1.png" />
</p>

Selecione **Postgres** e depois clique em **next**

<p align="center">
  <img alt="Challenge"  src="https://github.com/twistershark/AllugatorChallenge/blob/main/assets/instructions/dbeaver2.png" />
</p>

Preencha os campos de conexão com os seguintes dados:
- Host: **localhost**
- Database: **postgres**
- Port: **5432**
- Username: **postgres**
- Password: **docker**

<p align="center">
  <img alt="Challenge"  src="https://github.com/twistershark/AllugatorChallenge/blob/main/assets/instructions/dbeaver3.png" />
</p>

Agora selecione a opção **PostgreSQL** do menu acima e depois marque a caixa **Show all databases** e em seguida clique em Finish.

<p align="center">
  <img alt="Challenge"  src="https://github.com/twistershark/AllugatorChallenge/blob/main/assets/instructions/dbeaver4.png" />
</p>

Vamos criar o banco de dados com o nome **allugator** agora. Para isso, clique com o botão direito em cima da conexão **postgres** que foi criada. Selecione **Create** e depois **Database**.

<br />

Na tela de criação de bando de dados, coloque os seguintes dados:
- Database name: **allugator**
e clique em **ok** 

<p align="center">
  <img alt="Challenge"  src="https://github.com/twistershark/AllugatorChallenge/blob/main/assets/instructions/dbeaver5.png" />
</p>

---

Com as dependências instaladas e com o nosso banco de dados **allugator** criado, clone esse repositório na sua máquina(caso não tenha clonado ainda) e acesse a pasta **backend**.

Dentro da pasta **backend** execute o seguinte comando no terminal para instalar todas as libs de dependência da API:
  ```sh
  $ yarn
  ```
Feito isso, precisamos executar as migrations da API para que a tabela de *collaborators* seja criada no nosso BD. Para isso, vamos executar o seguinte comando no terminal:

  ```sh
  $ yarn typeorm migration:run 
  ```

Caso você tenha concluído todos os passos até aqui, já temos nossa aplicação clonada, com o banco de dados criado e todas as dependências do backend instaladas. Que tal importarmos os dados de exemplo do desafio no nosso banco de dados? Para isso, você precisa procurar pela tabela de collaborators.

<p align="center">
  <img alt="Challenge"  src="https://github.com/twistershark/AllugatorChallenge/blob/main/assets/instructions/dbeaver6.png" />
</p>

Agora clique com o botão direito do mouse em cima da tabela **collaborators** e clique em **Import Data**. Na tela que aparecerá, selecione **CSV** e clique em **next**.

<p align="center">
  <img alt="Challenge"  src="https://github.com/twistershark/AllugatorChallenge/blob/main/assets/instructions/dbeaver7.png" />
</p>

Navegue até a pasta **resources** desse projeto e selecione o arquivo chamado **db.csv**. Agora continue clicando em **next** em todas as telas que aparecerão. Por fim, aparecerá a seguinte tela. Clique em **Start**

<p align="center">
  <img alt="Challenge"  src="https://github.com/twistershark/AllugatorChallenge/blob/main/assets/instructions/dbeaver8.png" />
</p>

### Pronto! Nosso backend já está pronto e configurado. Sempre que quisermos iniciar a API basta executar o seguinte comando no terminal na pasta backend:

  ```sh
  $ yarn dev:server 
  ```
### Agora vamos iniciar nossa aplicação web para consumir essa API. 

Abra uma nova janela/aba do terminal, navegue até a pasta **frontend** e execute o seguinte comando para instalar todas as libs de dependência do frontend(executar apenas na primeira vez):

  ```sh
  $ yarn 
  ```

Agora podemos iniciar nosso frontend com o seguinte comando no terminal:
  ```sh
  $ yarn start
  ```

**Pronto! Aplicação rodando!**

---
## 🌟 Como utilizar o projeto

```sh

  # Caso ainda não tenha executado a API, entre na pasta backend e execute:
  $ yarn dev:server

  # Agora abra uma nova aba/janela do terminal, navegue até a pasta frontend e execute:
  $ yarn start

```

### Rotas da aplicação


- **`POST /collaborators`**: A rota deve receber `name`, `cpf`, `job`, `signUpDate`, `uf`, `salary`, `status` dentro do corpo da requisição, sendo o `name` _(string)_ o nome do funcionário a ser cadastrado, `cpf` _(string)_ seu CPF, `job` _(string)_ o seu cargo, `signUpDate` _(string)_ a sua data de cadastro, `uf` _(string)_ seu estado, `salary` seu salário _(number)_ e `status` _(string)_ como seu status. Caso o usuário já exista, seus dados serão atualizados com os informados na requisição. Será retornado o funcionário recém cadastrado.
Exemplo dessa requisição:
```json
{
	"name": "Paulo",
	"cpf": "00011122238",
	"job": "dev",
	"signUpDate": "17/02/1996",
	"uf": "GO",
	"salary": 475.89,
	"status": "INACTIVE"
}
```

Exemplo de resposta da API:
```json
{
  "name": "Paulo",
  "job": "dev",
  "cpf": "00011122238",
  "uf": "GO",
  "salary": 475.89,
  "status": "INACTIVE",
  "signUpDate": "17/02/1996",
  "id": "d030fd69-ae8b-4eac-9cef-56ce75418c5e",
  "created_at": "2020-11-13T04:28:48.082Z",
  "updated_at": "2020-11-13T04:28:48.082Z"
}
```

- **`GET /collaborators`**: A rota retorna todos os funcionários cadastrados.

- **`GET /collaborators/:cpf`**: A rota recebe o CPF do funcionário como parâmetro e o retorna como response.

- **`DELETE /collaborators/:cpf`**: A rota recebe o CPF do funcionário como parâmetro e o deleta do banco de dados.

- **`GET /collaborators/list`**: Essa rota recebe query params como filtro dos funcionários que serão retornados. As possíveis querys são: 
`name` para procurar por nome, `job` para procurar por cargo, `signUpDate` para procurar por data de cadastro, `uf` para procurar por unidade federativa, `min` e `max` para procurar funcionários dentro dessa faixa salarial e `status` para procurar por status.

## 🏗 Testes

Para executar a suíte de testes, basta acessar a pasta _backend_ e tendo todas as dependências instaladas(Conferir _Pré-requisitos_), executar o seguinte comando no terminal:

```sh
yarn test
```

## 🤓 Autor

👤 **Paulo Victor da Silva**

* Github: [@twistershark](https://github.com/twistershark)
* LinkedIn: [@paulovictorsilva](https://linkedin.com/in/paulovictorsilva)

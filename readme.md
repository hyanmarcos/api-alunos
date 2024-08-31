📚 API Alunos

Esta é uma API para gerenciar informações de alunos. A API permite criar, ler, atualizar e deletar (CRUD) registros de alunos.

✨ Funcionalidades

📄 Listar Alunos: Obter uma lista de todos os alunos cadastrados.
➕ Adicionar Aluno: Adicionar um novo aluno ao sistema.
✏️ Atualizar Aluno: Atualizar os detalhes de um aluno existente.
🗑️ Excluir Aluno: Remover um aluno do sistema.
🛠️ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

Node.js (versão 14 ou superior)
npm (gerenciador de pacotes do Node.js)
🚀 Instalação

Clone o repositório:
bash
git clone https://github.com/hyanmarcos/api-alunos.git
cd api-alunos


Instale as dependências:
Dentro da pasta do projeto, execute o comando abaixo para instalar as dependências necessárias:

bash
npm install


⚙️ Configuração do Banco de Dados:
O banco de dados utilizado é o SQLite. Não é necessário configurar um servidor de banco de dados separado, pois o SQLite cria um arquivo local para armazenar os dados.

Exemplo de configuração (arquivo .env):

env

DATABASE_URL=sqlite://./database.sqlite
Certifique-se de que o caminho para o arquivo SQLite está correto no arquivo de configuração.

▶️ Executando a Aplicação

Inicie o servidor:
Após a instalação das dependências e a configuração do banco de dados, inicie a aplicação com o comando:

bash
npm start


🌐 Acesse a API:
A aplicação estará disponível em http://localhost:3000. Você pode fazer requisições para os seguintes endpoints:

GET /alunos: Lista todos os alunos.
POST /alunos: Adiciona um novo aluno.
PUT /alunos/:id: Atualiza as informações de um aluno.
DELETE /alunos/:id: Remove um aluno do sistema.
🧪 Testando a API

Você pode testar a API utilizando ferramentas como Postman ou Insomnia.

Exemplo de requisição para listar alunos:

Método: GET
URL: http://localhost:3000/alunos
🤝 Contribuição

Se você deseja contribuir com este projeto, siga as etapas abaixo:

Faça um fork do projeto
Crie uma nova branch (git checkout -b feature/nova-funcionalidade)
Faça o commit das suas alterações (git commit -m 'Adiciona nova funcionalidade')
Faça o push para a branch (git push origin feature/nova-funcionalidade)
Abra um Pull Request
📝 Licença

Este projeto está licenciado sob a MIT License.
completo
## Cantina SENAI
## Sobre o Projeto

O Cantina SENAI é uma aplicação web desenvolvida com HTML, CSS e JavaScript puro, criada para tornar o processo de compra em uma cantina escolar mais rápido, organizado e prático. A proposta do sistema é permitir que os alunos realizem pedidos de forma digital, evitando filas e facilitando o controle de saldo e compras.

O usuário pode acessar o sistema por meio de um login, consultar seu saldo disponível, adicionar créditos à conta, escolher produtos do cardápio e finalizar pedidos em poucos cliques. Após a compra, o sistema simula o preparo do lanche e envia uma notificação informando que o pedido está pronto para retirada.

Além de oferecer uma experiência simples e intuitiva, o projeto foi desenvolvido sem o uso de frameworks ou bibliotecas externas, demonstrando como é possível criar uma aplicação funcional utilizando apenas os recursos nativos da web.

 Funcionalidades:
 Login de usuários;
 Dashboard com informações do saldo disponível;
 Adição de créditos na conta;
 Cardápio digital com produtos disponíveis para compra;
 Carrinho de compras com atualização automática do valor total;
 Verificação de saldo antes da finalização do pedido;
 Redirecionamento automático para recarga em caso de saldo insuficiente;
 Notificação simulando o preparo do lanche;
 Interface simples, organizada e de fácil navegação.

Tecnologias Utilizadas:
HTML5 — Estrutura das páginas;
CSS3 — Estilização e responsividade;
JavaScript — Regras de negócio, manipulação do DOM e controle das funcionalidades.

Estrutura do Projeto:
cantina-senai/
│
├── index.html
├── style.css
├── script.js
└── README.md

Como o Sistema Funciona:

O fluxo de utilização é simples:

O usuário realiza o login.
É direcionado para o Dashboard.
Escolhe entre adicionar créditos ou acessar o cardápio.
Seleciona os produtos desejados.
Confirma o pedido.
O sistema verifica se há saldo suficiente.
Se aprovado, o valor é descontado e o pedido é enviado para a cozinha.
Após alguns segundos, uma notificação informa que o lanche está pronto para retirada.

Destaques Técnicos:
O cardápio é gerado dinamicamente pelo JavaScript, sem a necessidade de criar cada item manualmente no HTML.
O cálculo do carrinho é realizado automaticamente conforme os produtos são adicionados ou removidos.
O sistema utiliza manipulação de classes CSS para alternar entre as telas da aplicação.
Em caso de saldo insuficiente, o usuário recebe uma mensagem de aviso e é direcionado automaticamente para a tela de recarga.
A funcionalidade de notificação simula um ambiente real de cantina, informando quando o pedido está pronto.

Objetivo do Projeto:

Este projeto foi desenvolvido com o objetivo de colocar em prática conhecimentos de desenvolvimento web, trabalhando conceitos como manipulação do DOM, eventos, lógica de programação, responsividade e experiência do usuário. Além disso, apresenta uma solução simples para digitalizar o processo de pedidos em cantinas escolares.

👨‍💻 Desenvolvido por

Projeto acadêmico desenvolvido no SENAI como atividade prática para aplicação dos conhecimentos adquiridos em desenvolvimento web utilizando HTML, CSS e JavaScript. 🚀

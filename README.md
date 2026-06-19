# Sistema de Cantina Digital

## Sobre o Projeto

O Sistema de Cantina Digital é uma aplicação web desenvolvida com HTML, CSS e JavaScript, criada para modernizar e simplificar o processo de compra de lanches em ambientes educacionais. A proposta do sistema é oferecer uma experiência prática e intuitiva, permitindo que os usuários realizem pedidos, gerenciem seus créditos e acompanhem suas compras de forma rápida e organizada.

Desenvolvido utilizando apenas tecnologias nativas da web, o projeto demonstra como é possível construir uma aplicação completa e funcional sem a utilização de frameworks ou bibliotecas externas.

---

## Objetivo

Este projeto tem como objetivo aplicar conceitos fundamentais de desenvolvimento web por meio da criação de uma solução que simula o funcionamento de uma cantina digital. Além de proporcionar uma experiência mais eficiente para os usuários, o sistema permite praticar conceitos como manipulação do DOM, gerenciamento de estado, lógica de programação e desenvolvimento de interfaces responsivas.

---

## Funcionalidades

O sistema oferece diversas funcionalidades que simulam o fluxo real de atendimento de uma cantina:

* Login de usuários;
* Visualização do saldo disponível;
* Adição de créditos à conta;
* Consulta ao cardápio digital;
* Seleção de produtos;
* Carrinho de compras com atualização automática dos valores;
* Verificação de saldo antes da confirmação do pedido;
* Processamento da compra;
* Notificação de pedido pronto para retirada.

---

## Fluxo do Sistema

O funcionamento da aplicação segue um fluxo simples e intuitivo:

1. O usuário realiza o login.
2. Após acessar o sistema, é direcionado para a tela principal.
3. O saldo disponível é exibido no Dashboard.
4. O usuário pode adicionar créditos ou acessar o cardápio.
5. Os produtos desejados são adicionados ao carrinho.
6. O sistema calcula automaticamente o valor total da compra.
7. Ao confirmar o pedido, o saldo é verificado.
8. Caso haja saldo suficiente, a compra é processada.
9. O pedido é encaminhado para preparação.
10. Uma notificação informa quando o lanche está pronto para retirada.

---

## Estrutura do Projeto

```bash
cantina-digital/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

Arquivo responsável pela estrutura da aplicação. Nele estão definidas todas as telas do sistema, incluindo login, dashboard, recarga de créditos e cardápio.

### style.css

Responsável pela identidade visual da aplicação. Utiliza variáveis CSS para padronização das cores, Flexbox para organização dos componentes e animações para melhorar a experiência do usuário.

### script.js

Contém toda a lógica do sistema, incluindo autenticação, gerenciamento de saldo, controle do carrinho de compras, processamento de pedidos e exibição de notificações.

---

## Aspectos Técnicos

Um dos principais diferenciais do projeto é a geração dinâmica do cardápio. Os produtos são criados diretamente pelo JavaScript em tempo de execução, tornando o sistema mais flexível e fácil de manter.

O gerenciamento do saldo e dos itens do carrinho é realizado por meio de variáveis de estado, permitindo que as informações sejam atualizadas instantaneamente durante a navegação.

O cálculo do valor total do pedido é feito automaticamente sempre que um item é adicionado ou removido, garantindo uma experiência mais prática para o usuário.

Quando o saldo disponível não é suficiente para concluir a compra, o sistema exibe uma mensagem de aviso e redireciona o usuário para a tela de recarga após alguns segundos.

Além disso, foi implementada uma simulação do processo de preparo do pedido. Após a confirmação da compra, o sistema aguarda alguns segundos antes de exibir uma notificação informando que o lanche está pronto, tornando a experiência mais próxima de uma situação real.

---

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Puro)


A aplicação também pode servir como base para futuras melhorias, como integração com banco de dados, autenticação real de usuários, histórico de pedidos, gerenciamento de estoque e painel administrativo.

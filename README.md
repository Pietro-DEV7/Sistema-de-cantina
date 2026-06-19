# Cantina SENAI

## Sobre o Projeto

O Cantina SENAI é uma aplicação web desenvolvida com HTML, CSS e JavaScript, criada com o objetivo de simular o funcionamento de uma cantina escolar digital. O sistema busca tornar o processo de compra de lanches mais prático e organizado, permitindo que os usuários realizem pedidos, acompanhem seu saldo e gerenciem suas compras de forma simples e intuitiva.

O projeto foi desenvolvido utilizando apenas tecnologias nativas da web, sem frameworks ou bibliotecas externas, demonstrando como é possível construir uma aplicação funcional e interativa com uma estrutura leve e de fácil compreensão.

---

## Objetivo

O principal objetivo deste projeto é aplicar conceitos fundamentais de desenvolvimento web, como estruturação de páginas, estilização de interfaces, manipulação do DOM e implementação de regras de negócio utilizando JavaScript.

Além disso, o sistema apresenta uma solução simples para digitalizar processos comuns de uma cantina escolar, proporcionando uma melhor experiência para os usuários.

---

## Funcionalidades

O sistema oferece as seguintes funcionalidades:

* Autenticação de usuários por meio de login;
* Visualização do saldo disponível;
* Adição de créditos para futuras compras;
* Consulta ao cardápio digital;
* Seleção de produtos e gerenciamento do carrinho de compras;
* Cálculo automático do valor total do pedido;
* Verificação de saldo antes da finalização da compra;
* Notificações informando o andamento do pedido;
* Simulação do preparo do lanche e retirada na cozinha.

---

## Fluxo de Utilização

O funcionamento da aplicação segue um fluxo simples e intuitivo:

1. O usuário realiza o login no sistema.
2. Após a autenticação, é direcionado para o Dashboard.
3. No Dashboard, pode consultar seu saldo e escolher uma ação.
4. Caso necessário, adiciona créditos à conta.
5. Acessa o cardápio e seleciona os produtos desejados.
6. Confirma o pedido no carrinho de compras.
7. O sistema verifica se existe saldo suficiente.
8. Se o pagamento for aprovado, o pedido é enviado para a cozinha.
9. Após alguns segundos, uma notificação informa que o lanche está pronto para retirada.

---

## Estrutura do Projeto

```bash
cantina-senai/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

Responsável pela estrutura da aplicação. Nele estão definidas as telas de login, dashboard, adição de créditos e cardápio, além dos elementos que recebem os conteúdos gerados dinamicamente pelo JavaScript.

### style.css

Arquivo responsável pela aparência visual do sistema. Utiliza variáveis CSS para padronização das cores, Flexbox para organização dos elementos e animações que tornam a navegação mais agradável para o usuário.

### script.js

Contém toda a lógica da aplicação, incluindo autenticação, controle de saldo, gerenciamento do carrinho, processamento de pedidos, troca de telas e exibição de notificações.

---

## Aspectos Técnicos

Um dos principais diferenciais do projeto é a geração dinâmica do cardápio. Os produtos não são inseridos diretamente no HTML; eles são criados em tempo de execução por meio do JavaScript, facilitando futuras alterações e expansões do sistema.

Outro ponto importante é o gerenciamento de estado da aplicação, realizado através de variáveis responsáveis por armazenar informações como saldo do usuário e itens presentes no carrinho.

O cálculo do valor total da compra é realizado automaticamente utilizando métodos nativos do JavaScript, garantindo maior eficiência e organização do código.

Além disso, quando o usuário tenta finalizar uma compra sem saldo suficiente, o sistema exibe uma mensagem de aviso e o direciona automaticamente para a tela de recarga, melhorando a experiência de uso.

Para tornar a aplicação mais próxima de uma situação real, foi implementada uma simulação de preparo do pedido. Após a confirmação da compra, o sistema aguarda alguns segundos antes de exibir uma notificação informando que o lanche está pronto para retirada.

---

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6)

---

## Considerações Finais

O Cantina SENAI foi desenvolvido como um projeto acadêmico com o propósito de consolidar conhecimentos em desenvolvimento web. A aplicação demonstra a utilização prática de conceitos fundamentais da programação front-end, além de apresentar uma solução funcional para o gerenciamento simplificado de pedidos em uma cantina escolar.

O projeto também serve como base para futuras melhorias, como integração com banco de dados, autenticação real de usuários, histórico de pedidos e painel administrativo para gerenciamento de produtos e vendas.

## Front Websocket conexão com JAVA
Exemplo de conexão do front de um websocket em java.

## Documentação do JS

#### Estabelecer conexão com websocket

```javascript
var socket = new SockJS('http://localhost:8080/websocket');

stompClient = Stomp.over(socket);

stompClient.connect({},
  function (frame) {
  socketStatus.innerHTML = frame.command;
  socketStatus.className = 'open';

  console.log("Connected");
      
  /* 
     Endpoint do websocket no backend para 
     ficar escutando caso houver alteração
  */
  stompClient.subscribe('/topic/message', function (greeting) {
    // Ao receber do backend, chama a função
    showMessage(greeting.body);
  });
});
```


#### Função que será executada

```javascript
function showMessage(mensagem) {
  console.log("asfsafsasaf", mensagem);
  listaMensagem.innerHTML += '<li class="recebida"><span>Recebido: </span>' + 
  mensagem + '</li>';
  mensagemTexto.value = '';
}
```

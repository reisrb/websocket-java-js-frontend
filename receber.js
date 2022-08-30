window.onload = () => {

  var socketStatus = document.getElementById('status');

  var listaMensagem = document.getElementById('mensagens');

  var socket = new SockJS('http://localhost:8080/websocket');

  stompClient = Stomp.over(socket);

  stompClient.connect({},
    function (frame) {
      socketStatus.innerHTML = frame.command;
      socketStatus.className = 'open';

      console.log("Connected");
      stompClient.subscribe('/topic/message', function (greeting) {
        showMessage(greeting.body);
      });
    });

  function showMessage(mensagem) {
    console.log("asfsafsasaf", mensagem);
    listaMensagem.innerHTML += '<li class="recebida"><span>Recebido: </span>' + mensagem +
      '</li>';
    mensagemTexto.value = '';
  }

}
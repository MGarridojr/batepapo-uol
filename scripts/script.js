let nome = prompt("Digite o nome do usuario:");
const usuario = {
    name: nome
}

    
const promise = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants",usuario); 
promise.then(login)   
promise.catch(errologin)   
        
        

 
function errologin(){
    alert ("Erro! Nome de Usuario Invalido"); 
    window.location.reload();    
}
function login(){
    getMsg();
    setInterval(getMsg, 3000); 
}
function getMsg(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
      promise.then(MostrarMensagens);
    
}
function MostrarMensagens(response){
  const mensagens = response.data;
  let mensagensInnerHtml = "";
  const chatContainer = document.querySelector(".mensagens");

for (let i = 0; i < mensagens.length; i++) {
    const mensagem = mensagens[i];
    if (mensagem.type === "message") {
        mensagensInnerHtml =
          mensagensInnerHtml +
          `<div data-identifier="mensagem" class="Caixa-de-msg">
          <p><time>(${mensagem.time})</time>
      <span>${mensagem.from}</span> para <span>${mensagem.to}</span>: ${mensagem.text}</p>
    </div>`;
      } else if (mensagem.type === "private_message" && mensagem.to === user) {
        mensagensInnerHtml =
          mensagensInnerHtml + 
          `<div data-identifier="mensagem" class="Caixa-de-msg private">
          <p><time>(${mensagem.time})</time>
      <span>${mensagem.from}</span> reservadamente para <span>${mensagem.to}</span>: ${mensagem.text}</p>
    </div>`;
      } else if (mensagem.type === "status") {
        mensagensInnerHtml =
          mensagensInnerHtml +
          `<div data-identifier="mensagem" class="Caixa-de-msg login-logout">
          <p><time>(${mensagem.time})</time>
      <span>${mensagem.from}</span> ${mensagem.text}</p>
    </div>`;
      }
    }
    chatContainer.innerHTML = mensagensInnerHtml; 
  }                 

function entrar(){
    const nome = document.getElementById("name").value;
    const senha = document.getElementById("password").value;

    if(nome =="caio" && senha =="123"){
        alert(` Bem-vindo, Aluno  ${nome}😊👍. Hoje começamos uma nova jornada cheia de estudo e diversão.`);
        location.href = "index.html";
    }else;

    if(nome =="" || senha ==""){
        alert("usuário invalido");
    }else  return ;

    if(nome ==""){
        alert('Preencha o campo Nome !!!');
    }else return;

    if(senha ==""){
        alert('Preencha o campo Senha !!!');
    }else return;

}
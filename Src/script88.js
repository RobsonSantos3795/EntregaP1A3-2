function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login === "admin1234" & senha === "admin1234" || login === "admin" & senha === "admin" || 
    login === "adailtoncerqueira" & senha === "adailtoncerqueira" || login === "admin2" & senha === "admin2" ||
    login === "admin3" & senha === "admin3" || login === "admin4" & senha === "admin4" ||
    login ==="admin5" & senha === "admin5" || login === "admin6" & senha === "admin6" ||
    login === "admin7" & senha === "admin7" || login === "admin8" & senha === "admin8"){
        alert ('Você está logado com sucesso!, click no "Ok" para acessar sua página');
        location.href = "plataformas.html";
    }else {
        alert ('Usuário não cadastrado / Usuário ou senha incorreta!')
    }
}
    function logar2() {
        location.href = "cadastrar.html";
    }
    function alerta() {
        alert ('Cadastro realizado com sucesso!')
    }
    function logar1() {
        location.href = "login.html";
    }
    
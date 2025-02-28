const cpf = document.getElementById('cpf');


cpf.addEventListener("input", function () {
    let number = cpf.value;

    number = number.replace(/\D/g, "");
    number = number.replace(/(\d{3})(\d)/, "$1.$2");
    number = number.replace(/(\d{3})(\d)/, "$1.$2");
    number = number.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    

    cpf.value = number;
});

const telephone = document.getElementById('contato');
telephone.addEventListener("input", function(){
    let tel = telephone.value;

    tel = tel.replace(/\D/g, "");
    tel = tel.replace(/(\d{2})(\d)/, "($1) $2");
    tel = tel.replace(/(\d{5})(\d)/, "$1-$2");

    telephone.value = tel;
})


function verificaSenha(){
    const senha = document.getElementById('senha').value;
    const confirme = document.getElementById('confirme').value;

    if (senha === "") {
        alert("Por favor, digite a senha!");
    } else if (senha !== confirme) {
        alert("As senhas não coincidem!");
    } else {
        alert("Senha confirmada!");
    }
    
}


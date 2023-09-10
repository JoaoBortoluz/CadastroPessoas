
const pessoas = {};

function geraId() {
    return Math.floor(Math.random()*1000);
}

function cadastrarPessoas(pessoa) {
    //digitar dentro de uma chave porque é objeto (nome idade e cidade) 
    const id = geraId();
    pessoa.id = id;
    pessoas[id] = pessoa;
    
   
}

function listarPessoas() {
    
    const lista = Object.values(pessoas);
    if (lista.length != 0) {
        console.log(lista);
    } else {
        ("Não tem nenhuma pessoa cadastrada")
    }
}

function atualizarPessoa(id, camposAtualizados) {
    if (pessoas[id]) {
      pessoas[id] = { ...pessoas[id], ...camposAtualizados };
    }
    else{
        console.log("Pessoa não encontrada.");
    }
        
}

function deletarPessoas(id) {
    if (pessoas[id]) {
        delete pessoas[id];
        console.log("Pessoa deletada");
    } 
    else {
        console.log("Pessoa não encontrada.");
    }
}

//Uso prático
//cadastra a pessoa chamada joão
cadastrarPessoas({nome:"João", idade:18, cidade:"PF"});
//cadastra a Ana
cadastrarPessoas({nome:"Paulo", idade:40, cidade:"PF"});
//lista essas duas pessoas
listarPessoas();
//atualiza a idade do joão para 20
atualizarPessoa(Object.keys(pessoas)[0],{idade:20});
//deleta a pessoa Paulo
deletarPessoas(Object.keys(pessoas)[1])
//mostra a lista novamente com as modificações feitas
listarPessoas();

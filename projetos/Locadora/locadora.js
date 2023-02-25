function inserir(tabela, filme) {
    let inserir = window.document.getElementById(tabela)
    inserir.innerHTML = `<th scope="row">${filme.codigo}</th>`
    inserir.innerHTML += `<td>${filme.titulo}</td>`
    inserir.innerHTML += `<td>${filme.ator}</td>`
    inserir.innerHTML += `<td>${filme.data}</td>`
    inserir.innerHTML += `<td>${filme.genero}</td>`
    inserir.innerHTML += `<td>${filme.diretor}</td>`
    inserir.innerHTML += `<td>${filme.nota}</td>`
}

function identificarTabela(genero) {
    let tabela;
    if (genero === "Ação") tabela = "inserirTabelaAcao";
    else if (genero === "Animação") tabela = "inserirTabelaAnimacao";
    else if (genero === "Romance") tabela = "inserirTabelaRomance";
    else if (genero === "Suspense") tabela = "inserirTabelaSuspense";
    else if (genero === "Comédia") tabela = "inserirTabelaComedia";
    else if (genero === "Drama") tabela = "inserirTabelaDrama";
    return tabela;
}

function buscarDadosCadastrados() {
    let codi = document.forms["cadastrar"]["codigo"].value;
    let data = document.forms["cadastrar"]["data"].value;
    let titu = document.forms["cadastrar"]["titulo"].value;
    let dire = document.forms["cadastrar"]["diretor"].value;
    let ator = document.forms["cadastrar"]["ator"].value;
    let nota = document.forms["cadastrar"]["nota"].value;
    let radi = document.forms["cadastrar"]["radio"].value;
    return {codigo: codi, data: data, titulo: titu, diretor: dire, ator: ator, nota: nota, genero: radi};
}

function insere() {
    let filme = buscarDadosCadastrados();
    let tabela = identificarTabela(filme.genero);
    this.inserir(tabela, filme);
}

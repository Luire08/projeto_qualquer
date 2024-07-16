let mensagem;
let i = 1;
while(true) {
    mensagem = prompt('Digite um mensagem:');
    if(mensagem === null || mensagem === '') {
        i++;
    } else {
        break;
    }
}

let campoH1 = document.querySelector('h1');
campoH1.innerHTML = mensagem;

let essa_quant = 150;
let e = 1;
while(e <= 5100) {
    document.write('*');
    if(e === essa_quant) {
        document.write('<br>');
        essa_quant += 150;
    }
    e++;
}
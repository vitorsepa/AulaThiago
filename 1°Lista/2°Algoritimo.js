/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = []

for(i = 3; i > 0; i--){
    listaCompras.push(prompt("item"))
}

if(listaCompras[2] != "leite"){
    listaCompras.push("leite")
}
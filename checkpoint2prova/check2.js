let menu = [
    {prato: 'pipoca', tempo: 8},
    {prato: 'macarrao', tempo: 10},
    {prato: 'carne', tempo: 15},
    {prato: 'feijao', tempo: 12},
    {prato: 'brigadeiro', tempo: 8}
]
// SELECIONA A OPÇÃO
console.log(menu[0]);

//ALTERE O TEMPO PADRAO
function alterar (digitar, comida) {
    if (comida == menu[0].prato && digitar > 2* menu[0].tempo) {return "A comida queimou"};
    if (comida == menu[1].prato && digitar > 2* menu[1].tempo) {return "A comida queimou"};
    if (comida == menu[2].prato && digitar > 2* menu[2].tempo) {return "A comida queimou"};
    if (comida == menu[3].prato && digitar > 2* menu[3].tempo) {return "A comida queimou"};
    if (comida == menu[4].prato && digitar > 2* menu[4].tempo) {return "A comida queimou"};
    if (comida == menu[0].prato && digitar < menu[0].tempo) {return "Tempo Insuficiente"};
    if (comida == menu[1].prato && digitar < menu[1].tempo) {return "Tempo Insuficiente"};
    if (comida == menu[2].prato && digitar < menu[2].tempo) {return "Tempo Insuficiente"};
    if (comida == menu[3].prato && digitar < menu[3].tempo) {return "Tempo Insuficiente"};
    if (comida == menu[4].prato && digitar < menu[4].tempo) {return "Tempo Insuficiente"};
    if (comida == menu[0].prato && digitar > 3* menu[0].tempo) {return "kabumm"};
    if (comida == menu[1].prato && digitar > 3* menu[1].tempo) {return "kabumm"};
    if (comida == menu[2].prato && digitar > 3* menu[2].tempo) {return "kabumm"};
    if (comida == menu[3].prato && digitar > 3* menu[3].tempo) {return "kabumm"};
    if (comida == menu[4].prato && digitar > 3* menu[4].tempo) {return "kabumm"}
    else return "Prato pronto, bom apetite!!!"
}

//SELECIONE AQUI O TEMPO E PRATO PADRÃO, PARA A ALTERAÇAO
console.log(alterar(17, menu[0].prato));
console.log(alterar(10, menu[1].prato));


let v2 = 'Sou global';
function outraFuncao() {
    console.log(v2); // Funciona porque v2 é global
}
console.log(v2);
outraFuncao();
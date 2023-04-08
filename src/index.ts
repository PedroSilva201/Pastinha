/*const endereco = {
    logradouro: 'Rua um',
    nro: 123,
    bairro: 'Vila Jardim',
    cep: 12345678,
    cidade: 'São José dos Campos',
    uf: 'SP'
}
const {bairro, cidade, uf} = endereco;
console.log(bairro, cidade, uf);
//parou no exercicio 10 da aula 1*/
/*const a:string = "ola";
console.log(a);*/
//exercicio 12
/*const nros = [10,20,30,0,50];
const [a, b] = nros
console.log (a, b);*/
/*async function diff(a:number, b:number){
    return a - b;
}
const r = diff(2, 3);
console.log(r);*/
/*async function diff(a:number, b:number){
    throw new Error ("Lascou-se");
    return a-b
}
function teste(p:any){
    console.log("P", p);
}
function erro(e:any){
    console.log("Errou:", e.message);
}
const r = diff(2, 3);
r.then(teste).catch(erro);*/
async function diff(a:number, b:number){
    return a-b;
}
const um = diff(4, 3);
um.then( r => console.log(r));

const dois = diff(2, 4);
dois.then (r => console.log(r));

function comparar (a:number, b:number, tempo:number){
    return new Promise ( r =>{
        setTimeout( () => {
            r(a < b? b : a);
        }, tempo);
    }); 
}

async function maior(a:number, b:number, c:number,){
    let m:any = await comparar(a, b, 400);
    m = await comparar(m, c, 100);
    return m;
}

maior(1, 2, 3)
.then(r => console.log(r));

async function incrementar(nro:any){
    if(typeof nro !== "number"){
        throw Error("Parametro invalido");
    }
    return nro+1;
}
incrementar (4)
.then (r => r+10)
.then (r => console.log(r))
.catch (e => console.log(e.message));

console.log("fim")
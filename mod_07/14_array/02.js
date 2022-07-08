// concat - concatenação de arrays
const cidadesInterior = ['Araraquara', 'Araras', 'Limeira'];
console.log(cidadesInterior);

const regioesMetropolitanas = ['Campinas', 'São Paulo'];
console.log(regioesMetropolitanas);

const cidadesInteriorEMetropolitana = cidadesInterior.concat(regioesMetropolitanas);
console.log(cidadesInteriorEMetropolitana);

console.log(cidadesInteriorEMetropolitana[6]); // acessando elemento indefinido
// [] = acessando elemento de uma array

console.log(cidadesInteriorEMetropolitana.indexOf('Pinhais')); // output = -1 pois está acessando um índice indefinido
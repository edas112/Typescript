"use strict";
let age = 30;
let firstName = 'Tomas';
let isFake;
age = 31;
firstName = ' Diana';
isFake = true;
let planet = 'Earth';
let moons = 1;
let isLarge = false;
let something;
let kazkas;
let vardai = ['Tomas', 'Diana', 'Tadas', 'Dominyka'];
let amziai = [24, 33, 47, 19];
vardai.push('tautvydas');
amziai.push(27);
let vartotojas = {
    vardas: 'Tomas',
    amzius: 23,
    id: 1,
};
vartotojas.vardas = 'Gierius';
vartotojas.amzius = 25;
let asmuo1 = {
    vardas: 'Saulius',
    amzius: 38,
};
asmuo1.vardas = 'Paulina';
asmuo1.amzius = 28;
function suma(a, b) {
    return a + b;
}
const atimtis = (a, b) => {
    return a - b;
};
suma(9, 3);
atimtis(8, 5);
function sudetis(items) {
    const viso = items.reduce((a, c) => a + c, 0);
    console.log(viso);
    return viso;
}
sudetis([5, 8, 19, 2, 9, 11]);
let vaisiai = ['obuoliai', 'apelsinai', 'bananai', 'mangai'];
const vaisius = vaisiai[3];
let daiktai = [1, true, 'labas'];
const daiktas = daiktai[2];
let ageAny;
ageAny = 30;
ageAny = false;
let title;
title = 25;
title = 'Ponas';
let daiktaiAny = ['labas', true, 123];
daiktaiAny.push({ id: 15 });
function sudeti(value) {
    return value + value;
}
const pirmas = sudeti('labas');
const antras = sudeti(3);
let asmuo = ['Aidas', 30, true];
let hsla;
hsla = [200, '100%', '65%', 0.5];
function useCoords() {
    const lat = 100;
    const long = 57;
    return [lat, long];
}
const [lat, long] = useCoords();
let user;
user = ['Domantas', 27];
const pirmasAutorius = { name: 'James', avatar: '/img/james.png' };
const newPost = {
    title: 'Pirmas irasas',
    body: 'Idomi istorija',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: pirmasAutorius,
};
function createPost(post) {
    console.log(`Created post '${post.title}' by ${post.author.name}`);
}
createPost(newPost);
let posts = [];
posts.push(newPost);
function randomColor() {
    const r = Math.floor(Math.random() * 225);
    const g = Math.floor(Math.random() * 225);
    const b = Math.floor(Math.random() * 225);
    return [r, g, b];
}
const pirmaSpalva = randomColor();
const antraSpalva = randomColor();
console.log(pirmaSpalva, antraSpalva);
const pirmasMokinys = { name: 'Jonas', grade: 8 };
function formatMokinys(mokinys) {
    console.log(`${mokinys.name} gavo pazymi: ${mokinys.grade}`);
}
formatMokinys(pirmasMokinys);
formatMokinys({ name: 'Vaida', grade: 9 });
//# sourceMappingURL=index.js.map
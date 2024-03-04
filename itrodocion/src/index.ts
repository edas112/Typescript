// DUOMENU TIPAI

let age: number = 30;
let firstName: string = 'Tomas';
let isFake: boolean;

age = 31;
firstName = ' Diana';
isFake = true;

// nebegalime keisti duomenu tipo
let planet = 'Earth';
let moons = 1;
let isLarge = false;

// irgi nega;im keist duomens tipo
let something: null;
let kazkas: undefined;

//  MASYVAI

// masyvai - priima tik vieno domens tipo duomenis
let vardai: string[] = ['Tomas', 'Diana', 'Tadas', 'Dominyka'];
let amziai: number[] = [24, 33, 47, 19];

vardai.push('tautvydas');
amziai.push(27);

// OBJAKTAI

let vartotojas: { vardas: string; amzius: number; id: number } = {
  vardas: 'Tomas',
  amzius: 23,
  id: 1,
};

vartotojas.vardas = 'Gierius';
vartotojas.amzius = 25;
// bet negalime prideti nauju savybiu: telefonas, adresas ir pan.

// nusprendzia duomenu tipa pagal ivestus duomenis
let asmuo1 = {
  vardas: 'Saulius',
  amzius: 38,
};

asmuo1.vardas = 'Paulina';
asmuo1.amzius = 28;

// FUNKCIJOS

function suma(a: number, b: number): number {
  return a + b;
}

const atimtis = (a: number, b: number): number => {
  return a - b;
};

suma(9, 3);
atimtis(8, 5);

function sudetis(items: number[]) {
  const viso = items.reduce((a, c) => a + c, 0);
  console.log(viso);
  return viso;
}

sudetis([5, 8, 19, 2, 9, 11]);

// duomens tipas nusprendziamas pagal pirmojo duomens tipa
let vaisiai = ['obuoliai', 'apelsinai', 'bananai', 'mangai'];
const vaisius = vaisiai[3];

// union duomens tipas - nusprendziantis koks tai duomuo, tik vienas is
let daiktai = [1, true, 'labas'];
const daiktas = daiktai[2];

// ANY

// any - leidzia keisti duomenu tipa, neturetume daznai naudoti
let ageAny: any;
ageAny = 30;
ageAny = false;

let title;
title = 25;
title = 'Ponas';

let daiktaiAny: any[] = ['labas', true, 123];
daiktaiAny.push({ id: 15 });

function sudeti(value: any): any {
  return value + value;
}

const pirmas = sudeti('labas');
const antras = sudeti(3);

// TUPLES

// tuples - privalome laikytis nurodytos sekos
let asmuo: [string, number, boolean] = ['Aidas', 30, true];

// spalva
let hsla: [number, string, string, number];
hsla = [200, '100%', '65%', 0.5];

// kordinates
function useCoords(): [number, number] {
  const lat = 100;
  const long = 57;
  return [lat, long];
}
const [lat, long] = useCoords();

// tuples su pavadinimais
let user: [name: string, age: number];
user = ['Domantas', 27];

// INTERFACES

// interfaces - sttrukturiai nustatymai, kuriuos galime priskirti kintamiesiems, masyvams, objaktams, ir t.t
interface Autorius {
  name: string;
  avatar: string;
}

const pirmasAutorius: Autorius = { name: 'James', avatar: '/img/james.png' };

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Autorius;
}

const newPost = {
  title: 'Pirmas irasas',
  body: 'Idomi istorija',
  tags: ['gaming', 'tech'],
  create_at: new Date(),
  author: pirmasAutorius,
};

// Interface funkcijos
function createPost(post: Post): void {
  console.log(`Created post '${post.title}' by ${post.author.name}`);
}

createPost(newPost);

// Interface masyvuose
let posts: Post[] = [];
posts.push(newPost);

// TYPE ALIAS

// type alias - dar vienas budas kurti custom types
type Rgb = [number, number, number];
function randomColor(): Rgb {
  const r = Math.floor(Math.random() * 225);
  const g = Math.floor(Math.random() * 225);
  const b = Math.floor(Math.random() * 225);
  return [r, g, b];
}

const pirmaSpalva = randomColor();
const antraSpalva = randomColor();
console.log(pirmaSpalva, antraSpalva);

// TYPE ALIAS (OBJAKTAI)

type Mokinys = {
  name: string;
  grade: number;
};

const pirmasMokinys: Mokinys = { name: 'Jonas', grade: 8 };

function formatMokinys(mokinys: Mokinys): void {
  console.log(`${mokinys.name} gavo pazymi: ${mokinys.grade}`);
}

formatMokinys(pirmasMokinys);
formatMokinys({ name: 'Vaida', grade: 9 });

// UNION TYPES

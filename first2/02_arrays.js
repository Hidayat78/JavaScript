const marvel_heros = ['Iron-man', 'Spider-man', 'Thor','Loki']
const dc_heros = ['Super-man', 'Black-Adam', 'Flash']
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[4][1]);

const all_hero = marvel_heros.concat(dc_heros)
// console.log(all_hero)
const all_new_hero= [...dc_heros, ...marvel_heros]
// console.log(all_new_hero);
const depthArray=[1,2,3,5,[7,5],0,6,[1,3],98,78];
const holeDepthArray= depthArray.flat(Infinity);
// console.log(holeDepthArray.sort());
// console.log(Array.isArray("Hidayat"));
// console.log(Array.from("Hidayat"));
// console.log(Array.from({name:"Hidyat"}));

const score=100;
const score1=200;
const score3= 300;
console.log(Array.of(score,score1,score3,score));
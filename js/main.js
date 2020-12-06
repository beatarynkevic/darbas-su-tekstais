import { TextAnalizer } from './components/text-analizer/TextAnalizer.js';

const textarea = document.querySelector('textarea');
const submit = document.querySelector('input');
let text = '';


submit.addEventListener('click', e => {
    e.preventDefault();
    text = textarea.value;

    const analizatorius = new TextAnalizer(text);
    analizatorius.addLanguage('lt');

    const letterCount = analizatorius.letterCount();

    console.log('Raidziu kiekis:', letterCount);
})


const zmogus = {
    name: 'Any',
    age: 12
}
console.log(zmogus);

const noriuZinoti = 'name';
console.log(`Jos vardas ${zmogus[noriuZinoti]}`);

const zmogus2 = ['Mia', 'Tom', 'Cleo'];
console.log(zmogus2[0]);
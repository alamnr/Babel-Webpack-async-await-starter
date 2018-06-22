import { person, sayHello } from './lib'

let test =()=>console.log('123');

test();

console.log(person.name);

console.log(sayHello('Brad'));

async function getRepos(){
    const response = await fetch('https://api.github.com/users/rokon12/repos?per_page=100&client_id=4451d14d8fff3a16d020&client_secret=d317892c35d7a7f4e383b92052cda6e8b7a3b3ea');
    const data = await response.json();
    return data;
     
}

getRepos().then(repos =>{
    console.log(repos);
    document.querySelector('#output').textContent = JSON.stringify(repos);
} );
//Typescript comment
// const Main = require("./app/Main");
// import { Main } from "./app/Main";

// const message : string = "Aloha typescript";

// console.log(message);

// new Main().render();

import { Main } from './app/Main';
import { defaultState } from './defaultState';

const renderApp = () => {

    const rendered : string = new Main(defaultState).render();
    document.getElementById("App")!.innerHTML = rendered;
    
}

renderApp();
import {elements} from './base'

export const getInput = () => elements.searchInput.value;
export const clearInput = () => elements.searchInput.value = '';

export const renderResult = (word, defenition, examples) => {

    elements.word__voiceContainer.innerHTML = `
    <h1 class="word" id="word">${word}</h1>
    <button class="word__voice-btn"><i class="word__voice-icon fas fa-volume-up"></i></button>
    `;
    elements.word__describe.textContent = defenition;
    renderExamples(examples);
}

const renderExamples = (examples) => {
   
    const newArr = examples.map((el, i) => {
         return `<span class="word__example--text"><b>examples ${i}</b>: ${el}</span>`;
    });
    const string = newArr.join(' ');
    elements.word__example.innerHTML = `${string}`;
   
}
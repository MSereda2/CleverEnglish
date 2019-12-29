import {elements} from './base'

export const getInput = () => elements.searchInput.value;
export const clearInput = () => elements.searchInput.value = '';

export const renderResult = (word, defenition) => {

    elements.word.textContent = word;
    elements.word.style.opacity = 1;
    elements.word__describe.textContent = defenition;


}

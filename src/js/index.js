import Search from './module/Search';
import * as searchView from './view/searchView';
import {elements} from './view/base';

/** GLOBAL STATE OF THE APP
 * - Search object(word and defenition)
 */
const state = {}; // here will be all data

// CONTROL SEARCH FUNCTION
const controlSearch = async () => {

    // 1) get value from input
    const word = searchView.getInput();

    if(word) {
        // 2) add search object to state
        state.search = new Search(word);

        // 3) prepare UI for render
        searchView.clearInput();

        try {
            // 3) get random words

            // 4) get definition
            await state.search.getWord();

            // 5) render words and definition
            searchView.renderResult(state.search.world, state.search.res, state.search.examples);

        } catch(error) {
            alert(`${error} wrong word`)
        }
    }
    
}

// 1) Add event listner to search input
elements.searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    controlSearch();
});

// 2) Add event listener for voice button
elements.word__voiceContainer.addEventListener('click', (event) => {
    const targetIcon = event.target.parentNode;
    if(targetIcon) {
        responsiveVoice.speak(state.search.world, 'Korean Male');
    }
})


elements.searchForm.addEventListener('keyup', async () =>  {
    console.log(state)
})
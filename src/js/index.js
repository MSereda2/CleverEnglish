import Search from './module/Search';
import * as searchView from './view/searchView';
import {elements} from './view/base';

/** GLOBAL STATE OF THE APP
 * - Search object(word and defenition)
 */
const state = {}; // here will be all data

// CONTROL SEARCH FUNCTION
const controlSearch = async () => {
    responsiveVoice.speak("hello world");

    // 1) get value from input
    const word = searchView.getInput();

    if(word) {
        // 2) add search object to state
        state.search = new Search(word);

        // 3) prepare UI for render
        searchView.clearInput();

        try {
            // 4) get definition
            await state.search.getWord();

            // 5) render results
            searchView.renderResult(state.search.world, state.search.res);
            console.log(state.search)

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


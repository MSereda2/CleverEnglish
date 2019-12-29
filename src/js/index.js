import Search from './module/Search';
import * as searchView from './view/searchView';
import {elements} from './view/base';

/** GLOBAL STATE OF THE APP
 * - Search object
 * - Current recipe object
 * - Shoping list object
 * - Liked recipes
 */
const state = {}; // here will be all data

// function for adding words and definetion to UI
const controlSearch = () => {

    // 1) get value from input

    // 2) add search object to state
    state.seach = new Search(word);
}

// 1) Add event listner to search input
elements.searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    controlSearch();
});


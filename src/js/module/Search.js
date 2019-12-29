import axios from 'axios';

export default class Seacrh{

    constructor(word,definition) {
        this.word = word;
        this.definition = definition;
    }

    async getDefinition() {
        const key = `26f5a4471dmsh96c5a5c8e51d6adp1fd37ejsn43ea02f07429`;
        try {
        const res = await axios(`https://wordsapiv1.p.mashape.com/words/${this.word}, {
        "method": "GET",
	    "headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": "${key}"
            }"`);
            this.res = res;
            console.log(res);
        } catch(error) {
            alert(`i am so sorry ${error}`);
        }
    }


};


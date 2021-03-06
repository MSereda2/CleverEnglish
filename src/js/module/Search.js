import axios from 'axios';

export default class Seacrh {

    constructor(world) {
        this.world = world;
    }

    async getWord() {
        try {
            const res = await axios({
                "method":"GET",
                "url": `https://wordsapiv1.p.rapidapi.com/words/${this.world}`,
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
                "x-rapidapi-key":"9db7ec2639mshaef0b828954e7a3p10abc7jsn21140721069e"
            }});
            this.res = res.data.results[0].definition;
            this.global = res.data;
            this.examples = [];
            res.data.results.forEach(el => {
                if(el.examples != undefined) {
                  this.examples.push(el.examples[0])
                }
            })
        } catch(error) {
            alert(error)
        }
        
    };

      async getRandom() {

        const randomRes = await axios({
            "method":"GET",
            "url": `https://wordsapiv1.p.rapidapi.com/words/`,
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key":"9db7ec2639mshaef0b828954e7a3p10abc7jsn21140721069e"
            },"params":{
            "random":"true"
            }
            })

            this.random = randomRes.data.word;
            console.log(this.random);
         
    };
   
}
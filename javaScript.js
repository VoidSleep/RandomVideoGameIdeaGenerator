var RandWords = [
    "(genre)",
    "(character)",
    "(place)",
    "(time)",
    "(goal)",
    "(theme)",
]

function ChangeWords(){
    for (let index = 0; index < RandWords.length; index++) {
        switch (index) {
            case 0:
                let genres = [
                    "action",
                    "adventure",
                    "puzzle",
                    "shooter",
                    "RPG",
                    "rouge-like",
                    "horror",
                    "souls-like",
                    "survival",
                    "stealth",
                    "fighting",
                    "beat 'em up"
                ]
                let num = RNg(0,genres.length); 
                RandWords[index] = genres[num];
                break;
            case 1:
                let Chracters = [
                    "a thief",
                    "an animal",
                    "a robot",
                    "a goblin",
                    "a knight",
                    "a giant",
                    "a wizard",
                    "a salesman",
                    "an explorer",
                    "a bounty hunter",
                    "a musician",
                    "a hitman",
                    "a martial artist",
                    "a ninja",
                    "a spy",
                    "a detective"
                ]
                let num1 = RNg(0,Chracters.length); 
                RandWords[index] = Chracters[num1];
                break;
            case 2:
                let place = [
                    "a simulation",
                    "a small village",
                    "a city",
                    "the wild",
                    "another planet",
                    "a dungeon",
                    "a mansion",
                    "outer space",
                    "a desert",
                    "a forrest",
                    "an ancient city",
                    "an underwater city",
                    "a fortress",
                    "a castle",
                    "a tower"
                ]
                let num2 = RNg(0,place.length); 
                RandWords[index] = place[num2];
                break;
            case 3:
                let time = [
                    "the future",
                    "the past",
                    "the present",
                    "the near future",
                    "a time when humans did not exist yet",
                    "a time when humans have gone extinct"
                ]
                let num3 = RNg(0,time.length); 
                RandWords[index] = time[num3];
                break;
            case 4:
                let goal = [
                   "speed is rewarded.",
                    "to escape is your main objective.",
                    "get the highest score you can.",
                    "kill as much as possible.",
                    "beat the final boss to win.",
                    "explore the map and see what you can find.",
                    "you need to assassinate a specific someone.",
                    "beat all the levels to win.",
                    "you need to rescue a special someone.",
                    "become the strogest in the universe.",
                    "get all of the relics.",
                    "make it as far as possible before dying.",
                    "survive as long as possible.",
                    "infiltrate and retrive some special object.",
                    "make as much money as possible.",
                    "deliver the goods in order to win."
                ]
                let num4 = RNg(0,goal.length);
                RandWords[index] = goal[num4];
                break;
                case 5:
                let theme = [
                    "A dark academia",
                    "A cyberpunk",
                    "A solarpunk",
                    "An apocalyptic",
                    "A vaporwave",
                    "A steampunk",
                    "A victorian era",
                    "A gothic",
                    "A minimalistic",
                    "A decopunk",
                    "An atompunk",
                    "A biopunk",
                    "An aetherpunk",
                    "An avant-garde",
                    "A film noir",
                    "A western style"
                ]
                let num5 = RNg(0,theme.length);
                RandWords[index] = theme[num5];
                break;
        
            default:
                break;
        }
    }
    let Template = 
    RandWords[5]+" "+RandWords[0]+" game where you play as "+RandWords[1]+" in "+RandWords[2]+" in "+RandWords[3]+","+ "\n"+RandWords[4];

    return Template;
}
function myFunction() {
    document.getElementById("Idea").innerHTML = ChangeWords() ;
}
function RNg(min,max){
    return Math.floor(Math.random()*(max-min)) - min;
}

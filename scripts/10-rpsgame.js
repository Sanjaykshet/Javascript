let score=JSON.parse( localStorage.getItem('score'));
        let displayers = document.querySelector('.js-result');
        let res = document.querySelector('.js-moves');
        
        if (!score){
            score = {
                wins:0,
                losses:0,
                ties:0
            };
        }
        displayers.innerHTML = `Wins:${score.wins}\n Losses:${score.losses} \n Ties:${score.ties}`;
        // let score=JSON.parse( localStorage.getItem('score'))||{
        //     wins:0,
        //         losses:0,
        //         ties:0
        // };
        function computerGenerate() {
            const num = Math.random();
            let value = '';
            if (num >= 0 && num <= 1 / 3) {
                value ="rock" ;
            }
            else if (num >= 1 / 3 && num <= 2 / 3) {
                value = 'paper';
            }
            else if (num >= 2 / 3 && num <= 1) {
                value = 'scissor';
            }
            return value;

        }
        function playGame(playerchoise) {
            let computerChoise = computerGenerate();
            let result;
            if (playerchoise === 'rock') {
                if (computerChoise === 'rock') {
                    result = 'ties';
                    // score.tie+=1;
                }
                else if (computerChoise === 'paper') {
                    result = 'loose';
                    // score.losses+=1;
                }
                else if (computerChoise === 'scissor') {
                    result = 'win';
                    // score.wins+=1;
                }
            }
            else if (playerchoise === 'paper') {
                if (computerChoise === 'rock') {
                    result = 'win';
                    // score.wins+=1;
                }
                else if (computerChoise === 'paper') {
                    result = 'ties';
                    // score.tie+=1;
                }
                else if (computerChoise === 'scissor') {
                    result = 'loose';
                    // score.losses+=1;
                }
            }
            else if (playerchoise === 'scissor') {
                if (computerChoise === 'rock') {
                    result = 'loose';
                    // score.losses+=1;
                }
                else if (computerChoise === 'paper') {
                    result = 'win';
                    // score.wins+=1;
                }
                else if (computerChoise === 'scissor') {
                    result = 'ties';
                    // score.tie+=1;
                }
            }
            if(result==='win'){
                score.wins+=1;
            }
            else if(result==='loose'){
                score.losses+=1;
            }
            else if(result==='ties'){
                score.ties+=1;
            }
            displayers.innerHTML = `Wins:${score.wins}\n Losses:${score.losses} \n Ties:${score.ties}`;
            res.innerText = `You pick ${playerchoise} , Computer pick ${computerChoise} , Result is ${result}\n `;
            localStorage.setItem('score',JSON.stringify(score));
        }
        function reset(){
            score.wins=0;
            score.losses=0;
            score.ties=0;
            localStorage.removeItem('score');
            displayers.innerHTML = `Wins:${score.wins}\n Losses:${score.losses} \n Ties:${score.ties}`;
        }
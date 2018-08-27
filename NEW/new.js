document.addEventListener('DOMContentLoaded', function(){
    console.log ('joanna is connected')
    
//when someone clicks on start the game begins
    
    var button = document.querySelector('.button')
    button.addEventListener('click', function (evt) {  
    evt.preventDefault() 

const board = [];
const backWidth = 20, backHeight = 20;

var locationX;
var locationY;
var snakeLength;

// Create different div and append in the pixel object. Then append on the background.
function startGame() {
    const background = document.getElementById('board');
        for (var y = 0; y < backHeight; ++y) {
            var list = [];

                for (var x = 0; x < backWidth; ++x) {
                var pixel = {};
                pixel.element = document.createElement('div');
                background.appendChild(pixel.element);
                list.push(pixel);
            }
            board.push(list);
        }
// create a function that will place snake in the middle of the background
function snakeStart() {
        locationX = Math.floor(backWidth / 2);
        locationY = Math.floor(backHeight / 2);
        var snakeLength = 3;

        Loop();
    }


// create a function that will place food in a random position
    function Food() {
        var food_x = Math.floor(Math.random() * backWidth);
        var food_y = Math.floor(Math.random() * backHeight);

        board[food_y][food_x].food = 1;
    }

// clear background before starting the game
        for (var j = 0; i < length.backHeight; ++j) {
            for (var i = 0; i < length.backWidth; ++i) {
                board[j][i].snake = 0;
                board[j][i].food = 0;
            }
        }
// add the first snake
        board[locationY][locationX].snake = snakeLength;
// place the first food - already created a function for food
        Food();
    }

// create a function that will loop the game
    function Loop() {
        // If snake goes on the wall then game over alert!
        if (locationX < 0 || locationY < 0 || locationX >= backWidth || locationY >= backHeight) 
        {
            window.alert('GAME OVER');
        }
        // if snake eats the food adds to its length and another food is placed - using the Food function
        else if (board[locationY][locationX].food == 1 ) 
        {
            snakeLength++;
            board[locationY][locationX].food = 0;
            Food();
        }
        // New snake location
        board[locationY][locationX].snake = snakeLength;

        // Loop over the entire board, and update every pixel
        for (var y = 0; y < backHeight; ++y) {
            for (var x = 0; x < backWidth; ++x) {
                var pixel = board[y][x];

                if (pixel.snake > 0) {
                    pixel.element.className = 'snake';
                    pixel.snake -= 1;
                }
                else if (pixel.food === 1) {
                    pixel.element.className = 'food';
                }
                else {
                    pixel.element.className = '';
                }
            }
        }
    }
        // Update every 700 miliseconds
        setTimeout(Loop, 700);

// keyboard to move my snake   
    Keymap = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
                };
            
        document.addEventListener("keydown", function keyboard(event){
            var Keymap = event.keyCode;
            if (Keymap == 37) {locationX--}
            else if (Keymap == 38) {locationX++}
            else if (Keymap == 40) (locationY--)
            else if (Keymap == 39) {locationX++}
        });
            
    })

})
document.addEventListener('DOMContentLoaded', function(){
    console.log ('joanna is connected')

const back = []
const backWidth = 30, backHeight = 30;

function beginGame() {
    for (var y = 0; y < backHeight; ++y) {
        var rowPixel = [];
        for (var x = 0; x < backWidth; ++x) {
                var pixel= document.createElement('div')
                var background = document.querySelectorAll('.background')
                background.appendChild(pixel)
        
            rowPixel.push(pixel);
        
   back.push(rowPixel)
    }
}

addDiv()
}
beginGame()
})

/**
 * Reusable functions
 */
 function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight)
}


// SVG ANIMATION
let path = document.querySelector('.path')
let pathLength = path.getTotalLength()

//Show everything + PathLength (x2)
path.style.strokeDasharray =  pathLength + " " + pathLength

//Set tarting point
let startingPoint = -pathLength + 300
path.style.strokeDashoffset = startingPoint

window.addEventListener('scroll', () => {

        //Length to offset the dashes
        let fillPath = ( pathLength * getScrollPercent())

        //Draw in reverse but make sure to only draw on from starting point
        path.style.strokeDashoffset = startingPoint + fillPath

})
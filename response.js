let navopended = false
let firstopen = true

function opennav(){
    document.getElementById("navbar").style.width = "30%"
    document.getElementById("menubtn").style.visibility = "hidden"
    document.getElementById("top").style.marginLeft = "30%"
    document.getElementById("main").style.marginLeft = "30%"
    navopended = true
}
function closenav(){
    document.getElementById("navbar").style.width = "0px"
    document.getElementById("menubtn").style.visibility = "visible"
    document.getElementById("top").style.marginLeft = "0px"
    document.getElementById("main").style.marginLeft = "0%"
    navopended = false
}

function get_window_hi(){
    let hi = window.screen.height
    console.log("height: " + hi)
    let hi_out = String(hi) + "px"
    console.log("high_out: " + hi_out)
    document.getElementById("map").style.height = hi_out
    console.log("mapsize changed")
}

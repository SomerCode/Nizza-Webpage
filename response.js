let navopended = false
function opennav(){
    document.getElementById("navbar").style.width = "30%"
    document.getElementById("menubtn").style.visibility = "hidden"
    document.getElementById("top").style.marginLeft = "30%"
    navopended = true
}
function closenav(){
    document.getElementById("navbar").style.width = "0px"
    document.getElementById("menubtn").style.visibility = "visible"
    document.getElementById("top").style.marginLeft = "0px"
    navopended = false
}
function changesite(site){
    console.log("sitechange")
    let sitename = "file:///home/phantom/Nizza-Webpage/" + site + ".html"
    console.log("Sitename: " + sitename)
    if(sitename == window.location){
        console.log("closenav")
        closenav()
    }
    else{
        window.location = sitename
        console.log(window.location)
    }
}

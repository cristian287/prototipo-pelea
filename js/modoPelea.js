function iniciarModoPelea(){
    document.getElementById("start").classList.add("none")
    document.getElementById("game").classList.remove("none")
    //Iniciar modo pelea
}
function terminarModoPelea(){
    document.getElementById("start").classList.remove("none")
    document.getElementById("game").classList.add("none")
}
document.getElementById("start").addEventListener("click",function(){iniciarModoPelea()})
document.getElementById("close").addEventListener("click",function(){terminarModoPelea()})
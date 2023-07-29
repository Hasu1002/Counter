function increment(){
    var number = Number(document.getElementById('va').innerHTML)
    document.getElementById('va').innerHTML = number+1
}
function decrement(){
    var number = Number(document.getElementById('va').innerHTML)
    document.getElementById('va').innerHTML = number-1
}
function neutral(){
    document.getElementById('va').innerHTML = 0
}
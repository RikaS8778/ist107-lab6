
function showPrompt(){
    let favProgLang = prompt('Type your favorit programing language')
    if(!favProgLang)
        return prompt('Type your favorit programing language')
    else   
        return document.getElementById('fav-prog-lang').textContent = favProgLang
}
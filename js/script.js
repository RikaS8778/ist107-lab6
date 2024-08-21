let favProgLang = prompt('Type your favorit programing language')

if(!favProgLang)
    prompt('Type your favorit programing language')
else   
    document.getElementById('fav-prog-lang').textContent = favProgLang


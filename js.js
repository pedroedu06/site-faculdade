var btn = document.getElementById('show-or-hide')
var show = document.getElementById('teste')

btn.addEventListener('click', function(){
    if (show.style.display === 'block') {
        show.style.display ='none'
    } else {
        show.style.display = 'block'
    }
})
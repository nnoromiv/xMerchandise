const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click' , () => {

            nav.classList.toggle('show')

            toggle.classList.toggle('bx-x')

            bodypd.classList.toggle('body-pd')

            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

const linkcolor =document.querySelectorAll('.nav__link')

function colorlink(){
    if(linkcolor){
        linkcolor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}

linkcolor.forEach(l=> l.addEventListener('click', colorlink))
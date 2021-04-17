window.addEventListener('scroll',function () {
    let header = window.document.querySelector('header')
    let windowPosition = window.scrollY > 0
    header.classList.toggle('scrolling-active',windowPosition)
})
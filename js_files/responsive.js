const menu = document.querySelector('.menu')
document.getElementById('responsive_btn').addEventListener('click',() => {
    if(menu.style.display != 'flex'){
        document.querySelector('html').style.overflowY = 'hidden'
        menu.style.display = 'flex'
        setTimeout(() => {
            menu.style.opacity = '1'
            menu.style.height = '92vh'
        }, 1);
    }else closeTheResponsiveMenu()
})
function closeTheResponsiveMenu(){
    document.querySelector('html').style.overflowY = 'scroll'
    menu.style.height = ''
    menu.style.opacity = ''
    setTimeout(() => {
        menu.style.display = ''
    }, 100);
}

document.querySelectorAll('.menu_e').forEach(title => {
    title.addEventListener('click',() => {
        if(menu.style.flexDirection != 'row') closeTheResponsiveMenu()
    })
})
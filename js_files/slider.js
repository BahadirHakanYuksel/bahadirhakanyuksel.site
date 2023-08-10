const sliderDivs = document.querySelectorAll('.sliderDiv')

const auto = true
const IntervalTime = 5000
let sliderInterval

document.getElementById('right_slider_button').addEventListener('click',() => {
    rightSlider()
    if(auto){
        clearInterval(sliderInterval)
        sliderInterval = setInterval(rightSlider,IntervalTime)
    }
})
document.getElementById('left_slider_button').addEventListener('click',() => {
    leftSlider()
    if(auto){
        clearInterval(sliderInterval)
        sliderInterval = setInterval(rightSlider,IntervalTime)
    }
})

function rightSlider(){
    const activeSlider = document.querySelector('.slider_active')
    activeSlider.classList.remove('slider_active')
    activeSlider.nextElementSibling ? activeSlider.nextElementSibling.classList.add('slider_active') : sliderDivs[0].classList.add('slider_active')
}
function leftSlider(){
    const activeSlider = document.querySelector('.slider_active')
    activeSlider.classList.remove('slider_active')
    activeSlider.previousElementSibling ? activeSlider.previousElementSibling.classList.add('slider_active') : sliderDivs[sliderDivs.length - 1].classList.add('slider_active')
}
if(auto){
    sliderInterval = setInterval(rightSlider,IntervalTime)
}
const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    slidesPerView: 4.5,
    spaceBetween: 30,
    parallax: true,

    
});

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    slidesPerView: 4,
    spaceBetween: 175,
    parallax: true,
});

sliderMain.controller.control = sliderBg;

// document.querySelectorAll('.slider__item').forEach(item =>{
//     item.addEventListener('click', event =>{
//         item.classList.toggle('opened');
//     })
// })

document.addEventListener('click', event =>{

    const sliderItems = document.querySelectorAll('.main_slider_item');

    if (!event.target.closest('.opened') ){
        sliderItems.forEach(item => {
            item.classList.remove('opened');
            // alert(sliderItems);
        })
    }


    if(!event.target.closest('.opened') && event.target.closest('.main_slider_item')){
        event.target.closest('.main_slider_item').classList.toggle('opened');
        // alert('item');
    }



});


const desc = document.querySelector('.description');

sliderMain.on('slideChange', e =>{
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
})
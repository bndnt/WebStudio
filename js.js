const openSubscriptionPopup = document.querySelector('.js-open-subscription-popup');
const closeSubscriptionPopup = document.querySelector('.js-close-subscription-popup');
const subscriptionPopup = document.querySelector('.js-subscription-popup');
// const buttonSubscriptionPopup = document.querySelector('.js-popup__form-btn');
const bg = document.querySelector('.js-back-drop');
// mobilepopup
const openMobPopup = document.querySelector('.js-mobile__menu');
const closeMobPopup = document.querySelector('.js-close-mobile-popup');
const mobPopup = document.querySelector('.js-mobile-popup');

openSubscriptionPopup.addEventListener('click', function(e){
    e.preventDefault();
    bg.classList.add('is-open');
    subscriptionPopup.classList.add('is-open');
    document.body.classList.add("no-csroll");
}) 

closeSubscriptionPopup.addEventListener('click', function(e){
    e.preventDefault();
    subscriptionPopup.classList.remove('is-open');
    bg.classList.remove('is-open');
    document.body.classList.remove("no-csroll");
})
// buttonSubscriptionPopup.addEventListener('click', function(e){
//     e.preventDefault();
//     subscriptionPopup.classList.remove('is-open');
//     bg.classList.remove('is-open');
//     document.body.classList.toggle("no-csroll");
// })

// bg.addEventListener('click', function(e){
//     e.preventDefault();
//     subscriptionPopup.classList.remove('is-open');
//     bg.classList.remove('is-open');
//     document.body.classList.remove("no-csroll");
// })

openMobPopup.addEventListener('click', function(e){
    e.preventDefault();
    openMobPopup.classList.add('active');
    mobPopup.classList.add('active');
    document.body.classList.remove('no-scroll');
})

closeMobPopup.addEventListener('click', function(e){
    e.preventDefault();
    openMobPopup.classList.remove('active');
    mobPopup.classList.remove('active');
    document.body.classList.remove('no-scroll');
})

// document.querySelector('#mobile_menu_toggle').addEventListener('click',function (e) {
//     e.preventDefault();
//     this.classList.toggle('active');
//     document.querySelector(".top__hamburger").classList.toggle('active');
//     document.body.classList.toggle('hidden');
// })

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


if (ScrollTrigger.isTouch !==1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
    
    })

gsap.fromTo('.hero-section', { opacity: 1 }, { 
    opacity: 0,
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '820',
        scrub: true
    }
 })
 
 let itemsL = gsap.utils.toArray('.info__left .info-animate')

itemsL.forEach( item => {
    gsap.fromTo(item, { x: -50, opacity: 0 }, { 
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',  
            end: '-100',
            scrub: true
        }
      })

})

let itemsR = gsap.utils.toArray('.info__right .info-animate')

itemsR.forEach( item => {
    gsap.fromTo(item, { x: 50, opacity: 0 }, { 
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
        }
      })

})
}

function validate(){
    
    var y=document.forms["form"]["email"].value;
    
    if (y.length==0){
        document.getElementById("emailf").innerHTML="*данное поле обязательно для заполнения";
        return false;
    }

    at=y.indexOf("@");
    if (at<1) {
        document.getElementById("emailf").innerHTML="*email введен без @";
        return false;
    }

    dot=y.indexOf(".");
    if (dot <1){
        document.getElementById("emailf").innerHTML="*после @ должна быть точка";
        return false;
    }  
    else alert('Данные отправлены');
}

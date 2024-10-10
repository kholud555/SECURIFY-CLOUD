/*========================== SHOW MENU =========================*/
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    
}


/*=========================  HIDE MENU ===========================*/
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    
}
    let changeIcon = function(icon) {
    icon.style.display = 'none'
    }

/*======================= SPHERE CLOUD SERVICES ====================*/
const Texts = [
            'UHost', 'ULightHost', 'UDisk',
            'USnap', 'UNet', 'UVPC',
            'UDB MySQL', 'UDB Proxy',
            'UCDN', 'UDTS', 'Redis',
            'API'];
            
            var tagCloud = TagCloud('.Sphere', Texts, {
            // Sphere radius in px
            radius: 250,
            // animation speed
            // slow, normal, fast
            maxSpeed: 'normal',
            initSpeed: 'fast',
            // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
            direction: 135,
            // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
            keep: true
        });

        /*===================== SCROLL REVEAL ANIMATION ==================*/
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
             reset:true //Animation repeat
        })

        /*============= HEADER & HOME ================*/
        sr.reveal('.Blob')
        sr.reveal('.Blob2')
        sr.reveal('.The--Text' , {delay:800})
        sr.reveal('.move--login--btn' , {origin:'top',delay:800})
        sr.reveal('.top--left' , {origin:'left',delay:800})
        sr.reveal('.button--left' , {origin:'left',delay:800})
        sr.reveal('.top--right' , {origin:'right',delay:800})
        sr.reveal('.button--right' , {origin:'right',delay:800})

        // /*============= Our benefits ================*/
        sr.reveal('.container--Our--benefits' , {interval:100})

        // /*============= CLOUD SERVICES ================*/
        sr.reveal('.sphere--container' , {origin:'left',delay:800})
        sr.reveal('.Title--Services' , {origin:'right',delay:800})

        // /*============= Pricing ================*/
        sr.reveal('.pricing--container' , {interval:100})



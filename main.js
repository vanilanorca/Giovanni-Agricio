// window.onload = function () {
//     browserVerify();
// }

window.onload = (function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main-site").style.display = "inherit";
})


// (function ($) {

//     var $doc = $('html, body');
//     $('.scroll-page').click(function () {
//         $doc.animate({
//             scrollTop: $($.attr(this, 'href')).offset().top
//         }, 5000);
//         return false;
//     })

// })(jQuery);



//modal

function abrirModal(evento) {
    let modal = document.getElementById("myModal");
    console.log(evento.target.src);

    let modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = evento.target.src;
}

function fecharModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}



//browser
function browserVerify() {

    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        //    alert('Opera');
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        //    alert('Chrome');
        
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        // alert('Firefox');
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        document.getElementById("not-suported").style.display = 'block';
        document.getElementById("main-site").style.display = 'none';
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
            // alert('Safari');
    }
    else {
        //   alert('unknown');
    }
}




//motion by device move
if ($(window).width() < 800) {
    console.log('Aplicou');

    let counter = 0;
    const updateRate = 10;
    const limit = 45;
    const tiltable = document.getElementsByClassName("tiltable");

    function updateNow() {
        return counter++ % updateRate === 0;
    };

    window.addEventListener("deviceorientation", function (event) {
        if (updateNow()) {
            let positionGama = Math.round(event.gamma);
            let positionBeta = Math.round(event.beta);

            if (Math.abs(positionGama) > limit) {
                if (positionGama > limit) {
                    positionGama = limit;
                } else {
                    positionGama = -limit;
                }
            }
            if (Math.abs(positionBeta) > limit) {
                if (positionBeta > limit) {
                    positionBeta = limit;
                } else {
                    positionBeta = -limit;
                }
            }

            positionGama = positionGama / -100;
            positionBeta = positionBeta / -100;

            let styleY = "rotateY(" + positionGama * 3 + "deg)";
            let styleX = "rotateX(" + positionBeta * 2 + "deg)";
            tiltable.style.transform = styleY + styleX;
        }
    });
}





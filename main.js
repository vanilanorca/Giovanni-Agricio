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





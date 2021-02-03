$('.owl-carousel').owlCarousel({
    loop:true, /* PASSAR OS ITENS INFINITAMENTE */
    margin:10, /* ESPAÇO ENTRE OS INTES */
    nav:false, /* BOTÕES DE NAVECAÇÃO */

    /* ADAPTAÇÃO AOS TAMANHOS DE TELA */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{ /* MAIS DE MIL PX 5 ITENS NA TELA */
            items:5
        }
    }
})
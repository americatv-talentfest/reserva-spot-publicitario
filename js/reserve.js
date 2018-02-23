// Initialize Firebase
var config = {
  apiKey: "AIzaSyAmerica-Noticiash-Nq_-W7F35owm6gFw3vH9f6p1AiHuw",
  authDomain: "americatv-246b8.firebaseapp.com",
  databaseURL: "https://americatv-246b8.firebaseio.com",
  projectId: "americatv-246b8",
  storageBucket: "americatv-246b8.appspot.com",
  messagingSenderId: "716121533286"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

$(document).ready(() => {
  // autocompletado de marcas 
  $('input.autocomplete').autocomplete({
    data: {
      "BCP":"http://www.smartvehicularbcp.com/Images/LogoBCP.png",
      "ACE":"https://userscontent2.emaze.com/images/47441f6e-75d8-4a20-9e42-3285cc05e867/9acd7c622c0ca5962129034fa010fb3c.png",
      "Ariel":"https://www.pg.com/es_LATAM/_images/content/multimedia/Logos_descargar/ariel.png",
      "BBVA": "http://www.brandemia.org/wp-content/uploads/2011/02/logo_bbva.jpg",
      "Claro": "https://vignette.wikia.nocookie.net/logopedia/images/7/73/Logo-claro-0.jpg/revision/latest?cb=20151229190721",
      "Coca Cola":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/1200px-Coca-Cola_bottle_cap.svg.png",
      "Gloria": "http://www.staffcreativa.pe/blog/wp-content/uploads/leche-gloria-logo.jpg",
      "Inka Cola":"https://yt3.ggpht.com/a-/AJLlDp2TzrDpBTlk2OyCx9Ec5B12y02Qed__BZYVEw=s900-mo-c-c0xffffffff-rj-k-no",
      "Inkafarma":"https://lh3.googleusercontent.com/2bczTWKVlN37r7JwI4n4xVOcoOYqUstEV4RSAhLmt5p7PCzMeHEYpcLQx3U4O-dQvhVo=s117",
      "Isil": "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/092010/isil_logo.jpg?itok=jO5_MAfo",
      "KFC": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
      "Movistar":"https://www.underconsideration.com/brandnew/archives/movistar_logo.png",
      "Pamer":"http://expopostulante.com/img/GUIA-CENTROS-PREUNIVESITARIOS/PAMER/pamer2.jpg",
      "SISE":"https://lh3.googleusercontent.com/UQnpxQc7nzc0Efe5CSCwrj-IV4q9MFvxrV0DTYgL3IPL0fesnX3bB6BhpwobS8sXok8Tog=s170",
      "Tai Loy":"https://mall-prod.spincorp.cl/uploads/stores/d95beb5f46f4a7d5127355b0e0c9ae56.jpg"
    },
    limit: 20, // The max amount of results that camerica-noticias be shown at once. Default: Infinity.
    onAutocomplete: function (val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

  // autocompletado d programas

  $('input.autocomplete-2').autocomplete({
    data: {
      "Al fondo hay sitio" : "http://www.ecuavisa.com/sites/default/files/imagenes/2012/03/21/20120321_fondo1.jpg",
      "America deportes" : "https://pbs.twimg.com/profile_images/935210757926596609/3SKKg_M5_400x400.jpg",
      "Amores de Polo" : "http://cde.americatv.com.pe/minisites/los-amores-de-polo-360x227-330599.jpg",
      "América Noticias edición central" : "https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85",
      "América Noticias edición dominical" : "https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85",
      "América Noticias edición mediodia" : "https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85",
      "América Noticias edición sabado" : "https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85",
      "América Noticias espetaculos" : "https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85",
      "América Noticias matutino" :"https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85",
      "América Noticias primera-edicion" : "https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85",
      "Automundo" : "http://automundo.pe/wp-content/uploads/2016/12/AMcelebalcn.png",
      "Butaca América" :"http://cde.americatv.com.pe/americlub-butaca-america-vota-tu-pela-favorita-noticia-67161-588x368-182236.jpg",
      "Cinescape" :"https://1.bp.blogspot.com/-u0kv_J8StjU/WJYrZUbkhFI/AAAAAAAAICI/EivQsAQCexo7KYsT616NXbb9oeZn07-DgCLcB/s640/cinescape.jpg",
      "Cuarto Poder" :"http://i.imgur.com/WF5Gk13.png",
      "Cumbia Pop" : "https://vignette.wikia.nocookie.net/logopedia/images/a/a0/Cumbia_Pop_%28Logo%29.png/revision/latest?cb=20180103222511",
      "Domingo al día" :"https://lh3.googleusercontent.com/4c9k0_q83FT0_GUYGxFrHgDlYhlb-8BF57a5w9tV_2NYTjEwzMLjCX2t4dBiYEDivHtnAA=s85",
      "El chavo del ocho" :"https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/El_Chavo_Animado_-_logo.svg/1200px-El_Chavo_Animado_-_logo.svg.png",
      "En boca de todos" :"https://lh3.googleusercontent.com/0XV4meukgTlBP2Weq9-gYYfBOb87AhN1ExW02KIAXYnuqNN35QxBzNP1O8xvCqM614IGoQ=s85",
      "Estás en todas" :"https://pbs.twimg.com/profile_images/424559149414752257/2ylBQ4rj_400x400.png",
      "Esto es guerra" : "http://www.360onlinemedia.com/votos/img/logo.png",
      "Fútbol en América" :"https://cde.tvgo.pe/minisites/gisela-busca-1140x577-333128.jpg",
      "Gisela busca el amor" : "https://cde.tvgo.pe/minisites/gisela-busca-1140x577-333128.jpg",
      "La banda del chino" :"https://3.bp.blogspot.com/-R4d5MBKoDd4/WKKXqmmh_XI/AAAAAAAARPg/mdsgGvULzqkqjBnFMaFOSCuTCFnCwjRygCLcB/s1600/BANDA_DEL_CHINO.jpg",
      "La previa" :"https://lh3.googleusercontent.com/3touUESJWYQ7udEN0oMLeYgFXeWS864hNktsqtUJi-ZJ9ArytlrwI9md3-_PddnB4Im5cw=s135",
      "La rosa de Guadalupe" : "http://static.lared.cl/wp-content/uploads/2014/03/la-rosa-de-guadalupe.jpg",
      "Mujeres sin filtro" :"https://yt3.ggpht.com/a-/AJLlDp2gQWZcQkvywWYlmf73nEQpauDp0zZ2wI9m=s900-mo-c-c0xffffffff-rj-k-no",
      "Reventonazo de la Chola" :"https://lh3.googleusercontent.com/DQMeN9_n8ttEOnTSjsf8CuoB0E9_UvzBhXhdim_xvnqEBYwjaH5HFzaZ5hXxgss961lb=s132",
      "Serie solamente Milagros" :"http://1.bp.blogspot.com/-sUmdYxgJeg0/TzbJDXDwPdI/AAAAAAAAAVE/hzo1I9A7aZU/s640/420798_211030012325805_211029732325833_404166_825470147_n.jpg",
      "TEC" :"https://yt3.ggpht.com/a-/AK162_5AKWWYm8cev-C8ImaavdMjOxc9Zn0eTxYbiw=s900-mo-c-c0xffffffff-rj-k-no",
      "Telenovela caer en tentación" : "https://i.imgur.com/2LEDqIG.jpg",
      "Telenovela Colorina" :"http://www.miblogdecineytv.com/wp-content/uploads/2014/03/COLORINA.jpg",
      "Telenovela Marimar" : "https://vignette.wikia.nocookie.net/telenovelas/images/2/2c/Marimar1.jpg/revision/latest?cb=20130127224736&path-prefix=es",
      "Telenovela ojitos hechiceros" :"https://cde.americatv.com.pe/minisites/ojitos-hechiceros-360x227-333023.jpg",
      "Telenovela privilegio de amar" :"https://upload.wikimedia.org/wikipedia/en/d/de/Epda.jpg",
      "Ven baile quinceañera" : "https://seriesblanco.com/files/uploads/3288.jpg"
    },
    limit: 20, // The max amount of results that camerica-noticias be shown at once. Default: Infinity.
    onAutocomplete: function (val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
});
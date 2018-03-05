$(document).ready(() => {
  $('select').material_select();

  var arrayConter = {
    'al-fondo-hay-sitio': [],
    'al-fondo-hay-sitio-2': [],
    'america-deportes': [],
    'amores-de-polo': [],
    'an-edicion-central': [],
    'an-edicion-dominical': [],
    'an-edicion-mediodia': [],
    'an-edicion-sabado': [],
    'an-espetaculos': [],
    'an-matutino': [],
    'an-primera-edicion': [],
    'an-primera-edicion-2': [],
    'antesala': [],
    'automundo': [],
    'butaca-domingo': [],
    'butaca-matine': [],
    'butaca-sabado': [],
    'champios': [],
    'cinescape': [],
    'cuarto-poder': [],
    'cumbia-pop': [],
    'domingo-al-dia': [],
    'el-chavo-del-ocho': [],
    'el-chavo-del-ocho-2': [],
    'el-chavo-del-ocho-3': [],
    'en-boca-de-todos': [],
    'estas-en-todas-2': [],
    'estas-en-todas': [],
    'esto-es-guerra': [],
    'futbol-en-america': [],
    'gisela-busca-el-amor': [],
    'la-banda-del-chino': [],
    'la-previa': [],
    'la-rosa-de-guadalupe': [],
    'la-rosa-de-guadalupe-2': [],
    'la-rosa-de-guadalupe-3': [],
    'la-rosa-de-guadalupe-4': [],
    'mujeres-sin-filtro': [],
    'reventonazo-de-la-chola': [],
    'serie-solamente-milagros': [],
    'tec': [],
    'tn-caer-en-tentacion': [],
    'tn-colorina': [],
    'tn-marimar': [],
    'tn-ojitos-hechiceros': [],
    'tn-privilegio-de-amar': [],
    'vbq': []
  };
  
  // seleccionando elementos deL DOM
  // variables seleccionadoras de los 4 campos de la vista RESERVE.js
  let verifyReservationBtn = $('#reservation-btn');
  let brand = $('input.autocomplete');
  let program = $('input.autocomplete-2');

  let dayOfWeek = $('#day');
  let selectHour = $('select#hour');
  let verifyBrand = false;
  // let verifyShow = false;
  let verifyDay = false;
  let verifyHour = false;
  

  let dataProgramPrice;  

  let scheduleProgram = [];

  // validacion de form de reserve html
  // autocompletado de MARCAS 
  $('input.autocomplete').autocomplete({
    data: {
      'BCP': 'http://www.smartvehicularbcp.com/Images/LogoBCP.png',
      'ACE': 'https://userscontent2.emaze.com/images/47441f6e-75d8-4a20-9e42-3285cc05e867/9acd7c622c0ca5962129034fa010fb3c.png',
      'Ariel': 'https://www.pg.com/es_LATAM/_images/content/multimedia/Logos_descargar/ariel.png',
      'BBVA': 'http://www.brandemia.org/wp-content/uploads/2011/02/logo_bbva.jpg',
      'Claro': 'https://vignette.wikia.nocookie.net/logopedia/images/7/73/Logo-claro-0.jpg/revision/latest?cb=20151229190721',
      'Coca-Cola': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Coca-Cola_bottle_cap.svg/1200px-Coca-Cola_bottle_cap.svg.png',
      'Gloria': 'http://www.staffcreativa.pe/blog/wp-content/uploads/leche-gloria-logo.jpg',
      'Inka-Cola': 'https://yt3.ggpht.com/a-/AJLlDp2TzrDpBTlk2OyCx9Ec5B12y02Qed__BZYVEw=s900-mo-c-c0xffffffff-rj-k-no',
      'Inkafarma': 'https://lh3.googleusercontent.com/2bczTWKVlN37r7JwI4n4xVOcoOYqUstEV4RSAhLmt5p7PCzMeHEYpcLQx3U4O-dQvhVo=s117',
      'Isil': 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/092010/isil_logo.jpg?itok=jO5_MAfo',
      'KFC': 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png',
      'Movistar': 'https://www.underconsideration.com/brandnew/archives/movistar_logo.png',
      'Pamer': 'http://expopostulante.com/img/GUIA-CENTROS-PREUNIVESITARIOS/PAMER/pamer2.jpg',
      'SISE': 'https://lh3.googleusercontent.com/UQnpxQc7nzc0Efe5CSCwrj-IV4q9MFvxrV0DTYgL3IPL0fesnX3bB6BhpwobS8sXok8Tog=s170',
      'Tai-Loy': 'https://mall-prod.spincorp.cl/uploads/stores/d95beb5f46f4a7d5127355b0e0c9ae56.jpg'
    },
    limit: 20, // The max amount of results that camérica-noticias be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
    // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

  // autocompletado de PROGRAMAS
  $('input.autocomplete-2').autocomplete({
    data: {
      'al-fondo-hay-sitio': 'http://www.ecuavisa.com/sites/default/files/imagenes/2012/03/21/20120321_fondo1.jpg',
      'america-deportes': 'https://pbs.twimg.com/profile_images/935210757926596609/3SKKg_M5_400x400.jpg',
      'amores-de-polo': 'http://cde.americatv.com.pe/minisites/los-amores-de-polo-360x227-330599.jpg',
      'an-edicion-central': 'https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85',
      'an-edicion-dominical': 'https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85',
      'an-edicion-mediodia': 'https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85',
      'an-edicion-sabado': 'https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85',
      'an-espectaculos': 'https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85',
      'an-matutino': 'https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85',
      'an-primera-edicion': 'https://lh3.googleusercontent.com/4IQ70pX3sF_yHbLa-hLFqx-To_IHtEmcDUix0-mEA9_NMC1XLbupOxoQa7H9ypfIspkFBsw=s85',
      'automundo': 'http://automundo.pe/wp-content/uploads/2016/12/AMcelebalcn.png',
      'butaca-matine': 'http://cde.americatv.com.pe/americlub-butaca-america-vota-tu-pela-favorita-noticia-67161-588x368-182236.jpg',
      'cinescape': 'https://1.bp.blogspot.com/-u0kv_J8StjU/WJYrZUbkhFI/AAAAAAAAICI/EivQsAQCexo7KYsT616NXbb9oeZn07-DgCLcB/s640/cinescape.jpg',
      'cuarto-poder': 'http://i.imgur.com/WF5Gk13.png',
      'cumbia-pop': 'https://vignette.wikia.nocookie.net/logopedia/images/a/a0/Cumbia_Pop_%28Logo%29.png/revision/latest?cb=20180103222511',
      'domingo-al-dia': 'https://lh3.googleusercontent.com/4c9k0_q83FT0_GUYGxFrHgDlYhlb-8BF57a5w9tV_2NYTjEwzMLjCX2t4dBiYEDivHtnAA=s85',
      'el-chavo-del-ocho': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/El_Chavo_Animado_-_logo.svg/1200px-El_Chavo_Animado_-_logo.svg.png',
      'en-boca-de-todos': 'https://lh3.googleusercontent.com/0XV4meukgTlBP2Weq9-gYYfBOb87AhN1ExW02KIAXYnuqNN35QxBzNP1O8xvCqM614IGoQ=s85',
      'estas-en-todas': 'https://pbs.twimg.com/profile_images/424559149414752257/2ylBQ4rj_400x400.png',
      'esto-es-guerra': 'http://www.360onlinemedia.com/votos/img/logo.png',
      'futbol-en-america': 'https://cde.tvgo.pe/minisites/gisela-busca-1140x577-333128.jpg',
      'gisela-busca-el-amor': 'https://cde.tvgo.pe/minisites/gisela-busca-1140x577-333128.jpg',
      'la-banda-del-chino': 'https://3.bp.blogspot.com/-R4d5MBKoDd4/WKKXqmmh_XI/AAAAAAAARPg/mdsgGvULzqkqjBnFMaFOSCuTCFnCwjRygCLcB/s1600/BANDA_DEL_CHINO.jpg',
      'la-previa': 'https://lh3.googleusercontent.com/3touUESJWYQ7udEN0oMLeYgFXeWS864hNktsqtUJi-ZJ9ArytlrwI9md3-_PddnB4Im5cw=s135',
      'la-rosa-de-guadalupe': 'http://static.lared.cl/wp-content/uploads/2014/03/la-rosa-de-guadalupe.jpg',
      'mujeres-sin-filtro': 'https://yt3.ggpht.com/a-/AJLlDp2gQWZcQkvywWYlmf73nEQpauDp0zZ2wI9m=s900-mo-c-c0xffffffff-rj-k-no',
      'reventonazo-de-la-chola': 'https://lh3.googleusercontent.com/DQMeN9_n8ttEOnTSjsf8CuoB0E9_UvzBhXhdim_xvnqEBYwjaH5HFzaZ5hXxgss961lb=s132',
      'serie-solamente-milagros': 'http://1.bp.blogspot.com/-sUmdYxgJeg0/TzbJDXDwPdI/AAAAAAAAAVE/hzo1I9A7aZU/s640/420798_211030012325805_211029732325833_404166_825470147_n.jpg',
      'tec': 'https://yt3.ggpht.com/a-/AK162_5AKWWYm8cev-C8ImaavdMjOxc9Zn0eTxYbiw=s900-mo-c-c0xffffffff-rj-k-no',
      'tn-caer-en-tentacion': 'https://i.imgur.com/2LEDqIG.jpg',
      'tn-colorina': 'http://www.miblogdecineytv.com/wp-content/uploads/2014/03/COLORINA.jpg',
      'tn-marimar': 'https://vignette.wikia.nocookie.net/telenovelas/images/2/2c/Marimar1.jpg/revision/latest?cb=20130127224736&path-prefix=es',
      'Telenovela ojitos hechiceros': 'https://cde.americatv.com.pe/minisites/ojitos-hechiceros-360x227-333023.jpg',
      'tn-privilegio-de-amar': 'https://upload.wikimedia.org/wikipedia/en/d/de/Epda.jpg',
      'vbq': 'https://seriesblanco.com/files/uploads/3288.jpg'
    },
    limit: 20, // The max amount of results that camérica-noticias be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
    // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

  // funcionalidad para extraer data a reserve al hacer click en un programa
  let getSchedule = (startTime, endTime) => {
    let minutes = 0;
    let hourStart = startTime[0];
    let hourEnd = endTime[0];
    minutes += 60 - startTime[1];
    minutes += ((hourEnd - hourStart) - 1) * 60 ;
    minutes += endTime[1];
    let sponsorTotal = minutes / 10;
    let counterSponsor = 0;
    for (let timeCounter = startTime[1] + 10; counterSponsor < sponsorTotal - 1; counterSponsor++) {
      if (timeCounter === 60) {
        timeCounter = 00;
        hourStart += 1;
      } else if (timeCounter > 60) {
        timeCounter = (timeCounter - 60);
        hourStart += 1;        
      }
      if (hourStart === 24) {
        hourStart = 00;
      }
      scheduleProgram.push(`${hourStart} : ${timeCounter}`);      
      timeCounter += 10;
    }
  };

  let showDataProgram = (schedule) => {
    let startTime = schedule[0];
    let endTime = schedule[1];
    let optionHour;

    getSchedule(startTime, endTime);
  
    selectHour.html('<option value="" disabled selected>Elige la hora</option>');
    scheduleProgram.forEach((element, index) => {
      optionHour += `<option value="${index}">${element}</option>`;
    });
    selectHour.append(optionHour);   
  };

  // funcionalidad de TARIFA 
  // let getDataProgram = (id) => {
  //   program.val(id);
  //   program.prop('disabled', 'disabled');

  // }
  // obtiene precio
  let rode;   
  let fee;
  let getPrice = (marca) => {
    marca = marca.toLowerCase();
    console.log(marca);
    var createDate = new Date(); 
    let timeOfTheDay = createDate.getHours();
    console.log(marcas[marca].precio);
    rode = (dataProgramPrice + marcas[marca].precio);    
    if (timeOfTheDay > 8 && timeOfTheDay <= 12) {
      fee = 0.00;
    } else if (timeOfTheDay > 12 && timeOfTheDay <= 16) {
      fee = (rode * 5 / 100);
    } else if (timeOfTheDay > 16 || timeOfTheDay <= 8) {
      fee = (rode * 15 / 100);
    }
    console.log(rode);
    console.log(fee);
  };


  // temina obtener monto
  function redirectReserve() {
    window.location.href = 'reserve.html';
  }

  let getDataProgram = (id) => {
    program.val(id);
    program.prop('disabled', 'disabled');

    let dataProgramSchedule = programas[id].horario;

    dataProgramPrice = programas[id].precio;
    
    showDataProgram(dataProgramSchedule);
    
    verifyShow = true;
  };

  let redirectViewReserve = (event) => {
    sessionStorage.idProgram = event.target.id;
    redirectReserve();
  };

  let programs = $('.click');
  [programs].forEach(program => {
    program.on('click', redirectViewReserve);
  });


  var diasSemana = new Array('Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo');
  var f = new Date();
  var day = f.getDay();

  let option = '';

  // for (var i = day; i < diasSemana.length; i++) {
  //   opction = ` <option value= "${i}">${diasSemana[i]}</option>`;
  //   // dayOfWeek.append(option);
  // }

  dayOfWeek.html('<option value= \'disabled selected\'>Elige el día</option>');

  for (var i = day; i < diasSemana.length; i++) {
    option = ` <option value= "${i}">${diasSemana[i]}</option>`;
    dayOfWeek.append(option);
  }

  let idsession = sessionStorage.idProgram;
  getDataProgram(idsession);

  // funciones de verify boton active
  function verifyBtnActive() {
    if (verifyBrand && verifyHour && verifyDay) {
      verifyReservationBtn.removeAttr('disabled');
    }
  }

  function verifyBtnInactive() {
    verifyReservationBtn.attr('disabled', true); 
  }

  // validando eleccion de la marca
  brand.on('change', inputBrandInput);

  function inputBrandInput() {
    console.log(marcas);
    console.log(Object.keys(marcas));
    if (brand.val()) {
      verifyBrand = true;
      verifyBtnActive();
    } else {
      verifyBrand = false;
      verifyBtnInactive();
    }
  }
  // $( "#myselect option:selected" ).text();

  // validando eleccion del día
  dayOfWeek.on('change', function() {
    console.log(dayOfWeek.val());
    if (dayOfWeek.val()) {
      verifyDay = true;
      verifyBtnActive();
    } else {
      verifyDay = false;
      verifyBtnInactive();
    }
  });

  // validando eleccion de la hora
  selectHour.on('change', function() {
    console.log(selectHour.val());
    if (selectHour.val()) {
      verifyHour = true;
      verifyBtnActive();
    } else {
      verifyHour = false;
      verifyBtnInactive();
    }
  });

  // modalt trigger
  $('#reservation-modal').modal();

  // redireccionamiento de boton a siguiente vista
  function redirectReserve() {
    window.location.href = 'reserve.html';
  }

  // agregandole evento de click al boton para abrir el modal
  verifyReservationBtn.on('click', triggerConfirmModal);

  function triggerConfirmModal() {
    let brandPrice = brand.val();
    getPrice(brandPrice);
    var dayOfReservation = $('#day option:selected').text();
    var timeOfReservation = $('select#hour option:selected').text();
    var confirmationModal = '';
    confirmationModal += `
    <div class="row center-align">
    <h4 class="font-color-2">Datos de Reserva</h4>    
    <div class="">
      <p class="font-color">Marca: <span id="mdmarca">${brand.val()}</span></h4>
      <p class="font-color">Programa: <span id="mdprogram">${program.val()}</span> </p>
        <p class="font-color">Fecha : <span id="mdday">${dayOfReservation}</span></p>
         <p class="font-color"> Hora: <span id="mdhour">${timeOfReservation}</span></h4>
         <p class="font-color"> Monto : $ <span>${rode}</span></p>
         <p class="font-color"> Recargo : $ <span id="mdrecargo">${fee}</span></p>
         </div>
         </div>
    `;
    $('.modal-content').html(confirmationModal);
  }

  $('#reservation-btn').on('click', function(e) {
    e.preventDefault();
  });
  $('#confirm').on('click', function() {
    let amount = rode + fee ;
    localStorage.amount = amount;
  });

  $(document).on('change', '#hour', function(event) {
    $('#hour option:selected').prop('disabled', 'disabled');
    $('#confirm').on('click', function() {
      sessionStorage.idHour = ($('#hour option:selected ').val());
    });
  });
});

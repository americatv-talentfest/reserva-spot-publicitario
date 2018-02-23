// Initialize Firebase
// var config = {
//   apiKey: 'AIzaSyAmérica-Noticiash-Nq_-W7F35owm6gFw3vH9f6p1AiHuw',
//   authDomain: 'américatv-246b8.firebaseapp.com',
//   databaseURL: 'https://américatv-246b8.firebaseio.com',
//   projectId: 'américatv-246b8',
//   storageBucket: 'américatv-246b8.appspot.com',
//   messagingSenderId: '716121533286'
// };
// firebase.initializeApp(config);

// Get a reference to the database service

$(document).ready(() => {
  // seleccionando elementos deL DOM
  let selectDay = $('slect#day');
  let selectHour = $('select#hour');
  let program = $('input#program');
  let price;  
  let schedulePrograma = [];

  // autocompletado de marcas 
  $('input.autocomplete').autocomplete({
    data: {
      'BCP': {
        'precio': 480
      },
      'ACE': {
        'precio': 410
      },
      'Ariel': {
        'precio': 410
      },
      'BBVA': {
        'precio': 480
      },
      'Claro': {
        'precio': 450
      },
      'Coca Cola': {
        'precio': 500
      },
      'Gloria': {
        'precio': 440
      },
      'Inka Cola': {
        'precio': 500
      },
      'Inkafarma': {
        'precio': 400
      },
      'Isil': {
        'precio': 400
      },
      'KFC': {
        'precio': 500
      },
      'Movistar': {
        'precio': 450
      },
      'Pamer': {
        'precio': 400
      },
      'SISE': {
        'precio': 410
      },
      'Tai Loy': {
        'precio': 430
      }
    },
    limit: 20, // The max amount of results that camérica-noticias be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
    // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });

  // autocompletado de programas

  $('input.autocomplete-2').autocomplete({
    data: {
      'Al fondo hay sitio': {
        'precio': 2000
      },
      'América deportes': {
        'precio': 500
      },
      'Amores de Polo': {
        'precio': 600
      },
      'América Noticias edición central': {
        'precio': 4000
      },
      'América Noticias edición dominical': {
        'precio': 3000
      },
      'América Noticias edición mediodia': {
        'precio': 2900
      },
      'América Noticias edición sabado': {
        'precio': 2900
      },
      'América Noticias espetaculos': {
        'precio': 2000
      },
      'América Noticias matutino': {
        'precio': 2000
      },
      'América Noticias primera-edicion': {
        'horario': [5.16, 9],
        'precio': 2500
      },
      'Automundo': {
        'precio': 2
      },
      'Butaca América': {
        'precio': 1800
      },
      'Cinescape': {
        'precio': 3300
      },
      'Cuarto Poder': {
        'precio': 3900
      },
      'Cumbia Pop': {
        'precio': 3100
      },
      'Domingo al día': {
        'precio': 2900
      },
      'El chavo del ocho': {
        'precio': 1500
      },
      'En boca de todos': {
        'precio': 3400
      },
      'Estás en todas': {
        'precio': 2800
      },
      'Esto es guerra': {
        'precio': 4000
      },
      'Fútbol en América': {
        'precio': 3500
      },
      'Gisela busca el amor': {
        'precio': 2100
      },
      'La banda del chino': {
        'precio': 3700
      },
      'La previa': {
        'precio': 2600
      },
      'La rosa de Guadalupe': {
        'precio': 2000
      },
      'Mujeres sin filtro': {
        'precio': 2100
      },
      'Reventonazo de la Chola': {
        'precio': 2600
      },
      'Serie solamente Milagros': {
        'precio': 900
      },
      'TEC': {
        'precio': 3400
      },
      'Telenovela caer en tentación': {
        'precio': 700
      },
      'Telenovela Colorina': {
        'precio': 4000
      },
      'Telenovela Marimar': {
        'precio': 700
      },
      'Telenovela ojitos hechiceros': {
        'precio': 3900
      },
      'Telenovela privilegio de amar': {
        'precio': 800
      },
      'Ven baile quinceañera': {
        'precio': 3900
      }
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
    let counterSponsor;
    for (let timeCounter = startTime[1]; counterSponsor < sponsorTotal; counterSponsor++) {
      if (timeCounter === 60) {
        timeCounter = 00;
        hourCounter += 1;
      } else if (counterSponsor > 60) {
        timeCounter = (timeCounter - 60);
        hourCounter += 1;        
      }
      schedulePrograma.push(`${hourStart} : ${timeCounter}`);      
      timeCounter += 10;
    }
    schedulePrograma.push(`${hourStart}:${timeCounter + 10}`);
  };

  let showPrice = (price) => {
    
  };

  let showDataProgram = (schedule, price, name) => {
    let startTime = schedule[0];
    let endTime = schedule[1];
    getSchedule(startTime, endTime);

  };

  function redirectReserve() {
    window.location.href = 'reserve.html';
  }

  let getDataProgram = (id) => {
    let dataProgramSchedule = firebase.database().ref('programas/' + id + '/horario');
    let dataProgramPrice = firebase.database().ref('programas/' + id + '/precio');
    // let dataProgramName = firebase.database().ref('programas/' + id + '/name');    
    let schedule;
    dataProgramSchedule.on('value', function(snapshot) {
      schedule = snapshot.val();
    });

    dataProgramPrice.on('value', function(snapshot) {
      price = snapshot.val();
    });

    showDataProgram(schedule, price);
    // redirectReserve();
  };

  let redirectViewReserve = (event) => {
    let idProgram = event.target.id;
    getDataProgram(idProgram);
    // window.location.href('reserve.html');
  };

  let programs = $('.click');
  [programs].forEach(program => {
    program.on('click', redirectViewReserve);
  });
});
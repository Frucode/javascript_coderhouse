"use strict";

/* ======== Character Sheet =========*/
function Character(nombre, apellido, edad, sexo, raza, historia) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.sexo = sexo;
  this.raza = raza;
  this.historia = historia;
}

function statsCharacter(characterStr, characterDex, characterInt, characterCon, characterStm, characterLck) {
  this.characterStr = characterStr;
  this.characterDex = characterDex;
  this.characterInt = characterInt;
  this.characterCon = characterCon;
  this.characterStm = characterStm;
  this.characterLck = characterLck;
}

var elParty = [];

function crear() {
  var nombreCrear = document.getElementById("nombre").value;
  var apellidoCrear = document.getElementById("apellido").value;
  var edadCrear = document.getElementById("edad").value;
  var sexoCrear = document.getElementById("sexo").value;
  var razaCrear = document.getElementById("raza").value;
  var historiaCrear = document.getElementById("historia").value;
  newCharacterSheet = new Character(nombreCrear, apellidoCrear, edadCrear, sexoCrear, razaCrear, historiaCrear);
  add(newCharacterSheet);
  misStats();
}

crear();

function add(character) {
  elParty.push(character);
  console.log(elParty);
}

var stats = {
  str: 1,
  dex: 1,
  "int": 1,
  con: 1,
  stm: 1,
  lck: 1
};

function misStats() {
  for (var _i = 0, _elParty = elParty; _i < _elParty.length; _i++) {
    var character = _elParty[_i];
    console.log(character);

    if (character.raza.toUpperCase() == "ORCO") {
      var frz = stats.str + 10;
      var agl = stats.dex + 6;
      var inl = stats["int"] + 4;
      var con = stats.con + 8;
      var etm = stats.stm + 9;
      var srt = stats.lck + 3;
      newCharacterStats = new statsCharacter(frz, agl, inl, con, etm, srt);
      console.log(newCharacterStats);
      presentacionCharacter();
      datosDelJugador();
    }

    if (character.raza.toUpperCase() == "ELFO") {
      var frz = stats.str + 6;
      var agl = stats.dex + 10;
      var inl = stats["int"] + 8;
      var con = stats.con + 5;
      var etm = stats.stm + 7;
      var srt = stats.lck + 3;
      newCharacterStats = new statsCharacter(frz, agl, inl, con, etm, srt);
      console.log(newCharacterStats);
      presentacionCharacter();
      datosDelJugador();
    }

    if (character.raza.toUpperCase() == "HUMANO") {
      var frz = stats.str + 7;
      var agl = stats.dex + 7;
      var inl = stats["int"] + 6;
      var con = stats.con + 7;
      var etm = stats.stm + 8;
      var srt = stats.lck + 5;
      newCharacterStats = new statsCharacter(frz, agl, inl, con, etm, srt);
      console.log(newCharacterStats);
      presentacionCharacter();
      datosDelJugador();
    }

    if (character.raza.toUpperCase() == "ENANO") {
      var frz = stats.str + 8;
      var agl = stats.dex + 4;
      var inl = stats["int"] + 5;
      var con = stats.con + 10;
      var etm = stats.stm + 7;
      var srt = stats.lck + 3;
      newCharacterStats = new statsCharacter(frz, agl, inl, con, etm, srt);
      console.log(newCharacterStats.str);
      presentacionCharacter();
      datosDelJugador();
    } else {
      console.log("Esa raza no existe");
    }
  }
} //Agrega los datos del jugador a la section 'stats'


function datosDelJugador() {
  document.getElementById("stats").innerHTML += '<h3>Character Sheet</h3>';
  document.getElementById("stats").innerHTML += "<p>Bienvenido, ".concat(newCharacterSheet.nombre, " tus stats son los siguientes:</p>");
  document.getElementById("stats").innerHTML += "<p>Fuerza:       ".concat(newCharacterStats.characterStr, "</p>");
  document.getElementById("stats").innerHTML += "<p>Agilidad:     ".concat(newCharacterStats.characterDex, "</p>");
  document.getElementById("stats").innerHTML += "<p>Inteligencia: ".concat(newCharacterStats.characterInt, "</p>");
  document.getElementById("stats").innerHTML += "<p>Constituci\xF3n: ".concat(newCharacterStats.characterCon, "</p>");
  document.getElementById("stats").innerHTML += "<p>Estamina:     ".concat(newCharacterStats.characterStm, "</p>");
  document.getElementById("stats").innerHTML += "<p>Suerte:       ".concat(newCharacterStats.characterLck, "</p>");
}

function presentacionCharacter() {
  alert("Bienvenido a Errepegia, ".concat(newCharacterSheet.nombre, " aqu\xED vas a morir de maneras horribles y reviviras para morir otra vez, pero hey lo haras con amigos."));
}
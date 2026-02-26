const prompt = require("prompt-sync")();

function stampaCampo() {
  for (var riga = 0; riga < righe; riga++) {
    var rigaStr = "";
    for (var colonna = 0; colonna < colonne; colonna++) {
      if (navicella.riga === riga && navicella.colonna === colonna) {
        rigaStr += "N";
      } else if (
        alieni.some(
          (alieno) => alieno.riga === riga && alieno.colonna === colonna
        )
      ) {
        rigaStr += "A";
      } else if (
        proiettili.some(
          (proiettile) =>
            proiettile.riga === riga && proiettile.colonna === colonna
        )
      ) {
        rigaStr += "|";
      } else {
        rigaStr += ".";
      }
    }
    console.log(rigaStr);
  }
}

var colonne = 3;
var righe = 9;
var navicella = {
  riga: 0,
  colonna: 1,
};
var alieni = [
  { riga: 8, colonna: 0 },
  { riga: 8, colonna: 1 },
  { riga: 8, colonna: 2 },
  { riga: 7, colonna: 0 },
  { riga: 7, colonna: 1 },
  { riga: 7, colonna: 2 },
  { riga: 6, colonna: 0 },
  { riga: 6, colonna: 1 },
  { riga: 6, colonna: 2 },
];
var proiettili = [];
var stampaCampo = () => {
  for (var riga = righe - 1; riga >= 0; riga--) {
    var rigaDastampare = "";

    for (var colonna = 0; colonna <= colonne - 1; colonne++) {
      if (navicella.riga === riga && navicella.colonna === colonna) {
        rigaDastampare += "N";
      } else if (mostri[0].riga === riga && mostri[0].colonna === colonna) {
        rigaDastampare += "N";
      } else if (mostri[1].riga === riga && mostri[1].colonna === colonna) {
        rigaDastampare += "N";
      } else if (mostri[2].riga === riga && mostri[2].colonna === colonna) {
        rigaDastampare += "N";
      } else if (mostri[3].riga === riga && mostri[3].colonna === colonna) {
        rigaDastampare += "N";
      } else if (mostri[4].riga === riga && mostri[4].colonna === colonna) {
        rigaDastampare += "N";
      } else if (mostri[5].riga === riga && mostri[5].colonna === colonna) {
        rigaDastampare += "N";
      } else if (mostri[6].riga === riga && mostri[6].colonna === colonna) {
        rigaDastampare += "N";
      } else if (mostri[7].riga === riga && mostri[7].colonna === colonna) {
        rigaDastampare += "N";
      } else if (mostri[8].riga === riga && mostri[8].colonna === colonna) {
        rigaDastampare += "N";
      } else {
        rigaDastampare += "";
      }
    }
  }
  stampaCampo();

  while (alieni.length > 0) {
    var scelta = prompt(
      "\nscegli un azione : 1) sposta a sinistra, \n 2) sposta a destra, \n 3) spara , 4) nulla "
    );

    switch (scelta) {
      case "1":
        if (navicella.colonna > 0) {
          navicella.colonna--;
        }
        break;
      case "2":
        if (navicella.colonna < colonne - 1) {
          navicella.colonna++;
        }
        break;
      case "3":
        proiettili.push({
          riga: navicella.riga - 1,
          colonna: navicella.colonna,
        });
        break;
      case "4":
        break;
      default:
        console.log("scelta non valida");
    }
  }
};

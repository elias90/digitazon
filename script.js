console.log("LEVEL: EASY");

/**
 * ESERCIZIO 1
 * */

{
  console.log("\n SIMULAZIONE JS ---------- ESERCIZIO 1");

  let persons = [
    {
      nome: "Lionel",
      cognome: "Messi",
      eta: "37",
    },
    {
      nome: "Cristiano",
      cognome: "Ronaldo",
      eta: "39",
    },
    {
      nome: "Erling",
      cognome: "Haaland",
      eta: "22",
    },
    {
      nome: "Kylian",
      cognome: "Mbappé",
      eta: "24",
    },
    {
      nome: "Kevin",
      cognome: "De Bruyne",
      eta: "28",
    },
    {
      nome: "Karim",
      cognome: "Benzema",
      eta: "35",
    },
  ];

  function peronsPlus30(array) {
    return persons.filter((el) => el.eta > 30);
  }
  // console.log(peronsPlus30(persons)); // stampa il nuovo array con dentro gli oggetti
  // peronsPlus30(persons).forEach((el) => console.log(el)); // stampa gli oggetti uno per uno del nuovo array
  peronsPlus30(persons).forEach((el, i) =>
    console.log(
      `${i + 1}° con più di 30 anni - ${el.nome} ${el.cognome} e ha ${
        el.eta
      } anni.`
    )
  );
}

/**
 * ESERCIZIO 2
 * */

{
  console.log("\n \n SIMULAZIONE JS ---------- ESERCIZIO 2");

  let array1 = [1, 3, 4, 5];
  let array2 = [6, 7, 8, 9];
  let array3 = [10, 11, 12, 13];

  function moltiplicaArray(el, n) {
    return el * n;
  }

  console.log(
    `Il risultato della prima operazione è: ` +
      array1.map((el) => moltiplicaArray(el, 2))
  );
  console.log(
    `Il risultato della seconda operazione è: ` +
      array2.map((el) => moltiplicaArray(el, 3))
  );
  console.log(
    `Il risultato della terza operazione è: ` +
      array3.map((el) => moltiplicaArray(el, 4))
  );
}

/**
 * ESERCIZIO 3
 * */

{
  console.log("\n \n SIMULAZIONE JS ---------- ESERCIZIO 3");

  const set1 = new Set([1, 2, 3, 4, 5]);
  const set2 = new Set([4, 2, 8, 9, 5]);

  function unisciSet(set1, set2) {
    const newSet = new Set([]);

    set1.forEach((el) => newSet.add(el));
    set2.forEach((el) => (newSet.has(el) ? el : newSet.add(el)));

    return newSet;
  }

  console.log(unisciSet(set1, set2));
}

/**
 * ESERCIZIO 4
 * */

{
  console.log("\n \n SIMULAZIONE JS ---------- ESERCIZIO 4");

  let obj1 = {
    nome: "Mario Rossi",
    rate: 90,
  };

  let obj2 = {
    nome: "Roberto Bianchi",
    rate: 11,
  };

  let obj3 = {
    nome: "Carlo Verdi",
    rate: 10,
  };

  let obj4 = {
    nome: "Stefano Marroni",
  };

  function salutaPersona(obj) {
    if (obj.rate) {
      console.log(
        obj.rate >= 0 && obj.rate <= 10
          ? `${obj.nome} ha un rate basso`
          : obj.rate >= 11 && obj.rate <= 50
          ? `${obj.nome} ha un rate medio`
          : `${obj.nome} ha un rate alto`
      );
    } else {
      console.log(`${obj.nome} non ha nessun rate`);
    }
  }

  salutaPersona(obj1);
  salutaPersona(obj2);
  salutaPersona(obj3);
  salutaPersona(obj4);
}

/**
 *
 *
 *
 * LEVEL MEDIUM
 *
 *
 */

console.log("\n \n \n");

console.log("LEVEL: MEDIUM");

/**
 * ESERCIZIO 1
 * */

{
  console.log("\n SIMULAZIONE JS ---------- ESERCIZIO 1");

  const obj1 = {
    date: "2023-03-10",
  };

  const obj2 = {
    date: "2023-05-10",
  };

  const obj3 = {
    date: "2023-01-10",
  };

  function calcolaGiorni(obj1, obj2) {
    date1 = new Date(obj1.date).getTime();
    date2 = new Date(obj2.date).getTime();
    datesDifference = "";
    oneday = 24 * 60 * 60 * 1000;
    try {
      if (date1 > date2)
        throw "La seconda data inserita non sussegue la prima, riprova!";
      console.log(
        "La differenza tra le due date inserite è di " +
          (datesDifference = (date2 - date1) / oneday) +
          " giorni"
      );
    } catch (err) {
      console.log(err);
    }
  }
  calcolaGiorni(obj1, obj2);
  calcolaGiorni(obj2, obj3);
  calcolaGiorni(obj1, obj3);
}

/**
 * ESERCIZIO 2
 * */

{
  console.log("\n SIMULAZIONE JS ---------- ESERCIZIO 2");

  const o1 = { nome: "mario", cognome: "rossi" };
  const o2 = { nome: "mario", cognome: "rossi" };
  const o3 = { nome: "stefano", cognome: "marino" };
  const o4 = { x: 10, y: 20 };
  let result = true;

  function confrontaOggetti(obj1, obj2) {
    let arrObj1 = [];
    let arrObj2 = [];

    function pushToArray(obj, objArray) {
      for (let el in obj) {
        objArray.push(obj[el]);
      }
    }

    pushToArray(obj1, arrObj1);
    pushToArray(obj2, arrObj2);

    // for (var i = 0; i < arrObj1.length; ++i) {
    //   if (arrObj1[i] == arrObj2[i]) return (result = true);
    // }

    return arrObj1.every((val, i) => val === arrObj2[i]); // è true se il confronto tra tutti i valori degli array coincide
  }
  console.log(confrontaOggetti(o1, o2));
  console.log(confrontaOggetti(o3, o4));
}

/**
 * ESERCIZIO 3
 * */

{
  console.log("\n SIMULAZIONE JS ---------- ESERCIZIO 3");

  const arr1 = [10, 20, 30];
  const arr2 = [12, 22, 33];

  function somma(array) {
    return array.map((el) => el + 10);
  }

  function raddoppia(array) {
    return array.map((el) => el * 2);
  }

  function mappaNumeri(array, fn) {
    result = fn(array);
    console.log(result);
  }

  mappaNumeri(arr1, somma);
  mappaNumeri(arr1, raddoppia);
}

console.log("\n \n \n");

console.log("LEVEL: HARD");

/**
 * ESERCIZIO 1
 * */

{
  console.log("\n SIMULAZIONE JS ---------- ESERCIZIO 1");

  const json = `
  [
  {"name": "aladddin", "rate": [5,6,7], "birthdate": "1990-10-10"},
  {"name": "jasmine", "rate": [8,9,9], "birthdate": "1994-09-09"},
  {"name": "richard", "rate": [8,9,9], "birthdate": "1992-09-02"},
  {"name": "abu", "rate": [2,2,3], "birthdate": "1993-10-20"},
  {"name": "mina", "rate": [2,2,3], "birthdate": "1990-10-20"}
]`;

  const arrayJson = JSON.parse(json);
  console.log(arrayJson);

  /* FUNZIONE PRINT PERSON */
  function printPerson(obj) {
    let currentYear = new Date().getFullYear();
    console.log(
      `Nome: ${obj.name}, Rating: ${parseInt(calcRate(obj.rate))}, Age: ${
        currentYear - new Date(obj.birthdate).getFullYear()
      }`
    );
  }
  /* CALCOLA RATE */
  function calcRate(arr) {
    let tot = 0;
    arr.forEach((el) => {
      tot += el;
    });
    return tot / arr.length;
  }

  function dammiPersonaggio(array, string) {
    /* FUNZIONE CICLA */
    function cicla(array) {
      array.forEach((el) => {
        printPerson(el);
      });
    }
    /* FUNZIONE GIOVANE */
    function younger(array) {
      let younger = array[0];
      array.forEach((el) => {
        new Date(younger.birthdate).getTime() > new Date(el.birthdate).getTime()
          ? (younger = younger)
          : (younger = el);
      });
      printPerson(younger);
    }
    /* FUNZIONE MIGLIORE */
    function best(array) {
      let migliore = array[0];
      let arrayMigliore = [];
      array.forEach((el) => {
        if (calcRate(el.rate) >= calcRate(migliore.rate)) {
          migliore = el;
        }
      });

      arrayMigliore = array.filter(
        (el) => calcRate(el.rate) == calcRate(migliore.rate)
      );

      arrayMigliore.forEach((el) => printPerson(el));
    }

    /* FUNZIONE PEGGIORE */
    function worse(array) {
      //   let worse = array[0];
      //   array.forEach((el) => {
      //     calcRate(worse.rate) > calcRate(el.rate) ? (worse = el) : worse;
      //   });
      //   printPerson(worse);

      let worse = array[0];
      let arrayPeggiore = [];
      array.forEach((el) => {
        if (calcRate(el.rate) <= calcRate(worse.rate)) {
          worse = el;
        }
      });

      arrayPeggiore = array.filter(
        (el) => calcRate(el.rate) == calcRate(worse.rate)
      );

      arrayPeggiore.forEach((el) => printPerson(el));
    }

    try {
      if (typeof string !== "string") throw "Non hai inserito una stringa";
      if (string == "cicla") cicla(array);
      if (string == "giovane") younger(array);
      if (string == "best") best(array);
      if (string == "worse") worse(array);
      if (
        string != "cicla" &&
        string != "giovane" &&
        string != "best" &&
        string != "worse"
      )
        throw "Non hai inserito un parametro corretto";
    } catch (error) {
      console.log(error);
    }
  }
  console.log("\n  CICLA:");
  dammiPersonaggio(arrayJson, "cicla");
  console.log("\n IL PIU GIOVANE:");
  dammiPersonaggio(arrayJson, "giovane");
  console.log("\n IL MIGLIORE");
  dammiPersonaggio(arrayJson, "best");
  console.log("\n IL PEGGIORE");
  dammiPersonaggio(arrayJson, "worse");
  console.log("\n ERRORE");
  dammiPersonaggio(arrayJson, 2);
  console.log("\n ALTRA STRINGA");
  dammiPersonaggio(arrayJson, "bellooo");
}

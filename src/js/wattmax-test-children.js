// Watt max test for børn
 function CalculateBTW(thisform) {
     Wmax = thisform.Wmax.value;
     Sek = thisform.Sek.value;
     Vaegt = thisform.Vaegt.value;
     resultat = Math.round((13.16 * (Wmax - 25 + (25 * Sek / 180)) + 5 * Vaegt) / Vaegt * Math.pow(10, 1)) / Math.pow(10, 1)
     resultat2 = Math.round((13.16 * (Wmax - 25 + (25 * Sek / 180)) + 5 * Vaegt) / 1000 * Math.pow(10, 2)) / Math.pow(10, 2)
     thisform.Kondital.value = resultat
     thisform.Iltoptag.value = resultat2
     return false;
 }
 
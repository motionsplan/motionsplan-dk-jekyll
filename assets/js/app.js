 function CalculateS(thisform) {
     Min = thisform.Min.value;
     Sek = thisform.Sek.value;
     Puls = thisform.Puls.value;
     Koen = thisform.Koen.value;
     Alder = thisform.Alder.value;
     Vaegt = thisform.Vaegt.value;
     Tid = Min * 60 + Sek * 1
     resultat = Math.round((6.9652 + (0.020062 * Vaegt) - (0.0257 * Alder) + (0.5955 * Koen) - (0.003754 * Tid) - (0.0115 * Puls)) * Math.pow(10, 1)) / Math.pow(10, 1)
     resultat2 = Math.round((resultat / Vaegt * 1000) * Math.pow(10, 2)) / Math.pow(10, 2)
     thisform.Iltoptag.value = resultat
     thisform.Kondital.value = resultat2
     return false;
 }

// Ligner Wattmax test, men ikke samme resultater
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

/**
 * Calculate Cooper Clinic Mortality Risk Index for Men
 */
/*
 function CalculateBDD(thisform) {
     Alder = thisform.Alder.value * 1;
     Hvilepuls = thisform.Hvilepuls.value * 1;
     Blodtryk = thisform.Blodtryk.value * 1;
     Sukkersyge = thisform.Sukkersyge.value * 1;
     Ryger = thisform.Ryger.value * 1;
     Bmi = thisform.Bmi.value * 1;
     Kondital = thisform.Kondital.value * 1;
     if (Alder == -1) {
         alderpoint = 0;
     }
     else {
         alderpoint = Alder;
     }
     point = alderpoint + Hvilepuls + Blodtryk + Sukkersyge + Ryger + Bmi + Kondital;
     if (point == 0) {
         risk = 1.8;
     }
     else if (point == 1) {
         risk = 2.2;
     }
     else if (point == 2) {
         risk = 2.6;
     }
     else if (point == 3) {
         risk = 3.1;
     }
     else if (point == 4) {
         risk = 3.7;
     }
     else if (point == 5) {
         risk = 4.4;
     }
     else if (point == 6) {
         risk = 5.4;
     }
     else if (point == 7) {
         risk = 6.5;
     }
     else if (point == 8) {
         risk = 7.9;
     }
     else if (point == 9) {
         risk = 9.7;
     }
     else if (point == 10) {
         risk = 11.8;
     }
     else if (point == 11) {
         risk = 14;
     }
     else if (point == 12) {
         risk = 16.5;
     }
     else if (point == 13) {
         risk = 20.4;
     }
     else if (point == 14) {
         risk = 23.2;
     }
     else if (point == 15) {
         risk = 28.1;
     }
     else if (point == 16) {
         risk = 32.1;
     }
     else {
         risk = 46.7;
     }
     if (Alder == -1) {
         risk2 = risk / 2.4;
     }
     else if (Alder == 0) {
         risk2 = risk / 2.6;
     }
     else if (Alder == 3) {
         risk2 = risk / 4.6;
     }
     else if (Alder == 6) {
         risk2 = risk / 8.2;
     }
     else if (Alder == 8) {
         risk2 = risk / 12.6;
     }
     else if (Alder == 9) {
         risk2 = risk / 16.1;
     }
     else {
         risk2 = risk / 18.1;
     }
     risk3 = Math.round((risk2) * Math.pow(10, 1)) / Math.pow(10, 1)
     thisform.Risikopoint.value = point
     thisform.Risiko1.value = risk
     thisform.Risiko2.value = risk3
     return false;
 }
*/
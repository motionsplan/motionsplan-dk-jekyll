let motionsplan = {};

motionsplan.Treadmill = function(gradient, speed, time, distance, weight) {

  function getMets() {

      let x = gradient; // gradient
      let y = speed; // speed
      let z = time; // time
      let d = distance; // distance
      let m = weight; // weight
  
      y=y;
      y_00=y/1.61;
      d=d;
      d_00=d/1.61;
      m=m;m_00=m/0.454;
      
      if ((y == 0) && (z != 0)){
        y=d/z*60;
        y_00=y/1.61;
      } //y...v(km/h)
      if ((z == 0) && (y != 0)){
        z=d/y*60;
      } //z...time(min)
      if (d == 0){
        d=y*z/60;
        d_00=d/1.61;
      } //d...distance(km)
      
      y0=y+y*x*9/200;
      ymp0=y_00+y_00*x*9/200;
      
      z0=z;
      d0=y0*z/60;
      dm0=ymp0*z/60;
      
      cal=(y0*1000/60+17.5)*z*m/1000;
      fat=cal/7/2;
      fatoz=fat/28.3495;
      mets=cal/m/z*60;
      return mets;
  }

  function calc(){

    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;m_00=m/0.454;
    
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    
    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;
    
    cal=(y0*1000/60+17.5)*z*m/1000;
    fat=cal/7/2;
    fatoz=fat/28.3495;
    mets=cal/m/z*60;
    kj=4.184*cal;
    kw=kj/3600;
    stb=60*kw;
    dnk=kw*10;
    rice=cal/252;
    beer=cal/203;
    shop=cal/2.5;
    clean=cal/3.8;
    
    cburger=cal/310;
    beer2=cal/153.1;
    cleanning=cal/1.59/m_00*60;
    
    s100=360/y0;  		//100m for sec
    
    m10k=Math.floor(600/y0);		//10K for min
    s10k=((600/y0)-m10k)*60;
    
    
    m21k=21.095*60/y0;	//Half for min
    
    m21kh=Math.floor(m21k/60);
    m21km=Math.floor(m21k-m21kh*60);
    m21ks=((m21k-m21kh*60)-m21km)*60;
    
    m42k=42.195*60/y0;	//Full for min
    m42kh=Math.floor(m42k/60);
    m42km=Math.floor(m42k-m42kh*60);
    m42ks=((m42k-m42kh*60)-m42km)*60;
    myrecord=m42k/60;
    //alert(myrecord);
    record=2.0275/myrecord*100; //record 2:01:39 
  }

  function getKwh() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    
    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;

    cal=(y0*1000/60+17.5)*z*m/1000;
    fat=cal/7/2;
    fatoz=fat/28.3495;
    mets=cal/m/z*60;
    kj=4.184*cal;
    kw=kj/3600;
    return kw;
  }

  function getKj() {
      let x = gradient; // gradient
      let y = speed; // speed
      let z = time; // time
      let d = distance; // distance
      let m = weight; // weight
  
      y=y;
      y_00=y/1.61;
      d=d;
      d_00=d/1.61;
      m=m;
      m_00=m/0.454;
      if ((y == 0) && (z != 0)){
        y=d/z*60;
        y_00=y/1.61;
      } //y...v(km/h)
      if ((z == 0) && (y != 0)){
        z=d/y*60;
      } //z...time(min)
      if (d == 0){
        d=y*z/60;
        d_00=d/1.61;
      } //d...distance(km)
      
      
      y0=y+y*x*9/200;
      ymp0=y_00+y_00*x*9/200;
      
      z0=z;
      d0=y0*z/60;
      dm0=ymp0*z/60;
  
      cal=(y0*1000/60+17.5)*z*m/1000;
      fat=cal/7/2;
      fatoz=fat/28.3495;
      mets=cal/m/z*60;
      kj=4.184*cal;
      return kj;
      kw=kj/3600;
  }

  function getGradientCorrectedDistance() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;
    return d0;
  }

  function getGradientCorrectedSpeed() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    
    return y0;

    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;

    cal=(y0*1000/60+17.5)*z*m/1000;
    return cal;
    fat=cal/7/2;
    fatoz=fat/28.3495;
    mets=cal/m/z*60;
    kj=4.184*cal;
    kw=kj/3600;
    stb=60*kw;
    dnk=kw*10;
    rice=cal/252;
    beer=cal/203;
    shop=cal/2.5;
    clean=cal/3.8;
    
    cburger=cal/310;
    beer2=cal/153.1;
    cleanning=cal/1.59/m_00*60;
    
    s100=360/y0;  		//100m for sec
    
    m10k=Math.floor(600/y0);		//10K for min
    s10k=((600/y0)-m10k)*60;
    
    
    m21k=21.095*60/y0;	//Half for min
    
    m21kh=Math.floor(m21k/60);
    m21km=Math.floor(m21k-m21kh*60);
    m21ks=((m21k-m21kh*60)-m21km)*60;
    
    m42k=42.195*60/y0;	//Full for min
    m42kh=Math.floor(m42k/60);
    m42km=Math.floor(m42k-m42kh*60);
    m42ks=((m42k-m42kh*60)-m42km)*60;
    myrecord=m42k/60;
    //alert(myrecord);
    record=2.0275/myrecord*100; //record 2:01:39 
  }

  function getTime() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    return z;
  }

  function getDistance() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    return d;
  }

  function getSpeed() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    return y;
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    
    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;

    cal=(y0*1000/60+17.5)*z*m/1000;
    return cal;
  }

  function getKcal() {
    let x = gradient; // gradient
    let y = speed; // speed
    let z = time; // time
    let d = distance; // distance
    let m = weight; // weight

    y=y;
    y_00=y/1.61;
    d=d;
    d_00=d/1.61;
    m=m;
    m_00=m/0.454;
    if ((y == 0) && (z != 0)){
      y=d/z*60;
      y_00=y/1.61;
    } //y...v(km/h)
    if ((z == 0) && (y != 0)){
      z=d/y*60;
    } //z...time(min)
    if (d == 0){
      d=y*z/60;
      d_00=d/1.61;
    } //d...distance(km)
    
    
    y0=y+y*x*9/200;
    ymp0=y_00+y_00*x*9/200;
    
    z0=z;
    d0=y0*z/60;
    dm0=ymp0*z/60;

    cal=(y0*1000/60+17.5)*z*m/1000;
    return cal;
    fat=cal/7/2;
    fatoz=fat/28.3495;
    mets=cal/m/z*60;
    kj=4.184*cal;
    kw=kj/3600;
    stb=60*kw;
    dnk=kw*10;
    rice=cal/252;
    beer=cal/203;
    shop=cal/2.5;
    clean=cal/3.8;
    
    cburger=cal/310;
    beer2=cal/153.1;
    cleanning=cal/1.59/m_00*60;
    
    s100=360/y0;  		//100m for sec
    
    m10k=Math.floor(600/y0);		//10K for min
    s10k=((600/y0)-m10k)*60;
    
    
    m21k=21.095*60/y0;	//Half for min
    
    m21kh=Math.floor(m21k/60);
    m21km=Math.floor(m21k-m21kh*60);
    m21ks=((m21k-m21kh*60)-m21km)*60;
    
    m42k=42.195*60/y0;	//Full for min
    m42kh=Math.floor(m42k/60);
    m42km=Math.floor(m42k-m42kh*60);
    m42ks=((m42k-m42kh*60)-m42km)*60;
    myrecord=m42k/60;
    //alert(myrecord);
    record=2.0275/myrecord*100; //record 2:01:39 
  }

  let publicAPI = {
    getKcal : getKcal,
    getMets : getMets,
    getKj : getKj,
    getKwh : getKwh,
    getTime : getTime,
    getSpeed : getSpeed,
    getDistance : getDistance,
    getGradientCorrectedDistance : getGradientCorrectedDistance,
    getGradientCorrectedSpeed : getGradientCorrectedSpeed
  };

  return publicAPI;
}

module.exports = motionsplan;

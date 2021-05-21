function convertFahrToCelsius(fahr){
    var celsius;
    var fahr;
    if (isNaN(fahr)){
        if(Array.isArray(fahr)){
            console.log(JSON.stringify(fahr)+ " is not a valid number but a/an array");
        } else if(typeof(fahr)=='object'){
            console.log(JSON.stringify(fahr)+ " is not a valid number but a/an object");
        }else {
            console.log(fahr + " is not a valid number but a/an " + typeof(fahr));
        }
      return fahr;
    }
     else {
        celsius=((fahr-32)*5/9);
        console.log(celsius.toFixed(4));
        return celsius;
    }
}
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});






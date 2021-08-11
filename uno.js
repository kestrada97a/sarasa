function mostrar()
{
  {

  let seguir;
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  ////a/////
  let promedioEdadReptiles=0;
  let edadReptiles=0;
  /////b/////
  let edadJoven = 0;
  let tipoJoven;
  let sexoJoven;
  let flagJoven=1;
  ////c y d//////
  let contadorAve=0;
  let totalMascotas=0;
  let contadorMamifero=0;
  let contadorReptil=0;
  let porcentajeAves=0;

  do 
  { 
    nombre = prompt("ingrese nombre de mascota: ");
    while(!(nombre.length >= 3 && nombre.length <= 8))
    {
      nombre = prompt("error, reingrese el nombre (3 a 10 caracteres): ");
    }
    tipo = prompt("ingrese el tipo de la mascota (mamifero/ave/reptil): ");
    while (tipo != "mamifero" && tipo != "ave" && tipo != "reptil")
    {
      tipo = prompt("error, ingrese tipo valido (mamifero/ave/reptil)");
    }
    if (tipo == "reptil")
    {
      alert ("debido a que es un reptil, el tipo de sangre solo puede ser fria");
      sangre = "fria";
    }
    else
    {
      sangre = prompt("ingrese tipo de sangre (fria/calida) ");
    
      while (sangre != "fria" && sangre != "calida")
      {
        sangre = prompt("error, ingrese tipo de sangre valido (fria/calida)");
      }
    }
    edad = parseInt(prompt("ingrese edad: "));
      while (isNaN(edad) || edad == 0)
      {
        edad = parseInt(prompt("error, ingrese edad valida"));
      }

      sexo = prompt("ingrese sexo macho o hembra (m/h): ");
      while (sexo != 'm' && sexo != 'h')
      {
        sexo = prompt("error, ingrese sexo valido (m/h)");
      }
    
      switch (tipo)
      {
        case "ave":
          contadorAve++;
          break;
        case "reptil":
          contadorReptil++;
          edadReptiles += edad;
          break;
        case "mamifero":
          contadorMamifero++;
          break;

      }

      if (flagJoven = 1 || edad < edadJoven)
      {
        edadJoven = edad;
        tipoJoven = tipo;
        sexoJoven = sexo;
        flagJoven = 0;
      }





    totalMascotas++;
    seguir = prompt("desea continuar? s/n");
  }while(seguir == 's');
  
    if (contadorReptil != 0)
    {
      promedioEdadReptiles= edadReptiles/contadorReptil;
    }

    if (contadorAve != 0)
    {
      porcentajeAves = contadorAve * 100 / totalMascotas;
    }


    if (contadorAve > contadorMamifero && contadorAve > contadorReptil)
    {
      alert ("el tipo de mayor mascotas son las ave con: " + contadorAve + " cantidades");
    }
    else if (contadorMamifero >= contadorReptil && contadorMamifero > contadorAve)
    { 
      alert ("el tipo de mayor mascotas son los mamiferos con: " + contadorMamifero + " cantidades");
    }
    else
    {
      alert ("el tipo de mayor mascotas son reptiles con: " + contadorReptil + " cantidades");
    }

 


    alert ("promedio edad reptiles: " + promedioEdadReptiles);
    alert ("la tipo de la mascota más joven es " + tipoJoven + " y su sexo es ''" + sexoJoven + "'' h(hembra)/m(macho)");
    alert ("el porcentaje de aves segun el total de mascotas es: " + porcentajeAves + "%" );
  }

}

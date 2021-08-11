function mostrar() 
{ 
  let nombre;
  let carrera;
  let cantidadMaterias;
  let notaPromedio=0;
  let edad;
  let promedioFisica=0;
  let flagFisica=1;
  let nombreFisica;
  let nombreJoven;
  let edadJoven=0;
  let flagJoven=1;
  let porcentajeEstFisica=0;
  let porcentajeEstQuimica=0;
  let porcentajeEstSistemas=0;
  let contadorFisica=0;
  let contadorQuimica=0;
  let contadorSistemas=0;
  let nombreMasMaterias;
  let edadMasMaterias=0;
  let flagMasMaterias=1;
  let cantidadMasMaterias=0;
  


  for (let i = 0; i<500; i++)
  {
    nombre= prompt("ingrese su nombre");
		
    carrera = prompt("ingrese su carrera (quimica/fisica/sistemas)");
    while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas")
    {
      carrera = prompt ("error, ingrese carrera valida (quimica/fisica/sistemas)");
    }

    sexo = prompt("ingrese su sexo (masculino/femenino/no binario)");
    while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
    {
      sexo = prompt("error, ingrese sexo valido (masculino/femenino/no binario)");
    }

    cantidadMaterias= parseInt(prompt("ingrese cantidad de materias (1-5)"));
    while (isNaN(cantidadMaterias) || !(cantidadMaterias >= 1 && cantidadMaterias <= 5))
    {
      cantidadMaterias = parseInt(prompt("error, ingrese un valor valido dentro del rango (1-5)"));
    }

    notaPromedio = parseInt(prompt("ingrese su nota promedio (1-10)"));
    while (isNaN(notaPromedio) || !(notaPromedio >= 1 && notaPromedio <= 10))
    {
      notaPromedio = parseInt(prompt("error, ingrese un valor valido dentro del rango (1-10)"));
    }

    edad = parseInt(prompt("ingrese su edad: "));
    while(isNaN(edad))
    {
      edad = parseInt(prompt("error, ingrese edad valida"));
    }

    
   
    if (flagFisica == 1 || promedioFisica < notaPromedio)
    {
     promedioFisica=notaPromedio;
     nombreFisica=nombre;
     flagFisica = 0;
    }
    if (sexo == "femenino")
    {
     if (flagJoven == 1 || edad < edadJoven)
     {
       edadJoven = edad;
       nombreJoven = nombre;
       flagJoven = 0;
     }

    }
  
  switch(carrera)
  {
    case "fisica":
      contadorFisica++;
      break;
    case "quimica":
      contadorQuimica++;
      break;
    case "sistemas":
      contadorSistemas++;
      break;

  }

  if (carrera != "quimica")
  {
    if(flagMasMaterias == 1 || cantidadMaterias < cantidadMasMaterias)
    {
      nombreMasMaterias = nombre;
      edadMasMaterias = edad;
      flagMasMaterias =0;
    }
  }
    

    





  }
  porcentajeEstFisica = contadorFisica *100 / 500;
  porcentajeEstQuimica = contadorQuimica *100 / 500;
  porcentajeEstSistemas = contadorSistemas *100 / 500;

  alert ("la persona con mejor promedio en fisica es: " + nombreFisica);
  alert ("el nombre de la alumna mas joven es: " + nombreJoven);
  alert ("porcentaje de estudiantes en Fisica: " + porcentajeEstFisica + "%, de quimica: " + porcentajeEstQuimica + "%, de sistemas: " + porcentajeEstSistemas +"%");
  alert ("la persona con que estudia mas materias es " + nombreMasMaterias + " y tiene " + edadMasMaterias + " años");





}

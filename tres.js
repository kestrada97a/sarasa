function mostrar() 
{
  let seguir;
  let tipoJuguete;
  let origen;
  let precio;
  let contadorMuñeca=0;
  let contadorRompe=0;
  let contadorPelota=0;
  let contadorImportados=0;
  let precioImportado=0;
  let promedioImportado=0;
  let valorTotal=0;
  let precioMasBarato=0;
  let flagMasBarato=1;
  let iva=0;
  let precioConIva=0;
  


  do
  {
    tipoJuguete = prompt("tipo de juguete (muñeca/rompecabezas/pelota): ");
    while(tipoJuguete != "muñeca" && tipoJuguete != "rompecabezas" && tipoJuguete != "pelota")
    {
      tipoJuguete = prompt("error, ingrese tipo valido (muñeca/rompecabezas/pelota): ");
    }
    origen = prompt("origen (nacional/importado)");
    while(origen != "nacional" && origen != "importado")
    {
      origen = prompt("error, ingrese origen valido (nacional/importado)");
    }
    precio = parseInt(prompt("ingrese precio (1000-5000)"));
    while (isNaN(precio) || !(precio >=1000 && precio <= 5000))
    {
      precio= parseInt(prompt("error, ingrese rango valido (1000-5000)"));
    }

    switch(tipoJuguete)
    {
      case "muñeca":
        contadorMuñeca++;
        break;
      case "pelota":
        contadorPelota++;
        break;
      case "rompecabezas":
        contadorRompe++;
        break;

    }

    if (origen == "importado")
    {
      contadorImportados++;
      precioImportado += precio;

    }

    valorTotal += precio;

    if (tipoJuguete == "rompecabezas" && origen == "nacional")
    {
      if (flagMasBarato == 1 || precio < precioMasBarato)
      {
        precioMasBarato = precio;
        flagMasBarato = 0;
      }

    }






    seguir = prompt("desea seguir? s/n");
  }while(seguir == 's')






  iva = valorTotal *0.21;


   
  if (contadorMuñeca > contadorPelota && contadorMuñeca > contadorRompe)
  {
    alert ("el tipo de juguete mas vendido son las muñecas");
  }
  else if (contadorPelota >= contadorMuñeca && contadorPelota > contadorRompe)
  {
    alert ("el tipo de juguete mas vendido son las pelotas");
  }
  else 
  {
    alert ("el tipo de juguete mas vendido son los rompecabezas");
  }

  if (contadorImportados != 0)
  {
    promedioImportado = precioImportado/contadorImportados;

  }
  
  alert ("el promedio de precio de los productos importados es: " + promedioImportado + "$");

  alert ("valor total es: " + valorTotal +"$");

  alert ("el precio del rompecabezas nacional más barato es: " + precioMasBarato +"$");

  alert ("el total del iva es:" + iva +"$"); 




}

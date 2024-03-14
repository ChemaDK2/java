function cambColores(fondos, letras){


    let ind;
 
 
    ind = fondos.selectedIndex;
 
 
    document.body.style.backgroundColor = fondos.options[ind].value;
 
 
    ind = letras.selectedIndex;
 
 
    document.body.style.color = letras.options[ind].value;
 
 
    return;
 
 
 }
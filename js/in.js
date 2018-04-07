    var jmci;
        tb = document.getElementById("tabla");  

     function addR(){   
    
        var newRow = tb.insertRow(tb.length);
            
            celda1 = newRow.insertCell(0);
            emp = document.getElementById("emp").value;
            celda1.innerHTML = emp;

            celda2 = newRow.insertCell(1);
            cal = document.getElementById("cal").value;
            celda2.innerHTML = cal;

            celda3 = newRow.insertCell(2);
            cif = document.getElementById("cif").value;
            celda3.innerHTML = cif;

            celda4 = newRow.insertCell(3);
            num = document.getElementById("num").value;
            celda4.innerHTML = num;

            celda5 = newRow.insertCell(4);
            net = document.getElementById("net").value;
            celda5.innerHTML = net;
           seleccion();              
}
    
    function editR(){
     
           emp = document.getElementById("emp").value;
           tb.rows[jmci].cells[0].innerHTML = emp;

           cal = document.getElementById("cal").value;
           tb.rows[jmci].cells[1].innerHTML = cal;

           cif = document.getElementById("cif").value;
           tb.rows[jmci].cells[2].innerHTML = cif;

           num = document.getElementById("num").value;
           tb.rows[jmci].cells[3].innerHTML = num;

           net = document.getElementById("net").value;
           tb.rows[jmci].cells[4].innerHTML = net;       
}
     
     function deleleteR(){
     
         tb.deleteRow(jmci);
        
}
 
  function seleccion(){ 
     
        for(var i = 1; i < tb.rows.length; i++){
        
           tb.rows[i].onclick = function(){
         
              jmci = this.rowIndex;
              document.getElementById("emp").value = this.cells[0].innerHTML;
              document.getElementById("cal").value = this.cells[1].innerHTML;
              document.getElementById("cif").value = this.cells[2].innerHTML;
              document.getElementById("num").value = this.cells[3].innerHTML;
              document.getElementById("net").value = this.cells[4].innerHTML;
         }
     }
}
  
  function alertfuncionamiento() {
     alert("Haz click en una fila para borrar o editar");
}


function EnviarDatos(){
    //Datos que ingresará el USUARIO
    var nombre=document.getElementsByName("nombre")[0].value;
    var apellido=document.getElementsByName("apellido")[0].value;
    var telefono=document.getElementsByName("telefono")[0].value;
    var edad=document.getElementsByName("edad")[0].value;
    
      
  
      let nom=document.getElementById("nombre");
      let apell=document.getElementById("apellido");
      let tele=document.getElementById("telefono");
      let eda=document.getElementById("edad");
  
      if(!isNaN(nombre) || !/^[a-zA-ZáéíóúÁÉÍÓÚ]*$/.test(nombre) || nombre===""||nombre.length>20 ||nombre.length<3){  
          nom.innerHTML= "Datos de Nombre INVALIDO";
  
        }else{ 
          nom.innerHTML= "Datos de Nombre Validado";
          
         }if(!isNaN(apellido) || !/^[a-zA-ZáéíóúÁÉÍÓÚ]*$/.test(apellido) || apellido===""||apellido.length>20 ||apellido.length<3){ 
              apell.innerHTML= "Datos de Apellido INVALIDO";
          
            }else{ 
              apell.innerHTML= "Datos de Apellido Validado";
            
            }if(!/^[0-9]*$/.test(telefono) || telefono===""||telefono.length>9 ||telefono.length<8){ 
              tele.innerHTML= "Datos de Telefono INVALIDO";
            }else{ 
              tele.innerHTML= "Datos de Telefono Validado";

            
          }if(!/^[0-9]*$/.test(edad) || edad===""||edad.length>4 ){ 
            eda.innerHTML= "Datos de Edad INVALIDO";
          }else{ 
            eda.innerHTML= "Datos de Edad Validado";
          }
        }
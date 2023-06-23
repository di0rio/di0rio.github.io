const btnEnviar = () => {
  var acesso = document.getElementById("bannerAviso");

  btnEnviar.style.display = "flex";

  frmContato.reset ();
  
  setTimeout(function (){
    acesso.style.display = "none";
  }, 3000);
};
  

//-----------------------------------------------------------//

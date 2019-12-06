this.logueado = false;

$("#entrar").click(function(){
	if ($("#Usuario").val() == "ariel" && $("#Contraseña").val() == '123'){
		logueado = true;
		if (logueado == true) {
			window.location = "./pages/inicio.html"
		}
	}else{
		swal.fire('Error');
	}
});

$("#Galeria").click(function(){
 window.location = "./Galeria.html"
})


window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});

$("#PDF").click(function(){
window.location = "./pdfs.html"
})

$("#inicio").click(function(){
 window.location = "./inicio.html"
})

$("#Salir").click(function(){
 window.location = "../index.html"
})
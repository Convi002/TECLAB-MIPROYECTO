$("form#alta_categoria").on("submit", function(){
	var nombre = $.trim($("#fname").val());
	var error = new Array();

	if (nombre === ""){
		error.push("Complete con su nombre");
	}

	if (error.length > 0 ){
		alert(error.join("\n"));
		return false;
	}
	return true;

});


$("form#alta_producto").on("submit", function(){
	var nombre = $.trim($("#fname").val());
	var categoria = $("#cat_productos").val();
	var imagen = $("#img").val();

	var error = new Array();


	if (nombre === ""){
		error.push("Complete con su nombre");
	}

	if (categoria === "" || categoria === null){
		error.push("Seleccione una categoria");
	}

	if (imagen === ""){
		error.push("Elija una imagen");
	}

	if (error.length > 0 ){
		alert(error.join("\n"));
		return false;
	}
	return true;

});
/*cambio de frase inicial en "categorias"
const change = document.getElementById("change");
change.textContent = "Ingresa una categoria";
/**/

/*cliquea en guardar y cambia el texto
const changeTwo = document.querySelector('#cliquea');
var categoria = document.querySelector('#fname');

changeTwo.addEventListener("click", function() {
 
  changeTwo.textContent = "Enviado!";
});

/*chauuuNombre
function chauChau(){
    document.getElementById('chauNombre').innerHTML = ' ';
}
/**/

const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
});







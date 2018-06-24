function modal(){
	var html = document.getElementsByTagName("html")[0];
	var capamodal = document.getElementsByClassName("modal-reposo");
	
	for (i = 0; i < capa.modal.length; i++){
		
		fuction ventModal(i){
			
			capamodal[i].addEventListener("click", function();{
				
				var infoModal = this.getElementsByTagName("info-modal-reposo")[0];
				var altoVent = html.offsetHeight;
				var body = document.getElementsByTagName("body")[0];
				var cerrar = this.getElementsByClassName("alin-dcha")[0];
				
				this.style.height = altoVent + "px";
				this.style.top = html.scrollTop + "px";
				this.classList.remove("modal-reposo");
				this.classList.add("modal-activo");
				infoModal.classList.remove("info-modal-reposo");
			    infoModal.classList.add("info-modal-ctivo");
				body.style.overflow = "hidden";
				html.onkeypress = fuction(){ return false };
				cerrar.onclick = fuction(){ location.reload() };

				
			}); //fin evento
			
		} //fin ventana modal
		ventModal(i);
	}//fin for
	
} //fin modal

modal();
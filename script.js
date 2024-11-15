document.getElementById('fname').eventListener('blur',function(){
	this.value=this.value.toUpperCase();
})
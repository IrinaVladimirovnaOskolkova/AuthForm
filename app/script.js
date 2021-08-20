let interval = setInterval(function examination(){

	let login = document.getElementById('login');
	let password = document.getElementById('Password');
	let signBtn = document.getElementById('btn');

	if(login.value !== "" && password.value !== "") signBtn.disabled = false;
}, 1000)

document.getElementById('login').addEventListener('keyup', insert);
document.getElementById('Password').addEventListener('keyup', insert);

function insert(){
	this.value = this.value.replace(/[^\dA-Za-z0-9]/g, '');	
};



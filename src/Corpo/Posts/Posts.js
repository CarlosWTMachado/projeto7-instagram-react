import Separador from "./../../Separador";

function Post1TopoUsuario(){
	return(
		<div class="usuario">
			<img src="assets/img/meowed.svg" />
			meowed
		</div>
	);
}

function Post1TopoAcoes(){
	return(
		<div class="acoes">
			<ion-icon name="ellipsis-horizontal"></ion-icon>
		</div>
	);
}

function Post1Topo(){
	return(
		<div class="topo">
			<Post1TopoUsuario/>
			<Post1TopoAcoes/>
			<Separador/>
		</div>
	);
}

function Post1Conteudo(){
	return(
		<div class="conteudo">
			<img src="assets/img/gato-telefone.svg" />
		</div>
	);
}

function Post1FundoAcoes(){
	return(
		<div class="acoes">
			<div>
				<ion-icon name="heart-outline"></ion-icon>
				<ion-icon name="chatbubble-outline"></ion-icon>
				<ion-icon name="paper-plane-outline"></ion-icon>
			</div>
			<div>
				<ion-icon name="bookmark-outline"></ion-icon>
			</div>
		</div>
	);
}

function Post1FundoCurtidas(){
	return(
		<div class="curtidas">
			<img src="assets/img/respondeai.svg" />
			<div class="texto">
				Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
			</div>
		</div>
	);
}

function Post1Fundo(){
	return(
		<div class="fundo">
			<Post1FundoAcoes/>
			<Post1FundoCurtidas/>
		</div>
	);
}

function Post1(){
	return(
		<div class="post">
			<Post1Topo/>
			<Post1Conteudo/>
			<Post1Fundo/>
		</div>
	);
}


function Post2TopoUsuario(){
	return(
		<div class="usuario">
			<img src="assets/img/barked.svg" />
			barked
		</div>
	);
}

function Post2TopoAcoes(){
	return(
		<div class="acoes">
			<ion-icon name="ellipsis-horizontal"></ion-icon>
		</div>
	);
}

function Post2Topo(){
	return(
		<div class="topo">
			<Post2TopoUsuario/>
			<Post2TopoAcoes/>
		</div>
	);
}

function Post2Conteudo(){
	return(
		<div class="conteudo">
			<img src="assets/img/dog.svg" />
		</div>
	);
}

function Post2FundoAcoes(){
	return(
		<div class="acoes">
			<div>
				<ion-icon name="heart-outline"></ion-icon>
				<ion-icon name="chatbubble-outline"></ion-icon>
				<ion-icon name="paper-plane-outline"></ion-icon>
			</div>
			<div>
				<ion-icon name="bookmark-outline"></ion-icon>
			</div>
		</div>
	);
}

function Post2FundoCurtidas(){
	return(
		<div class="curtidas">
			<img src="assets/img/adorable_animals.svg" />
			<div class="texto">
				Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
			</div>
		</div>
	);
}

function Post2Fundo(){
	return(
		<div class="fundo">
			<Post2FundoAcoes/>
			<Post2FundoCurtidas/>
		</div>
	);
}

function Post2(){
	return(
		<div class="post">
			<Post2Topo/>
			<Post2Conteudo/>
			<Post2Fundo/>
		</div>
	);
}

export default function Posts(){
	return(
		<div class="posts">
			<Post1/>
			<Post2/>
		</div>
	);
}
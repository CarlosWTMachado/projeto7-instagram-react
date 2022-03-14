import Stories from "./Stories/Stories";
import Posts from "./Posts/Posts";

function Esquerda(){
	return(
		<div class="esquerda">
			<Stories/>
			<Posts/>
		</div>
	);
}

function SidebarUsuario(){
	return(
		<div class="usuario">
			<img src="assets/img/catanacomics.svg" />
			<div class="texto">
				<strong>catanacomics</strong>
				Catana
			</div>
		</div>
	);
}

function SidebarSugestoes(){
	return(
		<div class="sugestoes">
					<div class="titulo">
						Sugestões para você
						<div>Ver tudo</div>
					</div>
					<div class="sugestao">
						<div class="usuario">
							<img src="assets/img/bad.vibes.memes.svg" />
							<div class="texto">
								<div class="nome">bad.vibes.memes</div>
								<div class="razao">Segue você</div>
							</div>
						</div>
						<div class="seguir">Seguir</div>
					</div>
					<div class="sugestao">
						<div class="usuario">
							<img src="assets/img/chibirdart.svg" />
							<div class="texto">
								<div class="nome">chibirdart</div>
								<div class="razao">Segue você</div>
							</div>
						</div>
						<div class="seguir">Seguir</div>
					</div>
					<div class="sugestao">
						<div class="usuario">
							<img src="assets/img/razoesparaacreditar.svg" />
							<div class="texto">
								<div class="nome">razoesparaacreditar</div>
								<div class="razao">Novo no Instagram</div>
							</div>
						</div>
						<div class="seguir">Seguir</div>
					</div>
					<div class="sugestao">
						<div class="usuario">
							<img src="assets/img/adorable_animals.svg" />
							<div class="texto">
								<div class="nome">adorable_animals</div>
								<div class="razao">Segue você</div>
							</div>
						</div>
						<div class="seguir">Seguir</div>
					</div>
					<div class="sugestao">
						<div class="usuario">
							<img src="assets/img/smallcutecats.svg" />
							<div class="texto">
								<div class="nome">smallcutecats</div>
								<div class="razao">Segue você</div>
							</div>
						</div>
						<div class="seguir">Seguir</div>
					</div>
				</div>
	);
}

function SidebarLinks(){
	return(
		<div class="links">
			Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
		</div>
	);
}

function SidebarCopyright(){
	return(
		<div class="copyright">
			© 2021 INSTAGRAM DO FACEBOOK
		</div>
	);
}

function Sidebar(){
	return(
		<div class="sidebar">
			<SidebarUsuario/>
			<SidebarSugestoes/>
			<SidebarLinks/>
			<SidebarCopyright/>
		</div>
	);
}

export default function Corpo(){
	return(
		<div class="corpo">
			<Esquerda/>
			<Sidebar/>
		</div>
	);
}
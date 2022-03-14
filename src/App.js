export default function App(){
	return(
		<div>
			<Navbar/>
			<Corpo/>
			<FundoMobile/>
		</div>
	);
}

function Separador(){
	return(
		<div class="separador"></div>
	);
}

function Logo(){
	return(
		<div class="logo">
			<ion-icon name="logo-instagram"></ion-icon>
			<Separador/>
			<img src="assets/img/logo.png" />
		</div>
	);
}

function LogoMobile(){
	return(
		<div class="logo-mobile">
			<ion-icon name="logo-instagram"></ion-icon>
		</div>
	);
}

function InstagramMobile(){
	return(
		<div class="instagram-mobile">
			<img src="assets/img/logo.png"/>
		</div>
	);
}

function Pesquisa(){
	return(
		<div class="pesquisa">
			<input type="text" placeholder="Pesquisar" />
		</div>
	);
}
function Icones(){
	return(
		<div class="icones">
			<ion-icon name="paper-plane-outline"></ion-icon>
			<ion-icon name="compass-outline"></ion-icon>
			<ion-icon name="heart-outline"></ion-icon>
			<ion-icon name="person-outline"></ion-icon>
		</div>
	);
}
function IconesMobile(){
	return(
		<div class="icones-mobile">
			<ion-icon name="paper-plane-outline"></ion-icon>
		</div>
	);
}

function Container(){
	return(
		<div class="container">
			<Logo/>
			<LogoMobile/>
			<InstagramMobile/>
			<Pesquisa/>
			<Icones/>
			<IconesMobile/>
		</div>
	);
}

function Navbar() {
	return (
		<div class="navbar">
			<Container/>
		</div>
	);
}

function Story1Image(){
	return(
		<div class="imagem">
			<img src="assets/img/9gag.svg"/>
		</div>
	);
}

function Story1Usuario(){
	return(
		<div class="usuario">
			9gag
		</div>
	);
}

function Story1(){
	return(
		<div class="story">
			<Story1Image/>
			<Story1Usuario/>
		</div>
	);
}

function Story2Image(){
	return(
		<div class="imagem">
			<img src="assets/img/meowed.svg" />
		</div>
	);
}

function Story2Usuario(){
	return(
		<div class="usuario">
			meowed
		</div>
	);
}

function Story2(){
	return(
		<div class="story">
			<Story2Image/>
			<Story2Usuario/>
		</div>
	);
}

function Story3Image(){
	return(
		<div class="imagem">
			<img src="assets/img/barked.svg" />
		</div>
	);
}

function Story3Usuario(){
	return(
		<div class="usuario">
			barked
		</div>
	);
}

function Story3(){
	return(
		<div class="story">
			<Story3Image/>
			<Story3Usuario/>
		</div>
	);
}

function Story4Image(){
	return(
		<div class="imagem">
			<img src="assets/img/nathanwpylestrangeplanet.svg" />
		</div>
	);
}

function Story4Usuario(){
	return(
		<div class="usuario">
			nathanwpylestrangeplanet
		</div>
	);
}

function Story4(){
	return(
		<div class="story">
			<Story4Image/>
			<Story4Usuario/>
		</div>
	);
}

function Story5Image(){
	return(
		<div class="imagem">
			<img src="assets/img/wawawicomics.svg" />
		</div>
	);
}

function Story5Usuario(){
	return(
		<div class="usuario">
			wawawicomics
		</div>
	);
}

function Story5(){
	return(
		<div class="story">
			<Story5Image/>
			<Story5Usuario/>
		</div>
	);
}

function Story6Image(){
	return(
		<div class="imagem">
			<img src="assets/img/respondeai.svg" />
		</div>
	);
}

function Story6Usuario(){
	return(
		<div class="usuario">
			respondeai
		</div>
	);
}

function Story6(){
	return(
		<div class="story">
			<Story6Image/>
			<Story6Usuario/>
		</div>
	);
}

function Story7Image(){
	return(
		<div class="imagem">
			<img src="assets/img/filomoderna.svg" />
		</div>
	);
}

function Story7Usuario(){
	return(
		<div class="usuario">
			filomoderna
		</div>
	);
}

function Story7(){
	return(
		<div class="story">
			<Story7Image/>
			<Story7Usuario/>
		</div>
	);
}

function Story8Image(){
	return(
		<div class="imagem">
			<img src="assets/img/memeriagourmet.svg" />
		</div>
	);
}

function Story8Usuario(){
	return(
		<div class="usuario">
			memeriagourmet
		</div>
	);
}

function Story8(){
	return(
		<div class="story">
			<Story8Image/>
			<Story8Usuario/>
		</div>
	);
}

function Setinha(){
	return(
		<div class="setinha">
			<ion-icon name="chevron-forward-circle"></ion-icon>
		</div>
	);
}

function Stories(){
	return(
		<div class="stories">
			<Story1/>
			<Story2/>
			<Story3/>
			<Story4/>
			<Story5/>
			<Story6/>
			<Story7/>
			<Story8/>
			<Setinha/>
		</div>
	);
}

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

function Posts(){
	return(
		<div class="posts">
			<Post1/>
			<Post2/>
		</div>
	);
}

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

function Corpo(){
	return(
		<div class="corpo">
			<Esquerda/>
			<Sidebar/>
		</div>
	);
}

function FundoMobile(){
	return(
		<div class="fundo-mobile">
			<ion-icon name="home"></ion-icon>
			<ion-icon name="search-outline"></ion-icon>
			<ion-icon name="add-circle-outline"></ion-icon>
			<ion-icon name="heart-outline"></ion-icon>
			<ion-icon name="person-outline"></ion-icon>
		</div>
	);
}

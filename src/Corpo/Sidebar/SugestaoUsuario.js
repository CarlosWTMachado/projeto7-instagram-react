import Texto from "./Texto";

export default
function SugestaoUsuario(props){
	const {img, nome, razao} = props.usuario;
	return(
		<div class="usuario">
			<img src={img} />
			<Texto nome={nome} razao={razao}/>
		</div>
	);
}
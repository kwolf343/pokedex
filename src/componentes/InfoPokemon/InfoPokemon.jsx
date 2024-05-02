import "./InfoPokemon.css";
function InfoPokemon({numero,nombre,cambiarPokemon}){
    const agregarCeros = (num) =>{
        if(num<10)num="00"+num;
        else if (num<100)num="0"+num;
        return num;
    }
    const convertToUpperCase = (nombre) => {
        return nombre.toUpperCase();
      };
    return(
        <div className="info-pokemon" onClick={() => cambiarPokemon(nombre)}>
            N°{agregarCeros(numero)} {convertToUpperCase(nombre)}
        </div>
    );
}
export default InfoPokemon;
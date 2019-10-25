
const Time = ({timeStamp}) => {
    const date = new Date(timeStamp);
    const horas = date.getHours();
    const minutos = "0"+date.getMinutes();
    const segundos = "0"+date.getSeconds();
    const dia = "0"+(date.getDate());
    const mes = "0"+(date.getMonth()+1);
    const ano = date.getFullYear();
    return `${dia.substr(-2)}/${mes.substr(-2)}/${ano} ${horas}:${minutos.substr(-2)}:${segundos.substr(-2)}`
}

export default Time;
function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    var ampm = hora >= 12 ? 'pm' : 'am';
    dia = momentoActual.getDate()
    mes = momentoActual.toLocaleString("es-US", { month: "long" });
    anio = momentoActual.getFullYear()
    
    str_mes = new String (mes)
    if (str_mes.length == 1)
    mes = "0" + mes

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
    segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
    minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
    hora = "0" + hora
    

    horaImprimible = hora + " : " + minuto + " : " + segundo + ampm
    document.form_reloj.reloj.value = horaImprimible

    fechaimprimible = dia + " / " + mes + " / " + anio;
    document.form_fecha.fecha.value = fechaimprimible

    setTimeout("mueveReloj()",1000)
}
// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Sabroso al toque",
    about: "Proyecto para Maggi, taller 5",
}, {
    figure: "media/foto-02.jpg",
    title: "Proturismo Cunco",
    about: "Proyecto para municipalidad de Cunco, taller 5",
}, {
    figure: "media/foto-03.jpg",
    title: "PRAK",
    about: "Producto para la pratica de street dance, taller 4",
}, {
    figure: "media/foto-04.jpg",
    title: "¿Querí papitas?",
    about: "Tarjetas de descuento fiesta en Lo Contador, taller 2",
}, {
    figure: "media/foto-05.jpg",
    title: "El Castillo De Cartón",
    about: "Proyecto de ficción audiovisual, taller 6",
}, {
    figure: "media/foto-06.jpg",
    title: "Do·Ka",
    about: "Producto comida, taller 4",
}, {
    figure: "media/foto-07.jpg",
    title: "ZOZ",
    about: "Aislante de emergencia apilable, taller 4",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
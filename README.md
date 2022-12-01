# Green Spaces Solutions productos fitosanitarios

Proyecto Final React JS - CoderHouse - Green Spaces Solutions, productos fitosanitarios para el agro, creada por Lucia Tello.

Aplicación Web Ecommerce desarrollada con React JS, React Bootstrap y Firebase.

DEPLOY: https://greenspacessolutions-tello.web.app/

# Descripcion de la app

La app representa un e-commerce, el cual puede navegarse desde la ruta principal (inicio) en donde se muestran los productos disponibles así como tambien, desde las categorias, dependiendo si el usuario busca fertilizantes, herbicidas o insecticidas. 

Al seleccionar un producto se puede ver en detalle la informacion del mismo y agregar al carrito las cantidades que el usuario quiera mientras no se supere el stock disponible. Una vez agregado el producto, se puede seguir comprando para agregar mas productos iguales o de otra categoria, o finalizar compra para ver que hay dentro del carrito (las cantidades agregadas al carrito persisten en el mismo porque se alamcenan en LocalStorage). 

Finalizando compra la navegacion lleva al usuario al cart (carrito) y muestra un resumen de los productos seleccionados, las cantidades, precios unitarios, subtotal por producto y el total de la compra. En este punto uno tiene la opcion de eliminar por producto, eliminar todo el carrito(vaciarlo, vaciando el localstorage) o continuar con la compra(compra carrito). Si decide continuar con la misma la navegacion lo lleva al checkout en donde se muestra un formulario(con validaciones) para completar con los datos del usuario y un breve resumen de la compra con el total. Una vez completado el formulario y confirmada la compra se envía un numero de orden de compra(ID generado con Firestore) y se puede navegar al inicio nuevamante. Tanto los productos como las ordenes quedan almacenadas en la base de datos de Firestore.


# Librerias utilizadas

React bootstrap para el uso general, cards, spinners, alerts, buttons. React bootstrap icons para el uso de iconos. Importacion de css de bootstrap en App.js para estilos. Esta libreria la elegí porque ya tenia algo de conocmiento por dos cursos previos y me resultó mas intuitiva que Mui.



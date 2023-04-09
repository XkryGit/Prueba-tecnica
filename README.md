# Solución prueba técnica por Adolfo Zambrana

He optado por generar la solución utilizando React.js para generar la aplicación y Sass para el estilado de los componentes.
La aplicación genera dos listas, una lista de categorias y otra lista de productos mediante dos llamadas, una por cada lista, a una API externa pública (https://fakestoreapi.com/). La primera lista de categorias se transforma en una botonera para filtrar los productos por las diferentes categorias existentes, y la segunda lista de productos se transforma en una tabla con todos los productos mostrando su imagen, titulo y precio.

## ¿Cómo lo hace y de qué manera?

Para realizar esta solución lo primero que hice fue generar una aplicación básica en React utilizando el comando "npx create-react-app" y en el archivo de "APP.js" generé tres gestores de estados, utilizando el useState de React, para los arrais de productos (que necesitamos dos, uno para tener la lista completa de productos [products] y otro para poder ir realizando los filtrados [productsFilter]), y otro de las categorias [categories], para poder generar la botonera de filtrado.

Despues realize las dos llamadas a las API mediante dos Fetch's, uno al apartado de productos (`https://fakestoreapi.com/products`) y otro a la de categorias (`https://fakestoreapi.com/products/categories`). De la respuesta, siempre que no sea una error, en cuyo caso aparecera un alert con el mensaje de "Ha ocurrido un error, intentelo más tarde.", la primera respuesta la transformamos en un json con el que poder trabajar, y en el caso de las categorias, "seteamos" este json (con el array de categorias) utilizando el "seter" de estado [setCategories] para actualizar categories. En el caso de products, una vez que tenemos la respuesta tranformada en json, la almacenamos en una variable [productsInitial] mediante un "handler" (que no es más que una funcion transformadora), despues "seteamos" esta variable en [setProducts] y [setProductsFilter] para actualizar el estado de products y productsFilter.

A continuación generé el "return"(el codigo que va a mostrar nuestra app) colocando un titulo H1 con "Prueba técnica Adolfo Zambrana" [title], un div (o aparatado) con los de botones para el filtrado [filter-button-container], y por ultimo una lista con los productos a mostrar[product-list-container].

Para "filter-button-container" creé primero el botón de "all categories", donde al ser pulsado (onClick)"seteara" en productsFilter el valor de products, o lo que es lo mismo, manda actualizar el valor de productsFilter con la lista completa de elementos, ya que el valor de products no vamos a modificarlo nunca, por lo que va a ser siempre el recibido inicialmente por la API. Tras este primer botón hice una funcion "mapeadora" para crear un boton por cada categoria [categories.map] que al ser pulsado nos filtre del array de productos iniciales (products) los elementos que sean de esa categoria [onClick={() => setProductsFilter(products.filter((product) => product.category === categorie))}] y tengan como texto del botón el nombre de la categoria.

Para "product-list-container"

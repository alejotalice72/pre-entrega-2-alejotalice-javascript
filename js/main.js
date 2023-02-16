// PreEntrega 2 Alejo Talice
productos = [];
cart = [];

class Producto {
    constructor(name, price, description){
        this.name = name;
        this.price = price;
        this.description = description;
        this.sold = false;
    }
    addToCart() {
    }
}

const agregarProducto = () => {
    let name = prompt("Ingrese el nombre del producto: ");
    let price = parseInt(prompt("Ingrese el precio del producto: "));
    let description = prompt("Ingrese una breve descripcion del producto: ");
    productos.push(new Producto(name, price, description));
};

agregarProducto();
agregarProducto();

// Agregar Id en nuevo array
const productosId = productos.map((prod)=>{
    return {
        id: Math.round(Math.random() * 100),
        name: prod.name,
        price: prod.price,
        description: prod.description
    }
});

// Mostrar productos 
let contenedorHtml = document.getElementById('products__section');
for (const producto of productosId) {
    let contenedor = document.createElement('div');
    contenedor.className = "card"
    contenedor.style = "width: 18rem;"
    contenedor.innerHTML = `<img src="img/mirtha.png" class="card-img-top" alt="Imagen de prueba">
                            <div class="card-body">
                                <h5 class="card-title">${producto.name} $${producto.price}</h3>
                                <p class="card-text">${producto.description}</p>
                                <a href="#" class="btn btn-primary">Añadir al carrito</a>
                            </div>`;
    contenedorHtml.appendChild(contenedor);
}   

console.log(productosId);
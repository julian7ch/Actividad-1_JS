const products = [
  {
    productId: 1,
    name: "headphones",
    typeOfProduct: 1,
    price: 100,
  },
  {
    productId: 2,
    name: "Shoes Nike",
    typeOfProduct: 2,
    price: 300,
  },
  {
    productId: 3,
    name: "hamburger",
    typeOfProduct: 3,
    price: 10,
  },
  {
    productId: 4,
    name: "Fries",
    typeOfProduct: 3,
    price: 5,
  },
  {
    productId: 5,
    name: "Sandwich",
    typeOfProduct: 3,
    price: 10,
  },
  {
    productId: 6,
    name: "laptop",
    typeOfProduct: 1,
    price: 100,
  },
  {
    productId: 7,
    name: "keyboard",
    typeOfProduct: 1,
    price: 50,
  },
  {
    productId: 8,
    name: "t-shirt",
    typeOfProduct: 2,
    price: 16,
  },
];

//console.log(products.push(productId:2));

const typeOfProducts = [
  { id: 1, name: "Electronic" },
  { id: 2, name: "Clothes" },
  { id: 3, name: "Food" },
];

const discountsHolyDays = [
  { typeOfProduct: 1, discountApply: true, value: 10},
  { typeOfProduct: 2, discountApply: false, value: 0 },
  { typeOfProduct: 3, discountApply: true, value: 30 },
];

//// Activity

// cada solución debe de crearse con metodo que retorne el resultado esperado de cada punto
// y su llamda del metodo con un console.log donde muestre la información

/// 1 - ¿Cuál es el promedio de valor de cada tipo de producto?

//General
typeOfProducts.forEach((type) => {
  const organizarPorCategoria = products.filter(
    (producto) => producto.typeOfProduct === type.id
  );
  const precioPorCategoria = organizarPorCategoria.map(
    (producto) => producto.price
  );
  const sumaDePrecioPorCategoria = precioPorCategoria.reduce(
    (previo, actual) => {
      return previo + actual;
    },
    0
  );

  console.log(organizarPorCategoria);
  console.log(precioPorCategoria);
  console.log(sumaDePrecioPorCategoria);
  const promedioPreciosPorCategoria =
    sumaDePrecioPorCategoria / precioPorCategoria.length;

  console.log(promedioPreciosPorCategoria);
});

//para cada uno
const listaTipo1 = products.filter((product) => {
  return product.typeOfProduct === 1;
});

console.log(listaTipo1);

const sumaPrecioTipo1 = listaTipo1.reduce((previo, actual, index, arreglo) => {
  console.log(previo, actual);

  return previo + actual.price;
}, 0);

const precioPromedioTipo1 = sumaPrecioTipo1 / listaTipo1.length;
console.log(precioPromedioTipo1);

const listaTipo2 = products.filter((product) => {
  return product.typeOfProduct === 2;
});
console.log(listaTipo2);

const sumaPrecioTipo2 = listaTipo2.reduce((previo, actual) => {
  return previo + actual.price;
}, 0);

const precioPromedioTipo2 = sumaPrecioTipo2 / listaTipo2.length;
console.log(precioPromedioTipo2);

const listaTipo3 = products.filter((product) => {
  return product.typeOfProduct == 3;
});
console.log(listaTipo3);

const sumaPrecioTipo3 = listaTipo3.reduce((previo, actual) => {
  return previo + actual.price;
}, 0);

const precioPromedioTipo3 = sumaPrecioTipo3 / listaTipo3.length;

console.log(precioPromedioTipo3);

/// 2 - ¿Cuál es el producto más costoso de cada categoria?
//General
typeOfProducts.forEach((type) => {
  const organizarPorCategoria = products.filter(
    (producto) => producto.typeOfProduct === type.id
  );
  const ordenarPorCategoria = organizarPorCategoria.map((producto) => producto);
  const precioMayorPorCategoria = ordenarPorCategoria.find((precioMasCaro) =>
    Math.max(precioMasCaro.price)
  );

  console.log(organizarPorCategoria);
  console.log(ordenarPorCategoria);
  console.log(precioMayorPorCategoria);
});

//individual

const maximoTipo1 = listaTipo1.find((producto) => {
  return Math.max(producto.price);
});
console.log(maximoTipo1);

const maximoTipo2 = listaTipo2.find((producto) => {
  return Math.max(producto.price);
});
console.log(maximoTipo2);

const maximoTipo3 = listaTipo3.find((producto) => {
  return Math.max(producto.price);
});
console.log(maximoTipo3);

/// 3 - ¿Exite algún producto de tipo Electronico que cueste $100?

const listaElectrodomesticosPrecio100 = products.filter((producto) => {
  return producto.typeOfProduct === 1 && producto.price == 100;
});
console.log(listaElectrodomesticosPrecio100);

/// 4 - Obtener todos los productos que en nombre tengan la letra S. -->Solicitan letra 'S' mayuscula.
const productoLetraS = products.filter((product) => {
  return product.name.includes("S") === true;
});
console.log(productoLetraS);

/// 5 - Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', typeOfProduct: 'Electronic', discount: '10', applyDiscount: true}
const arregloNuevo = [];
const objeto1 = {
  productId: 7,
  nameProduct: "keyboard",
  typeOfProduct: "Electronic",
  discount: "10",
  applyDiscount: true,
};
console.log(objeto1);
arregloNuevo.push(objeto1);
console.log(arregloNuevo);

/// 6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}
/*const objeto2={ productId: 7, priceWithDiscount: 45};
const arregloNuevo2=[...arregloNuevo]
arregloNuevo2.push(objeto2)
console.log(arregloNuevo2);*/

const listaParaDescuento = products.map((producto) => {
  const { productId, typeOfProduct, price } = producto;
  const objetoTipoProducto = discountsHolyDays.find((tipoProducto) => {
    return tipoProducto.typeOfProduct === typeOfProduct;
  });
  if (objetoTipoProducto.discountApply) {
    return {
      productId,
      priceWithDiscount: price * (1 - objetoTipoProducto.value / 100), 
                          
    };
  }
  return { productId, priceWithDiscount: price };
});
console.log(listaParaDescuento);

// 7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];

const newProducts = [
  {
    id: 9,
    name: "Tucson",
    typeOfProcuct: "Car",
    discount: 10,
  },
  {
    id: 10,
    name: "Jeep",
    typeOfProcuct: "Car",
    discount: 10,
  },
  {
    id: 10,
    name: "Screen",
    typeOfProcuct: "Electronic",
  },
  {
    id: 1,
    name: "Mouse",
    typeOfProcuct: "Electronic",
  },
];


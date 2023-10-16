
const tipos = [
  { id: 1, titulo: "auto" },
  { id: 2, titulo: "moto" },
];

const marcas = [
  { id: 1, nombre: "Audi" },
  { id: 2, nombre: "Peugeot" },
  { id: 3, nombre: "Chevrolet" },
  { id: 4, nombre: "Honda" },
  { id: 5, nombre: "Yamaha" },
  { id: 6, nombre: "Zanela" },
];

const vehiculos = [
  { id: 1, tipo: 1, marca: 1, modelo: "A1", precio: 4000000 },
  { id: 2, tipo: 1, marca: 1, modelo: "A3", precio: 20000000 },
  { id: 3, tipo: 1, marca: 2, modelo: "208", precio: 8000000 },
  { id: 4, tipo: 1, marca: 3, modelo: "ONIX LTZ", precio: 3000000 },
  { id: 5, tipo: 1, marca: 3, modelo: "CRUZE", precio: 10000000 },
  { id: 6, tipo: 2, marca: 4, modelo: "CR300", precio: 4000000 },
  { id: 7, tipo: 2, marca: 4, modelo: "CR250", precio: 20000000 },
  { id: 8, tipo: 2, marca: 5, modelo: "FZ250", precio: 8000000 },
  { id: 9, tipo: 2, marca: 5, modelo: "MT03", precio: 3000000 },
  { id: 10, tipo: 2, marca: 6, modelo: "Pistola", precio: 10000000 },
];

// Funciones

const getMarcaById = (marcaId) => {
  return marcas.find((marca) => marca.id === marcaId);
};

const ponerLindoLosVehiculos = (vehiculos) => {
  return vehiculos
    .map((vehiculo) => {
      const marca = getMarcaById(vehiculo.marca);
      return `ID: ${vehiculo.id} | ${marca.nombre} - ${vehiculo.modelo} | Precio: $${vehiculo.precio}\n`;
    })
    .join("");
};

const pedirTipo = () => {
  let tipo = -1; 

  while (tipo !== 0 && tipo !== 1 && tipo !== 2) {
    tipo = Number(prompt("¿Qué tipo de vehículo buscas? [1-autos / 2-motos / 0-salir]"));
    if (tipo !== 0 && tipo !== 1 && tipo !== 2) {
      alert("Por favor, ingrese una opción válida (1, 2 o 0 para salir).");
    }
  }

  return tipo;
}; 

const elegirVehiculo = (tipoVehiculo) => {
  if (tipoVehiculo === 0) {
    return;
  } else {
    const filteredVehiculos = vehiculos.filter((vehiculo) => vehiculo.tipo === tipoVehiculo);
    const mensaje = `Elige un auto para mostrar su precio. [0-salir]\n\n${ponerLindoLosVehiculos(filteredVehiculos)}`;
    return Number(prompt(mensaje));
  }
};

const procesarVehiculo = (vehiculoElegido, tipoVehiculo) => {
  if (vehiculoElegido === 0) {
    return;
  }

  const vehiculo = vehiculos.find((v) => v.id === vehiculoElegido && v.tipo === tipoVehiculo);

  if (vehiculo) {
    const marca = getMarcaById(vehiculo.marca);
    const mensaje = `ID: ${vehiculo.id}\nMarca: ${marca.nombre}\nModelo: ${vehiculo.modelo}\nPrecio: $${vehiculo.precio}\n`;
    alert(mensaje);
    mostrarMenuPrincipal(); // Regresar al menú principal
  } else {
    alert("Opción inválida");
    verVehiculos();
  }
};

// Nueva función para ordenar vehículos por precio
const ordenarPorPrecio = (vehiculos) => {
  return vehiculos.slice().sort((a, b) => a.precio - b.precio);
};

const verVehiculos = () => {
  const tipoVehiculo = pedirTipo();

  if (tipoVehiculo === 0) {
    return;
  }

  const vehiculoElegido = elegirVehiculo(tipoVehiculo);
  procesarVehiculo(vehiculoElegido, tipoVehiculo);
};

// Función para mostrar el menú principal
const mostrarMenuPrincipal = () => {
  const opcion = Number(prompt(" Bienvenido a Vehiculos Center (elija una opción)\n\n" +
    "1. Ver vehículos a la venta\n" +
    "2. Ordenar vehículos de menor a mayor precio\n" +
    "3. Salir\n" +
    "Seleccione una opción:"));

  switch (opcion) {
    case 1:
      verVehiculos();
      break;
    case 2:
      const vehiculosOrdenados = ordenarPorPrecio(vehiculos);
      alert(`Vehículos ordenados por precio:\n${ponerLindoLosVehiculos(vehiculosOrdenados)}`);
      mostrarMenuPrincipal(); // Regresar al menú principal
      break;
    case 3:
      alert("Gracias por visitar la Concesionaria. Hasta luego.");
      break;
    default:
      alert("Opción inválida");
      mostrarMenuPrincipal(); // Regresar al menú principal
  }
};

// Procesamiento
mostrarMenuPrincipal();

const tipos = [
    { id: 1, titulo: "auto" },
    { id: 2, titulo: "moto" },
  ];
  
  const vehiculos = [
    { id: 1, tipo: 1, marca: "Audi", modelo: "A1", precio: 4000000 },
    { id: 2, tipo: 1, marca: "Audi", modelo: "A3", precio: 20000000 },
    { id: 3, tipo: 1, marca: "Peugeot", modelo: "208", precio: 8000000 },
    { id: 4, tipo: 1, marca: "Chevrolet", modelo: "ONIX LTZ", precio: 3000000 },
    { id: 5, tipo: 1, marca: "Chevrolet", modelo: "CRUZE", precio: 10000000 },
    { id: 6, tipo: 2, marca: "Honda", modelo: "CR300", precio: 4000000 },
    { id: 7, tipo: 2, marca: "Honda", modelo: "CR250", precio: 20000000 },
    { id: 8, tipo: 2, marca: "Yamaha", modelo: "FZ250", precio: 8000000 },
    { id: 9, tipo: 2, marca: "Yamaha", modelo: "MT03", precio: 3000000 },
    { id: 10, tipo: 2, marca: "Zanela", modelo: "Pistola", precio: 10000000 },
  ];
  
  const context = {};
  
  
  //
  // Funciones
  //
  
  const ponerLindoLosVehiculos = (vehiculos) => {
    return vehiculos
        .map((vehiculo) => {
          let str = "";
          
          str += `ID: ${vehiculo.id} | `;
          str += `${vehiculo.marca} - ${vehiculo.modelo}\n`;
          return str;
        })
        .join("");
  };
  
  const pedirTipo = () => {
    return Number(
      prompt("Bienvenido a Vehiculos store\n\n¿Que tipo de vehiculo buscas? [1- AUTOS / 2- MOTOS / 0- SALIR]")
    );
  };
  
  const elegirVehiculo = (tipoVehiculo) => {
    if (tipoVehiculo === 0) {
      return;
    }
    else if (tipoVehiculo === 1) {
      return Number(
        prompt(
          `¿Que auto te gustaria ver? [0-salir]\n\n${ponerLindoLosVehiculos(vehiculos.filter((vehiculo) => vehiculo.tipo === 1))}`
        )
      );
    }
    else if (tipoVehiculo === 2) {
      return Number(
        prompt(
          `¿Que vehiculo queres? (Ingrese el ID) [0-salir]\n\n${ponerLindoLosVehiculos(vehiculos.filter((vehiculo) => vehiculo.tipo === 2))}`
        )
      );
    }
    else {
      alert("Opcion invalida");
      context.tipoVehiculo = null;
      concesionaria();
    }
  };
  
  const procesarVehiculo = (vehiculoElegido, tipoVehiculo) => {
    if (vehiculoElegido === 0) {
      return;
    }
  
    const vehiculo = vehiculos.find((vehiculo) => vehiculo.id === vehiculoElegido && vehiculo.tipo === tipoVehiculo);
  
    if (vehiculo) {
      let str = "";
          
      str += `ID: ${vehiculo.id}\n`;
      str += `Marca: ${vehiculo.marca}\n`
      str += `Modelo: ${vehiculo.modelo}\n`
      str += `Precio: $${vehiculo.precio}\n`;
  
      alert(str);
      context.tipoVehiculo = null;
    }
    else {
      alert("Opcion invalida");
    }
    
    context.vehiculoElegido = null;
    concesionaria();
  };
  
  const concesionaria = () => {
    if (!context.tipoVehiculo) {
      context.tipoVehiculo = pedirTipo();
    }
  
    if (!context.vehiculoElegido) {
      context.vehiculoElegido = elegirVehiculo(context.tipoVehiculo);
    }
    
    if (context.tipoVehiculo) {
      procesarVehiculo(context.vehiculoElegido, context.tipoVehiculo);
    }
  };
  
  
  //
  // Procesamiento
  //
  
  concesionaria();
  
    
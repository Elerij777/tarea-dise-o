// Ejercicio 1

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!respuesta.ok) {
            throw new Error("No se pudieron obtener los datos");
        }

        return await respuesta.json();

    } catch (error) {
        console.log(error);
    }
}

const usuarios = await obtenerUsuarios();

usuarios.forEach(usuario => {
    console.log(`Nombre: ${usuario.name} | Email: ${usuario.email}`);
});

// Ejercicio 2

function simularConsulta() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const numero = Math.floor(Math.random() * 100) + 1;

            console.log(numero);

            if (numero % 2 === 0) {
                resolve("Consulta realizada correctamente");
            } else {
                reject("No fue posible completar la consulta");
            }
        }, 3000);

    });
}

simularConsulta()
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

// Ejercicio 3

async function ejecutarProceso() {
    try {
        const resultado = await simularConsulta();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

ejecutarProceso();

// Ejercicio 4

const productos = [
    { nombre: "Televisor", precio: 500, categoria: "Electrónica" },
    { nombre: "Silla", precio: 100, categoria: "Muebles" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Mesa", precio: 200, categoria: "Muebles" },
    { nombre: "Auriculares", precio: 150, categoria: "Electrónica" }
];

const electronicos = productos.filter(
    producto => producto.categoria === "Electrónica"
);

const nombresProductos = electronicos.map(
    producto => producto.nombre
);

const sumaPrecios = electronicos.reduce(
    (acumulado, producto) => acumulado + producto.precio,
    0
);

console.log(electronicos);
console.log(nombresProductos);
console.log(sumaPrecios);

// Ejercicio 5

const tareas = [];

function agregarTarea(descripcion) {
    tareas.push({
        descripcion,
        estado: false
    });
}

function completarTarea(descripcion) {
    const tarea = tareas.find(
        elemento => elemento.descripcion === descripcion
    );

    if (tarea) {
        tarea.estado = true;
        console.log("Tarea completada");
    } else {
        console.log("La tarea no existe");
    }
}

function mostrarPendientes() {
    const pendientes = tareas.filter(
        tarea => !tarea.estado
    );

    if (pendientes.length === 0) {
        console.log("No existen tareas pendientes");
        return;
    }

    console.log("Pendientes:");

    pendientes.forEach(tarea => {
        console.log(`- ${tarea.descripcion}`);
    });
}

function mostrarCompletadas() {
    const completadas = tareas.filter(
        tarea => tarea.estado
    );

    if (completadas.length === 0) {
        console.log("No existen tareas completadas");
        return;
    }

    console.log("Completadas:");

    completadas.forEach(tarea => {
        console.log(`- ${tarea.descripcion}`);
    });
}

agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript");

completarTarea("Comprar leche");

mostrarPendientes();
mostrarCompletadas();
class Usuario {
  #id;

  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = [];
    this.#id = Math.floor(Math.random() * 10000); // ID privado
  }

  agregarAlCarrito(producto) {
    this.carrito.push(producto);
    console.log(`🛍️ ${this.nombre} agregó "${producto}" a su carrito.`);
  }

  verCarrito() {
    console.log(`🛒 Productos en el carrito de ${this.nombre}:`, this.carrito);
  }

  getId() {
    return this.#id;
  }

  // Polimorfismo
  mostrarInfo() {
    console.log(`👤 Usuario: ${this.nombre} (${this.correo})`);
  }
}

// --------------------------------------------

class Admin extends Usuario {
  constructor(nombre, correo, inventarioInicial = []) {
    super(nombre, correo);
    this.inventario = inventarioInicial;
  }

  agregarProducto(producto) {
    this.inventario.push(producto);
    console.log(`🧰 ${this.nombre} agregó "${producto}" al inventario.`);
  }

  eliminarProducto(producto) {
    const index = this.inventario.indexOf(producto);
    if (index !== -1) {
      this.inventario.splice(index, 1);
      console.log(`🗑️ ${this.nombre} eliminó "${producto}" del inventario.`);
    } else {
      console.log(`⚠️ "${producto}" no se encuentra en el inventario.`);
    }
  }

  mostrarInventario() {
    console.log(`📦 Inventario actual:`, this.inventario);
  }

  // Polimorfismo
  mostrarInfo() {
    console.log(`🛠️ Admin: ${this.nombre} (${this.correo})`);
  }
}

// --------------------------------------------
// ✅ EXTRA: ClienteVIP
class ClienteVIP extends Usuario {
  aplicarDescuento() {
    console.log(`💎 ${this.nombre} ha recibido un descuento especial del 10%.`);
  }

  // Polimorfismo
  mostrarInfo() {
    console.log(`💎 ClienteVIP: ${this.nombre} (${this.correo})`);
  }
}

// --------------------------------------------
// INSTANCIAS

const user1 = new Usuario("Neo", "neo@matrix.com");
const admin1 = new Admin("Hackerman", "hackerman@tech.com", ["Mouse", "Monitor", "Teclado"]);
const vip1 = new ClienteVIP("Trinity", "trinity@matrix.com");

// Usuario
user1.agregarAlCarrito("Teclado");
user1.verCarrito();

// Admin
admin1.mostrarInventario();
admin1.agregarProducto("Auriculares");
admin1.mostrarInventario();
admin1.eliminarProducto("Mouse");
admin1.mostrarInventario();

// Cliente VIP
vip1.agregarAlCarrito("Monitor 4K");
vip1.verCarrito();
vip1.aplicarDescuento();

// IDs
console.log("\n🆔 ID del usuario:", user1.getId());
console.log("🆔 ID del admin:", admin1.getId());
console.log("🆔 ID del VIP:", vip1.getId());

// Polimorfismo
console.log("\n=== 🧬 Polimorfismo en acción ===");
const usuarios = [user1, admin1, vip1];
usuarios.forEach(u => u.mostrarInfo());

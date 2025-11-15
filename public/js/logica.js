// capturar el evento del botón calcular
document.getElementById('btnCalcular').addEventListener('click', function() {
    // Obtener valores del formulario
  const nombre = document.getElementById('producto').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const tipo = document.getElementById('cliente').value.toLowerCase();
  const pago = document.getElementById('pago').value.toLowerCase();
  const resultado = document.getElementById('resultado');

  // Aplicar descuento según el tipo de cliente por Bárbara Rodas
  let descuento = 0;
  if (tipo === 'estudiante') {
      descuento = 0.20; // 20% de descuento
  } else if (tipo === 'adulto') {
      descuento = 0.10; // 10% de descuento
  } else if (tipo === 'jubilado') {
      descuento = 0.30; // 30% de descuento
  }
  // Operacion ternaria por Marcos Bajaña
  // Descuento adicional si paga en efectivo utilizando el operador ternario
  const descuentoAdicional = (pago === 'efectivo') ? 0.05 : 0;
  const descuentoTotal = descuento + descuentoAdicional;

  // Calcular precio final
  const precioFinal = precio - (precio * descuentoTotal);

  //Mensaje motivacional hecho por Ginger Banchon
  // Mensaje motivacional para cada tipo de cliente
  let mensaje = '';
  switch (tipo) {
      case 'estudiante':
          mensaje = '¡Sigue aprovechando los descuentos para estudiantes!';
          break;
      case 'adulto':
          mensaje = '¡Gracias por tu compra, disfruta tu descuento!';
          break;
      case 'jubilado':
          mensaje = '¡Gracias por tu experiencia, disfruta tu beneficio especial!';
          break;
      default:
          mensaje = '¡Gracias por preferirnos!';
  }

  // Mostrar resultado
  resultado.value = 
  `Producto: ${nombre}
  Precio original: $${precio.toFixed(2)}
  Descuento total: ${(descuentoTotal * 100).toFixed(2)}%
  Precio final: $${precioFinal.toFixed(2)}
  ${mensaje}`;
});

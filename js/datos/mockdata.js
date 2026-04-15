const MOCK_PRODUCTOS = [
    // ========== FRUTAS ==========
    {
        id: '1',
        nombre: 'Manzana Roja',
        precio: 890,
        stock: 150,
        marca: 'Del Valle',
        categoria: 'frutas',
        detalles: 'Manzanas rojas frescas, ideales para consumo directo o repostería. Origen Río Negro.',
        foto: 'https://placehold.co/300x300/fee2e2/dc2626?font=poppins&text=Manzana+Roja',
        envio: true
    },
    {
        id: '2',
        nombre: 'Banana Ecuador',
        precio: 750,
        stock: 200,
        marca: 'Tropical Fresh',
        categoria: 'frutas',
        detalles: 'Bananas importadas de Ecuador, punto justo de maduración.',
        foto: 'https://placehold.co/300x300/fef9c3/ca8a04?font=poppins&text=Banana',
        envio: true
    },
    {
        id: '3',
        nombre: 'Naranja de Jugo',
        precio: 650,
        stock: 180,
        marca: 'Citrus Sur',
        categoria: 'frutas',
        detalles: 'Naranjas jugosas perfectas para exprimir. Bolsa de 3kg.',
        foto: 'https://placehold.co/300x300/ffedd5/ea580c?font=poppins&text=Naranja',
        envio: true
    },
    {
        id: '4',
        nombre: 'Frutilla Fresca',
        precio: 1200,
        stock: 80,
        marca: 'Berry Farm',
        categoria: 'frutas',
        detalles: 'Frutillas seleccionadas, bandeja de 500g. Cultivo sustentable.',
        foto: 'https://placehold.co/300x300/fce7f3/db2777?font=poppins&text=Frutilla',
        envio: false
    },
    {
        id: '5',
        nombre: 'Pera Williams',
        precio: 980,
        stock: 120,
        marca: 'Del Valle',
        categoria: 'frutas',
        detalles: 'Peras Williams aromáticas y dulces. Origen Mendoza.',
        foto: 'https://placehold.co/300x300/dcfce7/16a34a?font=poppins&text=Pera',
        envio: true
    },
    {
        id: '6',
        nombre: 'Uva Negra',
        precio: 1450,
        stock: 60,
        marca: 'Viñas del Sol',
        categoria: 'frutas',
        detalles: 'Uvas negras sin semilla, dulces y crocantes. Bandeja de 750g.',
        foto: 'https://placehold.co/300x300/ede9fe/7c3aed?font=poppins&text=Uva+Negra',
        envio: false
    },
    {
        id: '7',
        nombre: 'Limón Tucumán',
        precio: 520,
        stock: 250,
        marca: 'Citrus Sur',
        categoria: 'frutas',
        detalles: 'Limones frescos de Tucumán, alto contenido de jugo.',
        foto: 'https://placehold.co/300x300/fef9c3/a16207?font=poppins&text=Limón',
        envio: true
    },

    // ========== VERDURAS ==========
    {
        id: '8',
        nombre: 'Tomate Redondo',
        precio: 780,
        stock: 200,
        marca: 'Huerta Verde',
        categoria: 'verduras',
        detalles: 'Tomates redondos maduros, ideales para ensaladas y salsas.',
        foto: 'https://placehold.co/300x300/fee2e2/b91c1c?font=poppins&text=Tomate',
        envio: true
    },
    {
        id: '9',
        nombre: 'Lechuga Criolla',
        precio: 420,
        stock: 100,
        marca: 'Huerta Verde',
        categoria: 'verduras',
        detalles: 'Lechuga criolla fresca, recién cosechada. Unidad.',
        foto: 'https://placehold.co/300x300/dcfce7/15803d?font=poppins&text=Lechuga',
        envio: false
    },
    {
        id: '10',
        nombre: 'Zanahoria',
        precio: 380,
        stock: 300,
        marca: 'Campo Natural',
        categoria: 'verduras',
        detalles: 'Zanahorias orgánicas, bolsa de 1kg. Sin agroquímicos.',
        foto: 'https://placehold.co/300x300/ffedd5/c2410c?font=poppins&text=Zanahoria',
        envio: true
    },
    {
        id: '11',
        nombre: 'Papa Negra',
        precio: 590,
        stock: 400,
        marca: 'Campo Natural',
        categoria: 'verduras',
        detalles: 'Papas negras seleccionadas, bolsa de 3kg. Origen Balcarce.',
        foto: 'https://placehold.co/300x300/fef3c7/92400e?font=poppins&text=Papa',
        envio: true
    },
    {
        id: '12',
        nombre: 'Cebolla Blanca',
        precio: 450,
        stock: 350,
        marca: 'Huerta Verde',
        categoria: 'verduras',
        detalles: 'Cebollas blancas de primera calidad. Bolsa de 2kg.',
        foto: 'https://placehold.co/300x300/fef9c3/854d0e?font=poppins&text=Cebolla',
        envio: true
    },
    {
        id: '13',
        nombre: 'Pimiento Rojo',
        precio: 920,
        stock: 90,
        marca: 'Huerta Verde',
        categoria: 'verduras',
        detalles: 'Pimientos rojos frescos, ideal para parrilla o rellenos.',
        foto: 'https://placehold.co/300x300/fee2e2/dc2626?font=poppins&text=Pimiento',
        envio: false
    },
    {
        id: '14',
        nombre: 'Espinaca',
        precio: 560,
        stock: 70,
        marca: 'Campo Natural',
        categoria: 'verduras',
        detalles: 'Espinaca fresca en atado. Cultivo hidropónico.',
        foto: 'https://placehold.co/300x300/d1fae5/047857?font=poppins&text=Espinaca',
        envio: false
    },

    // ========== COMBOS ==========
    {
        id: '15',
        nombre: 'Combo Ensalada',
        precio: 1850,
        stock: 40,
        marca: 'Connecticus',
        categoria: 'combos',
        detalles: 'Lechuga + Tomate + Cebolla + Zanahoria. Todo para tu ensalada.',
        foto: 'https://placehold.co/300x300/d1fae5/065f46?font=poppins&text=Combo+Ensalada',
        envio: true
    },
    {
        id: '16',
        nombre: 'Combo Frutal',
        precio: 2490,
        stock: 35,
        marca: 'Connecticus',
        categoria: 'combos',
        detalles: 'Manzana + Banana + Naranja + Pera. Mix de frutas para toda la semana.',
        foto: 'https://placehold.co/300x300/fef3c7/92400e?font=poppins&text=Combo+Frutal',
        envio: true
    },
    {
        id: '17',
        nombre: 'Combo Familiar',
        precio: 4200,
        stock: 25,
        marca: 'Connecticus',
        categoria: 'combos',
        detalles: 'Selección de 5kg de frutas y verduras variadas de temporada.',
        foto: 'https://placehold.co/300x300/ecfccb/3f6212?font=poppins&text=Combo+Familiar',
        envio: true
    },
    {
        id: '18',
        nombre: 'Combo Jugo Natural',
        precio: 1650,
        stock: 50,
        marca: 'Connecticus',
        categoria: 'combos',
        detalles: 'Naranja + Limón + Frutilla. Perfecto para jugos y licuados.',
        foto: 'https://placehold.co/300x300/ffe4e6/be123c?font=poppins&text=Combo+Jugo',
        envio: true
    }
]

// Contador autoincremental para nuevos productos
let _mockIdCounter = 100
function _nextMockId() {
    return String(++_mockIdCounter)
}

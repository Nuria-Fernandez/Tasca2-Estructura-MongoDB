
db.createCollection( 'Pedido', {validator: {$jsonSchema: {bsonType: 'object',title:'Pedido',required: [         'idPedido'],properties: {idPedido: {bsonType: 'objectId'},Pedido: {bsonType: 'array',items: {
title:'object',properties: {Producto: {bsonType: 'object',
title:'object',properties: {Tipo: {bsonType: 'object',
title:'object',properties: {Nombre: {bsonType: 'string'},Categoria: {bsonType: 'object',
title:'object',properties: {CategoriaPizza: {bsonType: 'object',
title:'object',},Nombre: {bsonType: 'string'}}}}},Precio: {bsonType: 'double'}}},Cantidad: {bsonType: 'int'},PrecioTotal: {bsonType: 'string'},FechaRegistro: {bsonType: 'timestamp'}}}},Cliente: {bsonType: 'object',
title:'object',properties: {idCliente: {bsonType: 'objectId'},Nombre: {bsonType: 'objectId'}}},Entrega: {bsonType: 'object',
title:'object',properties: {Tienda: {bsonType: 'string'},Domicilio: {bsonType: 'object',
title:'object',properties: {Calle: {bsonType: 'string'},Num: {bsonType: 'int'},Piso_Puerta: {bsonType: 'string'},CP: {bsonType: 'int'},Localidad: {bsonType: 'string'},Provincia: {bsonType: 'string'},Teléfono: {bsonType: 'int'},Notas: {bsonType: 'string'}}}}}}         }      }});  
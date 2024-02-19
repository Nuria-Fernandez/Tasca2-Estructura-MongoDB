
db.createCollection( 'Gafas', {validator: {$jsonSchema: {bsonType: 'object',title:'Gafas',required: [         'idGafas'],properties: {idGafas: {bsonType: 'objectId'},Marca: {bsonType: 'string'},Montura: {bsonType: 'string'},Proveedor: {bsonType: 'object',
title:'object',properties: {idProveedor: {bsonType: 'objectId'},Nombre: {bsonType: 'string'},Teléfono: {bsonType: 'int'},Direccion: {bsonType: 'object',
title:'object',properties: {Calle: {bsonType: 'string'},Num: {bsonType: 'int'},Piso_Puerta: {bsonType: 'string'},CP: {bsonType: 'int'},Ciudad: {bsonType: 'string'},Pais: {bsonType: 'string'}}},Email: {bsonType: 'string'},Nif: {bsonType: 'string'}}},Precio: {bsonType: 'double'},Venta: {bsonType: 'object',
title:'object',properties: {idVenta: {bsonType: 'objectId'},Cliente: {bsonType: 'object',
title:'object',properties: {idCliente: {bsonType: 'objectId'},Nombre: {bsonType: 'string'},NIF: {bsonType: 'string'},Direccion: {bsonType: 'object',
title:'object',properties: {Calle: {bsonType: 'string'},Num: {bsonType: 'int'},Piso_Puerta: {bsonType: 'string'},CP: {bsonType: 'int'},Ciudad: {bsonType: 'int'},Pais: {bsonType: 'string'}}},Telefono: {bsonType: 'int'},Email: {bsonType: 'string'},Fecha_Inscripción: {bsonType: 'date'}}},Empleado: {bsonType: 'object',
title:'object',properties: {idEmpleado: {bsonType: 'objectId'},Nombre: {bsonType: 'string'},NIF: {bsonType: 'string'}}},Fecha_Registro: {bsonType: 'date'}}}}         }      }});  
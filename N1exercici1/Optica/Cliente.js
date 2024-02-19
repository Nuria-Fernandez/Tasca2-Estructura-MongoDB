
db.createCollection( 'Cliente', {validator: {$jsonSchema: {bsonType: 'object',title:'Cliente',required: [         'idCliente'],properties: {idCliente: {bsonType: 'objectId'},Nombre: {bsonType: 'string'},DatosPersonales: {bsonType: 'object',
title:'object',properties: {Direccion: {bsonType: 'object',
title:'object',properties: {Calle: {bsonType: 'string'},Numero: {bsonType: 'int'},piso: {bsonType: 'string'},puerta: {bsonType: 'string'},CP: {bsonType: 'int'},Ciudad: {bsonType: 'string'},Pais: {bsonType: 'string'}}},Telefono: {bsonType: 'int'},email: {bsonType: 'string'},FechaNacimiento: {bsonType: 'date'}}},Compra: {bsonType: 'object',
title:'object',properties: {Gafas: {bsonType: 'object',
title:'object',properties: {Graduacion: {bsonType: 'object',
title:'object',properties: {Izquierdo: {bsonType: 'double'},Derecho: {bsonType: 'double'}}},ColorCristal: {bsonType: 'object',
title:'object',properties: {Izquierdo: {bsonType: 'string'},Derecho: {bsonType: 'string'}}},TipoMontura: {bsonType: 'string'},Precio: {bsonType: 'double'}}}}}}         }      }});  
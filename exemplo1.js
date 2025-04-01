const objSemProto = Object.create(null);
console.log(objSemProto.toString); // undefined
objSemProto.nome = "Carlos";
console.log(objSemProto.toString); // undefined
console.log(objSemProto.hasOwnProperty); // undefined
console.log(objSemProto.nome); // Carlos
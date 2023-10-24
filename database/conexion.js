var admin=require("firebase-admin");
var keys=require("../serviceAcountKeys.json");

admin.initializeApp({
    credential:admin.credential.cert(keys)
});

var micuenta=admin.firestore();
var conexion=micuenta.collection("miejemploBD");
var conexionpr=micuenta.collection("productosBD");

module.exports={
    conexion,
    conexionpr
};
//=========================
// Puerto
//==========================

process.env.PORT = process.env.PORT || 3000;


//=========================
// Entrono
//==========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=========================
// Vencimiento del token
//==========================
//60 segundos
//60 minutos
//24 horas
//30 días
process.env.CADUCIDAD_TOKEN = '48h';


//=========================
// SEED de autenticacion
//==========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//=========================
// Base de datos
//==========================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI; //Variable configurada en Keroku
}

process.env.urlDB = urlDB;

//=========================
// Google client ID
//==========================

process.env.CLIENT_ID = process.env.CLIENT_ID || '278909835213-tlet1n9mp9rur23kuskl14tsqghnl7ek.apps.googleusercontent.com';
const config = {

    dbUrl: process.env.DB_URL || 'mongodb+srv://gabo:Gabo1313@cluster0.ivsym.mongodb.net/Karla?retryWrites=true&w=majority',
    port: process.env.PORT || 3001,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app'

}

module.exports = config


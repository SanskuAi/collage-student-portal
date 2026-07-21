require("dotenv").config()
const app = require('./app')
const studentRoutes = require('./routes/studentRoutes')
// import ENV
const envConfig = require('./config/env')

                        //On using env => Benifites are GIVEn
// const PORT = process.env.PORT|| 5000
const PORT = envConfig.PORT
app.use('/api/student', studentRoutes)
app.listen(PORT ,()=>{
 console.log(`server stared ap port ${PORT}`); 
 console.log(`Express only Mode `); 
});
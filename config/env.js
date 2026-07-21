require('dotenv').config()

const envConfig = {
    PORT : process.env.PORT || 5000,
    NODE_ENV : process.env.NODE_ENV || 'development' ,
    JWT_SECRET : process.env.JWT_SECRET || 'your_secret_key',
    EMAIL_USER:process.env.EMAIL_USER || 'your_email@gmail.com',
    EMAIL_PASS:  process.env.EMAIL_PASS || 'your_app_password'
}
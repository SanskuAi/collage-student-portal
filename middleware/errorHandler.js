// Cetral  ERROR staion
const errorHandler = (err,req,res,next)=>{
    try{
        // ERROR status code
        const statusCode = err.statusCode || 500;

        // erro messs
        const message = err.message || "Somthing Wents  Wrong"

        console.error('Error:', {
            statusCode:statusCode ,
            message:message,
            stack: err.stack
        });

        res.status(statusCode).json({
            success: false,
            message:message ,

            ...(process.env.NODE_ENV ==='development' && {error : err})
        });

    } catch(error){
        console.error('error handler mein error', error)
        res.status(500).json({
            success:false,
            message:'Somethin went Wrong'
        });
    }
}

// app.use(errorHandler)

module.exports = errorHandler
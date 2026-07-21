const jwt = require('jsonwebtoken')

const genrateToken = (userId , email,role)=>{  //fxt 3re value leta haii
    try{ //in genreting token error found then server not crash 
        const token = jwt.sign({ //create jwt
              id: userId ,
              email : email,
              role :role
        }  ,
        process.env.JWT_SECRET || 'dafualt_secret_key' ,

           {expiresIn : '7d'}
    ) ;

    return token
    } catch (error) {
        console.error('token erroor' , error.message) ;
        throw error  //fxt immedatly stop
    }
}

// Verify token

const verifyToken = (token)=>{  //token recive
    try{
        const decoded = jwt.verify(
            token ,
            process.env.JWT_SECRET || 'default_secret_key'
        ) ;

        return decoded ;
    } catch (error){
                console.error('token verify error', error.message)
                return null ;  //fxt. normal wat to stop
    }
} ;

module.exports = {
    genrateToken ,
    verifyToken
}
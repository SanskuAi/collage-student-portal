// 6Digit otp genrate FXT.

const genrateOTP =  ()=>{
    const otp = Math.floor(100000 + Math.random()* 900000).toString()
    return otp
}

const otpExpiry = (minutes= 5)=>{
    const expiryTime = new Date(Date.now() +minutes*60*1000)
    return expiryTime ;
}

//OTP EXPIRED or NOt 
const isOTPExpired = (expiryTime)=>{
        //  corrent time comppare expiry time
    return new Date() > new Date(expiryTime)
} ;

module.exports={
    genrateOTP , otpExpiry , isOTPExpired
}
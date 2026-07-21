const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth :{
        user: process.env.EMAIL_USER ,
        pass: process.env.EMAIL_PASS,
    }
}) ;

const sendOTPEmail= async(userEmail, otp)=>{
    try{
        const mailOption ={
            from: process.env.EMAIL_USER,
            to: userEmail ,
            subject : 'Student Portal - Email Verification OTP',
            html :` 
           <div style="font-family: Arial, sans-serif; padding: 20px;"> <h2> Email Verification</h2>
            <p> OTP is that :-- </p>
            <h1 style="color: blue ;letter-spacing: 2px' >${otp}</h1>
            <p>Wtll OTP expired with iin 5-minutes</p>
            <p> If you'r not request , then Igonre It</p>
            </div>`
        }

            const  result = await transporter.sendMail(mailOption);;

            console.log('Mial sent Successfully', result.response);
            return true;

    } catch (error) {
        console.error('Email send error '. error.message)
        return false;
    }
};

// Welcome emaill
const sendWelcomeEmail =  async ( userEmail , userName)=>{
        try{
            const mailOptions = {
                from:'process.env.EMAIL_USER',
                to:'userEmail',
                subject:'Welcome to Student Portal',
                html:` 
                <div style="font-family: Arial, sans-serif; padding: 20px;"><h2>
                Wlcome${userName}</h2>
                <p>Student Portal , Registarion Done</p>
                <p> You'r applicable for Profile Update and Access a Courses</p>
                <p> Happ Learning !!</p>
                </div>
                `
            };

            const result = await transporter.sendMail(mailOptions);
            console.log('Welcome mail sent', result.response);
            return true
            
        } catch(error){ 
            console.error('Welcome email error' , error.message)
            return false
        }
};

module.exports={
    sendOTPEmail ,
    sendWelcomeEmail
}


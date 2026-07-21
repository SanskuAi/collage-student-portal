const { models } = require("mongoose");

const getFeeStatus = async (req,res)=>{
    try{
        const userId = req.user.id ;
        const {semester} = req.query ;

        // student fee status
        const feeStatus = {
            studentId : userId,
            semester: semester || 4 ,
            acdemicYear : '2023-24',
            totalFee : 100000,
            feeBreakdown: {
                tuition: 60000,
                hostel: 30000,
                activities: 5000,
                miscellaneous: 5000
              },
              paidAmount: 100000,
              pendingAmount: 0,
              status: 'paid',
              dueDate: '2024-05-31',
              lastPaymentDate: '2024-02-15'
            };

                res.status(200).json({
                    success: true ,
                    message : 'Fee status',
                    data: feeStatus
                })
        } catch(error){
            res.status(500).json({
                success:false,
                message:'Fee status fetch error'+ error.message
            })
        }
}

const getPaymentHistory = async (req,res)=>{
    try{
        const userId = req.user.id ;

        // payment HISTORY
        const paymentHistory ={
            studentId : userId,
            totalPayments : 2,
            payments :[
                {
                    id: 'PAY-001',
                    date: '2024-01-15',
                    amount: 50000,
                    semester: 4,
                    status: 'paid',
                    receipt: 'RCP-001',
                    paymentMethod: 'Online Transfer'  
                } ,

                {
                    id: 'PAY-002',
                    date: '2024-02-15',
                    amount: 50000,
                    semester: 4,
                    status: 'paid',
                    receipt: 'RCP-002',
                    paymentMethod: 'Credit Card'
                }
            ] ,

            totalPaid: 10000
        };

        res.status(200).json({
            success:true ,
            message:'Payment history ',
            data: paymentHistory
        });
    } catch(error){
        res.status(500).json({
            success:false,
            message:'paymnet history fetch error'+ error.message
        })
    }
}

const intiatePayment = async(req,res)=>{
    try{
        const userId = req.user.id;
        const{amount, semester}= req.body ;

        // validation
        if(!amount || !semester){
            return res.status(400).json({
                success: false ,
                message: 'Aomunt and Semster both are required'
            });
        }

        if(amount<= 0){
            return res.status(400).json({
                success: false,
                message: 'Amount must be greater that 0'
            })
        };

        // PAYMENT INTIATION
        const paymnetInitiation = {
            paymentId : 'PAY-' +Date.now(),
            studentId: userId ,
            amount : amount,
            semester: semester,
            status :'pending',
            initiatedAt : new Date(),
            gateway : 'Razorpay'
        } ;

        console.log('payment initiated', paymnetInitiation);
        
        req.status(200).json({
            success: true,
      message: 'Payment initiated. Payment gateway par redirect ho raha hai...',
      data: paymnetInitiation,
      redirectUrl : 'https://payment-gateway.example.com/pay/' + paymnetInitiation.paymentId
        });
    }catch(error){
        res.status(500).json({
            success: false,
      message: 'Payment initiation mein error: ' + error.message
        })
    };
}

module.exports = {
    getFeeStatus ,
    getPaymentHistory , intiatePayment
}
module.exports.generateOTP = (digit) => {

    // Declare a digits variable 
    // which stores all digits
    const digits = '0123456789';
    let otp = '';

    for (let i = 0; i < digit; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }

    return otp;
};
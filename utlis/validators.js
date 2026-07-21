// Limts of AUTGENTICATION

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/
    return passwordRegex.test(password)

}

const isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/
    return phoneRegex.test(phone)
}

const isValideName = (name) => {
    const nameRgex = /^[a-zA-Z\s]{2,50}$/
    return nameRgex.test(name)
}

// role valid or NOT 
const isValidRole = (role) => {
    const validRole = ['student', 'teacher', 'admin']
    return validRole.includes(role.toLowerCase());
}

// complet registration Data valideate here
const valideateRegisterData = (data) => {
    const { name, email, password, role } = data;

    // All Filed check
    if (!name || !email || !password || !role) {
        return {
            valid: false,
            message: ' All field required'
        }
    };

    // Name valid
    if (!isValideName(name)) {
        return {
            valid: false,
            message: 'Name only Letters and SPace are allow'
        }
    };

    // Email
    if (!isValidEmail(email)) {
        return {
            valid: false,
            message: 'enter valid email'
        }

    }


// Password strong?
if (!isValidPassword(password)) {
    return {
        valid: false,
        message: 'Password kam se kam 6 characters, 1 uppercase, 1 number hona chahiye'
    };
}

// Role valid?
if (!isValidRole(role)) {
    return {
        valid: false,
        message: 'Role sirf student/teacher/admin ho sakta hai'
    };
}

//   all right 
return {
    valid: true,
    message: 'All Process Done'
};
 };

module.exports = {
    isValidEmail,
    isValidPassword,
    isValidPhone,
    isValideName,
    isValidRole,
    valideateRegisterData
}
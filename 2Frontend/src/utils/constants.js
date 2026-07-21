// function app(){
//     return (
//         <div> 
//             <h1>hello</h1>
//         </div>
//     )
// }

// export default app



// ALL FIX VALUE WRRITEN it

// api base url
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// app name
export const APP_NAME =' Student Portal ' ;

// color massage
export const COLORS = {
    ERROR: '#c33',           // Dark red for errors
    SUCCESS: '#3a3',         // Dark green for success
    INFO: '#33a',            // Dark blue for info
    WARNING: '#a60',         // Dark orange for warnings
    
    ERROR_BG: '#fee',        // Light red background
    SUCCESS_BG: '#efe',      // Light green background
    INFO_BG: '#eef',         // Light blue background
    WARNING_BG: '#fee',      // Light orange background
  };

//   message type
export const MESSAGE_TYPES= {
    ERROR : 'error' ,
    SUCCESS : 'success',
    INFO: 'info',
    WARNING :'warning'
};

// user role
export const ROLE = {
    STUDENT: 'student',
    TEACHER: 'teacher',
    ADMIN: 'admin'
  };

//   routes
export const ROUTES={
    LOGIN: '/login',
    REGISTER: '/register',
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    ATTENDANCE: '/attendance',
    GRADES: '/grades',
    COURSES: '/courses',
    FEES: '/fees'
  };

//   validation rule
export const API_ENDPOINTS={
    // AUTH
    REGISTER : '/api/auth/register' ,
    SEND_OTP:'/api/auth/send-otp',
    VERIFY_OTP : '/api/auth/verify-otp',
    LOGIN : '/api/auth/login' ,

    // student
    GET_PROFILE: '/api/student/profile',
    UPDATE_PROFILE: '/api/student/profile',
    GET_DASHBOARD: '/api/student/dashboard',
    GET_ATTENDANCE: '/api/student/attendance',
    GET_GRADES: '/api/student/grades',
    GET_FEE_STATUS: '/api/student/fee-status',

    // course
    GET_COURSES: '/api/course/list',
    GET_MY_COURSES: '/api/course/my-courses',
    ENROLL_COURSE: '/api/course/enroll',
}

// default values
export const DEFAULT_VALUES ={
    ATTENDANCE_THRESHOLD : 75,
    LOADING_TIMEOUT : 5000  // 5sec
}
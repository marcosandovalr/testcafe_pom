import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.USER_STANDARD,  
        PASSWORD: process.env.PASS
    },
    INVALID_USER: {
        USERNAME: process.env.USER_INVALID,
        PASSWORD: process.env.PASS_INVALID
    },
    USER_DATA:{
        FIRSTNAME: 'Marco',
        LASTNAME: 'Sandoval',
        ZIP: '45609'
    }
}

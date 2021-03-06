import Token from '@/backend/helper/jwt';
import { DEFAULT_USER, DEFAULT_PASSWORD, DEFAULT_PRIVATE_KEY } from '@/constants/index';
interface Params {
    email: string,
    password: string
}

const login = async (params: Params) => {
    try {
        const defaultUser = DEFAULT_USER;
        const defaultPassword = DEFAULT_PASSWORD;
        let token;
        if (defaultUser === params.email && defaultPassword === params.password) {
            token = new Token(DEFAULT_PRIVATE_KEY)
                .generateTokenWithExpiry({ email: params.email }, "3600000")
            return Promise.resolve({ token })
        } else {
            return Promise.reject('Invalid user')
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

export {
    login
}
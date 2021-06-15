import shell from 'shelljs';
import Token from '@/backend/helper/jwt';
import {DEFAULT_PRIVATE_KEY} from '@/constants/index'
const executeCommand = (command: string,token:string) => {
    try {
        new Token(DEFAULT_PRIVATE_KEY).verifyToken(token);
        const response = shell.exec(command);
        if (response.stdout.length !== 0) {
            return Promise.resolve({ status: true, message: response.stdout, meta: response })
        } else {
            return Promise.resolve({ status: false, message: response.stderr, meta: response })
        }
    } catch (error) {
        return Promise.reject({ status: false, message: error.message || "Something went wrong !!" })
    }
}

export { executeCommand };
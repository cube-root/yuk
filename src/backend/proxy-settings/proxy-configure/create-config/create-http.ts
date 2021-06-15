const createHttp =  (upstream: string, server: string,accessLog:string) => `http {
    ${accessLog}
    ${upstream}
    ${server}
    
}`;

export default createHttp;
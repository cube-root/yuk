export default (accessLogLocation: string, flushTime: string) => {
    //     let logFormat = `log_format main '["$remote_addr", "$remote_user", "$time_local", "$request","$status","$body_bytes_sent","$http_referer","$http_user_agent","$http_x_forwarded_for"] ';
    //     access_log  ${accessLogLocation} main gzip flush=${flushTime};\n
    // `
    let logFormat = `log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                                        '$status $body_bytes_sent "$http_referer" '
                                        '"$http_user_agent" "$http_x_forwarded_for"';
                        access_log  ${accessLogLocation} main gzip flush=${flushTime};`
    return logFormat
}
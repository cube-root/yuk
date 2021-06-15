import createUpstream from './create-upstream';
import createServer from './create-server';
import createHttp from './create-http';
import createEvent from './create-event';
import addAccessLog from './add-access-log';
import { ACCESS_LOG_LOCATION, ACCESS_LOG_FLUSH_TIME } from '@/constants/index';
interface HostData {
    host: String,
    weight: String,
    type: String
}

const createConfig = (data: Array<HostData>, upstreamName: String, port: Number) => {
    const upstream = createUpstream(data, upstreamName);
    const server = createServer(port, upstreamName);
    const accessLog = addAccessLog(ACCESS_LOG_LOCATION, ACCESS_LOG_FLUSH_TIME)
    const http = createHttp(upstream, server, accessLog);
    const events = createEvent();
    return Promise.resolve(`${events}\n ${http}`);
}

export default createConfig;
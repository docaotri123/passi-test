import { ProxyHandler, APIGatewayEvent, ProxyResult } from 'aws-lambda';
import Response from '../utils/response';

type apiGatewayEvent = APIGatewayEvent;
type eventRequest = {
    event: apiGatewayEvent,
    requestData: any
}
type proxyHandler = ProxyHandler;
type proxyResult = ProxyResult;
type requestFunction = {
    event: eventRequest,
    res: Response
};

export {
    proxyHandler,
    apiGatewayEvent,
    eventRequest,
    proxyResult,
    requestFunction
}

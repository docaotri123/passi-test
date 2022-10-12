import { ProxyHandler, APIGatewayEvent, ProxyResult } from 'aws-lambda';
import { PrismaClient } from '@prisma/client'
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
type prismaClient = PrismaClient;

export {
    proxyHandler,
    apiGatewayEvent,
    eventRequest,
    proxyResult,
    requestFunction,
    prismaClient
}

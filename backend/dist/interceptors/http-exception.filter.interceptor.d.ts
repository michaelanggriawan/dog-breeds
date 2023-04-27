import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { PinoLogger } from 'nestjs-pino';
export declare class AllExceptionFilter implements ExceptionFilter {
    private readonly logger;
    constructor(logger: PinoLogger);
    logError(status: number, errorMessage: any): void;
    catch(exception: any, host: ArgumentsHost): Response<any, Record<string, any>>;
}

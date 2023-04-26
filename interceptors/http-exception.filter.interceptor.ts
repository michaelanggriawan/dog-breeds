/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

const DEFAULT_ERROR_MESSAGE =
  'Something went wrong on our end, please try again';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(
    @InjectPinoLogger(AllExceptionFilter.name)
    private readonly logger: PinoLogger,
  ) {}

  logError(status: number, errorMessage: any) {
    if (status >= 500) {
      this.logger.error(errorMessage);
    } else {
      this.logger.warn(errorMessage);
    }
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    if (!exception || typeof exception.getStatus !== 'function') {
      return response.status(500).json({
        statusCode: 500,
        success: false,
        // @ts-ignore
        errors: [{ message: DEFAULT_ERROR_MESSAGE }],
      });
    }

    // @ts-ignore
    const status = exception.getStatus();

    // @ts-ignore
    const errorMessage =
      exception.getResponse()?.message ||
      exception.message ||
      DEFAULT_ERROR_MESSAGE;

    this.logError(status, errorMessage);
    let handleErrorMessageResponse = [];
    if (typeof errorMessage === 'string') {
      handleErrorMessageResponse = [{ message: errorMessage }];
    } else if (Array.isArray(errorMessage)) {
      handleErrorMessageResponse = errorMessage.map((message) => {
        return { message };
      });
    }

    response.status(status).json({
      statusCode: status,
      success: false,

      // @ts-ignore
      errors: exception.getResponse()?.errors ?? handleErrorMessageResponse,
    });
  }
}

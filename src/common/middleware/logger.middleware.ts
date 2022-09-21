import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, nest: NextFunction) {
    console.log('Request logging via middleware ...', req.ip);
    nest();
  }
}

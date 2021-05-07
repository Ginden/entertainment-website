import type { Logger as PinoLogger } from 'pino';
import { Logger, QueryRunner } from 'typeorm';

export class TypeormLogger implements Logger {
  readonly #pino: PinoLogger;

  constructor(logger: PinoLogger) {
    this.#pino = logger;
  }

  public logQuery(
    query: string,
    parameters?: any[],
    queryRunner?: QueryRunner,
  ) {
    this.#pino.debug({
      msg: 'Query executed',
      typeorm: true,
      query,
      parameters,
      ...this.extractInfoFromQueryRunner(queryRunner),
    });
  }

  public logQueryError(
    error: string | Error,
    query: string,
    parameters?: any[],
    queryRunner?: QueryRunner,
  ) {
    this.#pino.error({
      msg: 'Query failed',
      typeorm: true,
      err: typeof error === 'string' ? new Error(error) : error,
      query,
      parameters,
      ...this.extractInfoFromQueryRunner(queryRunner),
    });
  }

  public logQuerySlow(
    time: number,
    query: string,
    parameters?: any[],
    queryRunner?: QueryRunner,
  ) {
    this.#pino.warn({
      typeorm: true,
      query,
      parameters,
      timeTook: time,
      ...this.extractInfoFromQueryRunner(queryRunner),
    });
  }

  public logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    this.#pino.info({
      typeorm: true,
      msg: message,
      ...this.extractInfoFromQueryRunner(queryRunner),
    });
  }

  public logMigration(message: string, queryRunner?: QueryRunner) {
    this.#pino.info({
      typeorm: true,
      msg: message,
      ...this.extractInfoFromQueryRunner(queryRunner),
    });
  }

  public log(
    level: 'log' | 'info' | 'warn',
    message: any,
    queryRunner?: QueryRunner,
  ) {
    this.#pino[level === 'log' ? 'info' : level]({
      typeorm: true,
      msg: message,
      ...this.extractInfoFromQueryRunner(queryRunner),
    });
  }

  private extractInfoFromQueryRunner(
    qr?: QueryRunner,
  ): Record<string, unknown> {
    if (!qr) {
      return {};
    }
    return {
      transaction: qr.isTransactionActive ?? false,
      connection: {
        name: qr.connection?.name ?? null,
      },
    };
  }
}

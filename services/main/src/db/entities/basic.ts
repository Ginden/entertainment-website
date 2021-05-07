import { BaseEntity, UpdateDateColumn } from 'typeorm';
import { CreateDateColumn } from 'typeorm/index';

export class Basic extends BaseEntity {
  @CreateDateColumn()
  public createdAt: Date = new Date();

  @UpdateDateColumn()
  public updateAt: Date = new Date();
}

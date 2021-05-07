import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/index';
import { v4 } from 'uuid';
import { JsonValidation } from '../helpers/simple-json-validation';
import { Basic } from './basic';

type StorageReference = {
  storage: string;
  path: string;
  details: object | null;
};

@Entity()
@JsonValidation<StorageReference>('storage', {
  path: {
    type: 'string',
    nullable: false,
  },
  storage: {
    nullable: false,
    type: 'string',
  },
  details: {
    type: 'object',
    nullable: true,
  },
})
export class Image extends Basic {
  @PrimaryGeneratedColumn('uuid')
  public id: string = v4();

  @Column({ type: 'jsonb' })
  public storage!: StorageReference;
}

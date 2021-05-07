import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { OneToMany } from 'typeorm/index';
import { v4 } from 'uuid';
import { AuthProvider } from './auth-provider';
import { Basic } from './basic';

@Entity()
@Unique(['email'])
export class User extends Basic {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string = v4();

  @Column({
    type: 'citext',
  })
  public readonly email!: string;

  @Column({
    type: 'varchar',
    length: 36,
  })
  public displayName: string = 'Anonymous';

  @OneToMany(() => AuthProvider, (object) => object.user)
  public providers?: AuthProvider[];
}

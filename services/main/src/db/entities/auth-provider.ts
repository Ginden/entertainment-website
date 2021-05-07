import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Column } from "typeorm/index";
import { OAuthProviders } from "../../enums/oauth-providers";
import { Basic } from "./basic";
import { User } from "./user";

@Entity()
export class AuthProvider extends Basic {
  @ManyToOne(() => User, user => user.providers, {
    primary: true,
  })
  public readonly user!: User;

  @PrimaryColumn({
    type: 'enum',
    enum: OAuthProviders
  })
  public readonly provider!: OAuthProviders;

  @Column({
    type: 'text'
  })
  public externalId: string;

  @Column({
    type: 'jsonb'
  })
  public details: Record<string, unknown> = {};
}

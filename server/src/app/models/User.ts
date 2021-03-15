import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import bcrypt from 'bcrypt';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isConfirmed: boolean;

  @Column('text', { nullable: true, select: false })
  passwordResetToken: string;

  @Column('text', { nullable: true })
  emailVerificationToken: string;

  @Column('timestamptz', { nullable: true, select: false })
  passwordResetExpires: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(): void {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}

export default User;

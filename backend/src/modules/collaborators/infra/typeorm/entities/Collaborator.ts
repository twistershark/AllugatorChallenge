import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('collaborators')
class Collaborator {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  job: string;

  @Column()
  cpf: string;

  @Column()
  uf: string;

  @Column()
  salary: number;

  @Column()
  status: string;

  @Column()
  signUpDate: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Collaborator;

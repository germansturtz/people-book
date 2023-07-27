// @ts-nocheck
import { UUID } from 'crypto';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Person {
    @PrimaryColumn({
        type: 'uuid',
    })
    id: UUID;

    @Column({ length: 100 })
    firstName: string;

    @Column({ length: 100 })
    lastName: string;

    @Column({ type: 'date' })
    birthdate: Date;
}

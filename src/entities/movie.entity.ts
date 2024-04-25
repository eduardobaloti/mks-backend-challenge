import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")
export class Movie {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    title: string

    @Column({ nullable: false })
    genre: string

    @Column({ nullable: false })
    year: number

    @Column({ nullable: false })
    director: string




}
// Creating a TypeORM Entity
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  // Create A Relation between two entities
  @JoinTable() // 👈 Join the 2 tables - only the OWNER-side does this
  @ManyToMany(
    (type) => Flavor,
    (flavor) => flavor.coffees, // what is "coffee" within the Flavor Entity
    {
      // Cascading Inserts (Add a new coffee with new flavor -> Create Flavor at the same time )
      cascade: true, // 👈 or optionally just insert or update ['insert']
    },
  ) // 👈
  flavors: string[];
}

/*
Generated Coffee table in PostgreSQL Database

+-------------+--------------+----------------------------+
|                          coffee                         |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| name   	    | varchar      |                            |
| brand       | varchar      |                            |
| flavors     | json         |                            |
+-------------+--------------+----------------------------+
*/

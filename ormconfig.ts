import { Movie } from "src/entities/movie.entity";
import { User } from "src/entities/user.entity";

import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { ConfigModule } from '@nestjs/config';


ConfigModule.forRoot()

const dbConfig: PostgresConnectionOptions =
{
    type: "postgres",
    database: process.env.DATABASE,
    host: "motty.db.elephantsql.com",
    port: 5432,
    username: process.env.DATABASE,

    password: process.env.PASSWORD,
    entities: [Movie, User],
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        },
    },
    synchronize: true

}

export default dbConfig;

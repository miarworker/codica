import {Module} from '@nestjs/common';
import {Connection, getConnectionOptions} from 'typeorm';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async () =>
                Object.assign(
                    await getConnectionOptions('dev'),
                    {
                        autoLoadEntities: true,
                    }
                ),
        }),
    ],
    exports: [TypeOrmModule],
})
export class DbModule {
    constructor(connection: Connection) {
        if (connection.isConnected) console.log('DB Connected Successfully!');
    }
}
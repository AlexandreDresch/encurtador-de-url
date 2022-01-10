import { config } from "config/Constants";
import mongoose from "mongoose";
export class MongoConection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONECTION, {useNewUrlParser: true, useUnifiedTopology: true})
            console.log('Database connected')
        } catch(err) {
            console.error(err.message)
            process.exit(1)
        }
    }
}
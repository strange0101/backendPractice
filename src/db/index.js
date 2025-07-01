import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connetDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`Database connected successfully: ${connectionInstance.connection.host}`);        
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); 
        
    }
}

export default connetDB;
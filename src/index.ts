import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { appDataSource } from './ormconfig';
import instituteRoutes from './routes/instituteRoute';
import schoolRoutes from './routes/schoolRoute';
import collegeRoutes from './routes/collegeRoute';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('api/institutes', instituteRoutes);
app.use('api/schools', schoolRoutes);
app.use('api/colleges', collegeRoutes);


appDataSource.initialize().then(() => {
    console.log("Database Connected..")
}).catch((error) => console.log("Database connection failed.. "));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
})
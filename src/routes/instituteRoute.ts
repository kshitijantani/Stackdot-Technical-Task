import { Router } from 'express';
import { Institute } from '../entities/institute';
import { appDataSource } from '../ormconfig';
const instituteRepo = appDataSource.getRepository(Institute);

const router = Router();

// Register institute
router.post('/register', async (req, res) => {
    try {
        const {name, type} = req.body;
        
        const newInstitute = instituteRepo.create({name, type});
        await instituteRepo.save(newInstitute);

        res.status(201).json(newInstitute);
    } catch (error) {
        res.status(500).json({error: "Server error"});
    }
})

// Get all institute
router.get('/', async (req, res) => {
    try {
        const institutes = await instituteRepo.find();

        res.status(200).json(institutes);
    } catch (error) {
        res.status(500).json({error: "Server error"});
    }
})

export default router;
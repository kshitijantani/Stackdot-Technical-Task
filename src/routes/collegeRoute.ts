import { Router } from 'express';
import { appDataSource } from '../ormconfig';
import { University } from '../entities/university';
import { Degree } from '../entities/degree';

const router = Router()
const universityRepo = appDataSource.getRepository(University);
const degreeRepo = appDataSource.getRepository(Degree);

// Get all registered universities list
router.get("/universities", async (req, res) => {
    const universities = await universityRepo.find();
    res.status(200).json(universities);
})

// Get degress for university
router.get('/degrees/:universityId', async (req, res) => {
    const { universityId } = req.params;
    const degrees = await degreeRepo.find({ where: { university: { id: parseInt(universityId) } } });
    res.status(200).json(degrees);
})

export default router;
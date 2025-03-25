import { Router } from 'express';
import { appDataSource } from '../ormconfig';
import { Board } from '../entities/board';
import { ClassCategory } from '../entities/classCategory';
import { Standard } from '../entities/standard';
import { Subject } from '../entities/subject';

const boardRepo = appDataSource.getRepository(Board);
const classCategoryRepo = appDataSource.getRepository(ClassCategory);
const standardRepo = appDataSource.getRepository(Standard);
const subjectRepo = appDataSource.getRepository(Subject);
const router = Router();

// Get all boards
router.get('/boards', async (req, res) => {
    try {
        const boards = await boardRepo.find();
        res.status(200).json(boards);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

// Get all class categories
router.get("/class-categories", async (req, res) => {
    try {
        const classCategories = await classCategoryRepo.find();
        res.status(200).json(classCategories);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

// Get standard for class category
router.get("/standards/:classId", async (req, res) => {
    try {
        const { classId } = req.params;
        const standards = await standardRepo.find({ where: { classCategory: { id: parseInt(classId) } } });
        res.status(200).json(standards);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
})

//Get subjects for a standard
router.get("/subjects/:standardId", async(req, res) => {
    try {
        const { standardId } = req.params;
        const subjects = await subjectRepo.find({ where: { standard: { id: parseInt(standardId) } } });
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

export default router;
import express from 'express';
import {
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
  deleteTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount
} from '../controllers/tourController.js';

const router = express.Router();

// Public routes - no authorization required
router.get('/', getAllTours);
router.get('/search', getTourBySearch);
router.get('/featured', getFeaturedTour);
router.get('/count', getTourCount);
router.get('/:id', getSingleTour);

// Public routes - anyone can create, update, delete tours
router.post('/', createTour);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour);

export default router;

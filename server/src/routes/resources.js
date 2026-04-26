import { Router } from 'express';
import * as resourceService from '../services/resourceService.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const filters = {
      category: req.query.category,
      subcategory: req.query.subcategory,
      type: req.query.type,
      difficulty: req.query.difficulty,
    };
    const resources = await resourceService.getAllResources(filters);
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Search query required' });
    }
    const resources = await resourceService.searchResources(q);
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/trending', async (req, res) => {
  try {
    const resources = await resourceService.getTrendingResources();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/new', async (req, res) => {
  try {
    const resources = await resourceService.getNewResources();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const resource = await resourceService.getResourceById(req.params.id);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json(resource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
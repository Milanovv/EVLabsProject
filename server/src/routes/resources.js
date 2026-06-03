import { Router } from 'express';
import * as resourceService from '../services/resourceService.js';
import * as saveService from '../services/saveService.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const filters = {
      category: req.query.category,
      subcategory: req.query.subcategory,
      type: req.query.type,
      difficulty: req.query.difficulty,
      limit: req.query.limit ? parseInt(req.query.limit) : undefined,
      offset: req.query.offset ? parseInt(req.query.offset) : undefined,
    };
    const result = await resourceService.getAllResources(filters);
    res.json(result);
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
    const filters = {
      limit: req.query.limit ? parseInt(req.query.limit) : undefined,
      offset: req.query.offset ? parseInt(req.query.offset) : undefined,
    };
    const result = await resourceService.searchResources(q, filters);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/trending', async (req, res) => {
  try {
    const filters = {
      limit: req.query.limit ? parseInt(req.query.limit) : undefined,
      offset: req.query.offset ? parseInt(req.query.offset) : undefined,
    };
    const result = await resourceService.getTrendingResources(filters);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/new', async (req, res) => {
  try {
    const filters = {
      limit: req.query.limit ? parseInt(req.query.limit) : undefined,
      offset: req.query.offset ? parseInt(req.query.offset) : undefined,
    };
    const result = await resourceService.getNewResources(filters);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/saved', authenticateToken, async (req, res) => {
  try {
    const resources = await saveService.getSavedResources(req.user.id);
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id/saved', authenticateToken, async (req, res) => {
  try {
    const saved = await saveService.isResourceSaved(req.user.id, parseInt(req.params.id));
    res.json({ saved });
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

router.post('/:id/vote', authenticateToken, async (req, res) => {
  try {
    const result = await resourceService.voteResource(req.params.id, req.user.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', authenticateToken, async (req, res) => {
  try {
    const resource = await resourceService.createResource(req.body);
    res.status(201).json(resource);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/:id/save', authenticateToken, async (req, res) => {
  try {
    const resource = await resourceService.getResourceById(req.params.id);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    const result = await saveService.saveResource(req.user.id, parseInt(req.params.id));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id/save', authenticateToken, async (req, res) => {
  try {
    const result = await saveService.unsaveResource(req.user.id, parseInt(req.params.id));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
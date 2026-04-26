import { Router } from 'express';
import * as authService from '../services/authService.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Email, password, and name are required' });
    }
    const user = await authService.registerUser(email, password, name);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const user = await authService.loginUser(email, password);
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.get('/me', authenticateToken, async (req, res) => {
  try {
    const user = await authService.getUserProfile(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post('/premium', authenticateToken, async (req, res) => {
  try {
    const success = await authService.upgradeToPremium(req.user.id);
    if (success) {
      res.json({ message: 'Upgraded to premium', isPremium: true });
    } else {
      res.status(400).json({ error: 'Upgrade failed' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/cancel', authenticateToken, async (req, res) => {
  try {
    const success = await authService.cancelPremium(req.user.id);
    if (success) {
      res.json({ message: 'Cancelled premium', isPremium: false });
    } else {
      res.status(400).json({ error: 'Cancel failed' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
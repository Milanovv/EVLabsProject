const API_BASE = '/api';

async function request(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_BASE}${endpoint}`, config);
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

export const auth = {
  async register(email, password, name) {
    return request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  },

  async login(email, password) {
    return request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  async me() {
    return request('/auth/me');
  },

  async upgrade() {
    return request('/auth/premium', {
      method: 'POST',
    });
  },
};

export const resources = {
  async getAll(filters = {}) {
    const params = new URLSearchParams(filters).toString();
    return request(`/resources${params ? `?${params}` : ''}`);
  },

  async getById(id) {
    return request(`/resources/${id}`);
  },

  async search(query) {
    return request(`/resources/search?q=${encodeURIComponent(query)}`);
  },

  async trending() {
    return request('/resources/trending');
  },

  async new() {
    return request('/resources/new');
  },
};

export default { auth, resources };
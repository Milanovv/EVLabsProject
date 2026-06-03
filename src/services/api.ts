/// <reference types="vite/client" />

const API_BASE: string = import.meta.env.VITE_API_URL || '/api';

async function request(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token');
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options.headers as Record<string, string> || {}),
    },
    ...options,
  };

  const response = await fetch(`${API_BASE}${endpoint}`, config);
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || `Request failed: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export const auth = {
  async checkEmail(email: string) {
    return request(`/auth/check-email?email=${encodeURIComponent(email)}`);
  },

  async register(email: string, password: string, name: string) {
    return request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  },

  async login(email: string, password: string) {
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

  async cancel() {
    return request('/auth/cancel', {
      method: 'POST',
    });
  },
};

export const resources = {
  async getAll(filters: Record<string, string> = {}) {
    const params = new URLSearchParams(filters).toString();
    return request(`/resources${params ? `?${params}` : ''}`);
  },

  async getById(id: number) {
    return request(`/resources/${id}`);
  },

  async search(query: string) {
    return request(`/resources/search?q=${encodeURIComponent(query)}`);
  },

  async trending() {
    return request('/resources/trending');
  },

  async new() {
    return request('/resources/new');
  },

  async related(category: string, excludeId: number) {
    return request(`/resources?category=${encodeURIComponent(category)}&exclude=${excludeId}`);
  },

  async save(id: number) {
    return request(`/resources/${id}/save`, {
      method: 'POST',
    });
  },

  async unsave(id: number) {
    return request(`/resources/${id}/save`, {
      method: 'DELETE',
    });
  },

  async getSaved() {
    return request('/resources/saved');
  },

  async isSaved(id: number) {
    return request(`/resources/${id}/saved`);
  },

  async vote(id: number) {
    return request(`/resources/${id}/vote`, {
      method: 'POST',
    });
  },

  async create(data: Record<string, unknown>) {
    return request('/resources', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

const api = { auth, resources };

export default api;
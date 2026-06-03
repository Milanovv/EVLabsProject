import { describe, it, expect } from 'vitest';
import { formatResource } from './formatResource.js';

describe('formatResource', () => {
  it('formats a standard row with JSON tags string', () => {
    const row = {
      id: 1,
      category: 'Programming/Development',
      subcategory: 'Guides and Tutorials',
      title: 'Test Resource',
      url: 'https://example.com',
      description: 'A test resource',
      tags: '["Beginner","Free"]',
      type: 'tutorial',
      difficulty: 'Beginner',
      is_premium: 0,
      is_trending: 1,
      is_new: 0,
      rating: '4.50',
      votes: 100,
    };

    const result = formatResource(row);

    expect(result).toEqual({
      id: 1,
      category: 'Programming/Development',
      subcategory: 'Guides and Tutorials',
      title: 'Test Resource',
      url: 'https://example.com',
      description: 'A test resource',
      tags: ['Beginner', 'Free'],
      type: 'tutorial',
      difficulty: 'Beginner',
      isPremium: false,
      isTrending: true,
      isNew: false,
      rating: 4.5,
      votes: 100,
    });
  });

  it('handles malformed tags JSON gracefully', () => {
    const row = {
      id: 2,
      category: 'Marketing',
      subcategory: 'Tools',
      title: 'Broken Tags',
      url: 'https://example.com',
      description: 'Bad tags',
      tags: '{invalid json',
      type: 'tool',
      difficulty: 'Beginner',
      is_premium: 0,
      is_trending: 0,
      is_new: 0,
      rating: '3.00',
      votes: 5,
    };

    const result = formatResource(row);
    expect(result.tags).toEqual([]);
  });

  it('handles undefined tags', () => {
    const row = {
      id: 3,
      category: 'Marketing',
      subcategory: 'Tools',
      title: 'No Tags',
      url: 'https://example.com',
      description: 'No tags',
      tags: undefined,
      type: 'tool',
      difficulty: 'Beginner',
      is_premium: 0,
      is_trending: 0,
      is_new: 0,
      rating: '3.00',
      votes: 5,
    };

    const result = formatResource(row);
    expect(result.tags).toEqual([]);
  });

  it('handles already-parsed tags array', () => {
    const row = {
      id: 4,
      category: 'Marketing',
      subcategory: 'Tools',
      title: 'Array Tags',
      url: 'https://example.com',
      description: 'Tags as array',
      tags: ['Tag1', 'Tag2'],
      type: 'tool',
      difficulty: 'Beginner',
      is_premium: 0,
      is_trending: 0,
      is_new: 0,
      rating: '3.00',
      votes: 5,
    };

    const result = formatResource(row);
    expect(result.tags).toEqual(['Tag1', 'Tag2']);
  });

  it('coerces boolean and number fields correctly', () => {
    const row = {
      id: 5,
      category: 'Test',
      subcategory: 'Test',
      title: 'Coercion Test',
      url: 'https://example.com',
      description: 'Testing type coercion',
      tags: '[]',
      type: 'faq',
      difficulty: 'Advanced',
      is_premium: 1,
      is_trending: 0,
      is_new: 1,
      rating: '4.75',
      votes: 0,
    };

    const result = formatResource(row);
    expect(result.isPremium).toBe(true);
    expect(result.isTrending).toBe(false);
    expect(result.isNew).toBe(true);
    expect(result.rating).toBe(4.75);
    expect(result.votes).toBe(0);
  });
});

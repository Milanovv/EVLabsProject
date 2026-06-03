import { describe, it, expect } from 'vitest';
import { validateEmail, validatePassword, validateUrl } from './validation.js';

describe('validateEmail', () => {
  it('accepts valid emails', () => {
    expect(() => validateEmail('user@example.com')).not.toThrow();
    expect(() => validateEmail('a.b@domain.co')).not.toThrow();
    expect(() => validateEmail('name+tag@company.org')).not.toThrow();
  });

  it('rejects invalid emails', () => {
    expect(() => validateEmail('')).toThrow('Invalid email format');
    expect(() => validateEmail('notanemail')).toThrow('Invalid email format');
    expect(() => validateEmail('@domain.com')).toThrow('Invalid email format');
    expect(() => validateEmail('user@')).toThrow('Invalid email format');
  });
});

describe('validatePassword', () => {
  it('accepts strong passwords', () => {
    expect(() => validatePassword('Password1')).not.toThrow();
    expect(() => validatePassword('Str0ng!Pass')).not.toThrow();
    expect(() => validatePassword('Abc12345xyz')).not.toThrow();
  });

  it('rejects short passwords', () => {
    expect(() => validatePassword('Ab1')).toThrow('Password must be at least 8 characters');
  });

  it('rejects passwords without uppercase', () => {
    expect(() => validatePassword('password1')).toThrow('Password must contain an uppercase letter');
  });

  it('rejects passwords without numbers', () => {
    expect(() => validatePassword('Password')).toThrow('Password must contain a number');
  });
});

describe('validateUrl', () => {
  it('accepts valid http and https URLs', () => {
    expect(() => validateUrl('https://example.com')).not.toThrow();
    expect(() => validateUrl('http://example.com')).not.toThrow();
    expect(() => validateUrl('https://www.google.com/search?q=test')).not.toThrow();
  });

  it('rejects empty URL', () => {
    expect(() => validateUrl('')).toThrow('URL is required');
  });

  it('rejects URLs with wrong protocol', () => {
    expect(() => validateUrl('ftp://example.com')).toThrow('Invalid URL format');
    expect(() => validateUrl('file:///path/to/file')).toThrow('Invalid URL format');
  });

  it('rejects invalid strings', () => {
    expect(() => validateUrl('not-a-url')).toThrow('Invalid URL format');
    expect(() => validateUrl('')).toThrow('URL is required');
  });
});

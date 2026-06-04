export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }
}

export function validateUrl(url) {
  if (!url) {
    throw new Error('URL is required');
  }
  try {
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      throw new Error();
    }
  } catch {
    throw new Error('Invalid URL format. Must be a valid http or https URL');
  }
}

export function validateVoteType(type) {
  const num = Number(type);
  if (num !== 1 && num !== -1) {
    throw new Error('Vote type must be 1 (helpful) or -1 (not really)');
  }
  return num;
}

export function validatePassword(password) {
  if (!password || password.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }
  if (!/[A-Z]/.test(password)) {
    throw new Error('Password must contain an uppercase letter');
  }
  if (!/[0-9]/.test(password)) {
    throw new Error('Password must contain a number');
  }
}

export const regex = {
  username: /^[a-zA-Z0-9_-]{3,16}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?!.*[?,]).[A-Za-z0-9._!]{8,}$/,
};
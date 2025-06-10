export const API_ENDPOINTS = {
  AUTH: {
    SIGIN: '/auth/signin',
    REGISTER: '/auth/register',
    REFRESH_TOKEN: '/auth/refresh-token',
    ME: '/auth/me',
  },
  CHARACTERS: {
    GET_ALL: '/characters',
    GET_BY_ID: (id: string) => `/characters/${id}`,
    CREATE: '/characters',
  },
  POSTS: {
    GET_ALL: '/posts',
    GET_BY_ID: (id: string) => `/posts/${id}`,
    CREATE: '/posts',
  },
  EVENTS: {
    GET_ALL: '/events',
    GET_BY_ID: (id: string) => `/events/${id}`,
    CREATE: '/events',
  },
} as const;
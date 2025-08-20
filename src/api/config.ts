const API_FIRSTPOINT= 'api/v1/';

export const API_ENDPOINTS = {
  AUTH: {
    SIGIN: `/${API_FIRSTPOINT}auth/signin`,
    REGISTER: `/${API_FIRSTPOINT}auth/register`,
    REFRESH_TOKEN: `/${API_FIRSTPOINT}auth/refresh-token`,
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
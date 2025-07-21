import { env } from '@/config/env'

import { createApiInstance } from './requestConfig'

export const requestApiLrHub = createApiInstance(env.VITE_API_LRHUB)

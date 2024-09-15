import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    LOCAL_FRONTEND_URL: z.string().url(),
    PRODUCTION_FRONTEND_URL: z.string().url(),
  },

  client: {
    // NEXT_PUBLIC_VAR: z.string(),
  },

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    LOCAL_FRONTEND_URL: process.env.LOCAL_FRONTEND_URL,
    PRODUCTION_FRONTEND_URL: process.env.PRODUCTION_FRONTEND_URL,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});

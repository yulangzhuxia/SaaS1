import { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

if(!process.env.DATABASE_URL) {
    console.log('Cannot find database url');
}

export default {
    schema: './src/lib/supabase/schema.ts',
    out: './migrations',
    // driver: 'pg',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL || '',
    },
} satisfies Config;
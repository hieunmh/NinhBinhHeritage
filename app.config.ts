import { ExpoConfig, ConfigContext } from 'expo/config'
import * as dotenv from 'dotenv'
dotenv.config()
export default ({ config }: ConfigContext): ExpoConfig => {
    return {
        ...config,
        slug: 'NinhBinhHeritage',
        name: 'NinhBinhHeritage',
        extra: {
            ...config.extra,
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseAnonKey: process.env.SUPABASE_ANON_KEY
        }
    }
}
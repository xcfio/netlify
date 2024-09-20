declare global {
    namespace NodeJS {
        interface ProcessEnv {
            URI: string
            JWT_SECRET: string
            COOKIE_SECRET: string
            SALT: string
        }
    }
}

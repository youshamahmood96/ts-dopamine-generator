import { JwtPayload } from "jsonwebtoken";

declare global{
  namespace NodeJS {
    interface ProcessEnv {
      DB_URI:string
      PORT:string
      JWT_SECRET:string
    }
}
}
declare module 'express-serve-static-core' {
  interface Request{
    decoded?:JwtPayload
  }
}
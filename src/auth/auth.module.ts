import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller"
import { AuthSevice } from "./auth.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({ 
    imports: [PrismaModule],
    controllers: [AuthController],
    providers: [AuthSevice]
})
export class AuthModule {}
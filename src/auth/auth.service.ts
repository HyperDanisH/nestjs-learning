import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthSevice {
    constructor(private prisma: PrismaService) {}
    signup() {
        return "Hello world! from signup page"
    }

    signin() {
        return "Hello world! from signin page"
    }
}
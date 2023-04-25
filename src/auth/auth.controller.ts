import { Controller, Post } from "@nestjs/common";
import { AuthSevice } from "./auth.service";
import { User, Bookmark } from "@prisma/client"

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthSevice) {}

    @Post("signup")
    signup() {
        return this.authService.signup()
    }

    @Post("signin")
    signin() {
        return this.authService.signin()
    }
}
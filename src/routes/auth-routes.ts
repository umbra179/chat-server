import { Router, Request, Response } from 'express';
import AuthHandler from '../handlers/auth-handler';

export default class AuthRoutes {
    router: Router;
    private authHandler: AuthHandler;

    constructor(router: Router) {
        this.router = router;
        this.authHandler = new AuthHandler();
    }

    include(): void {
        this.router.get('/register', (req: Request, res: Response) => { 
            this.authHandler.register(req, res) 
        });

        this.router.get('/getUsers', (req: Request, res: Response) => { 
            this.authHandler.getUsers(req, res) 
        });
    }
}
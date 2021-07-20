import { Router, Request, Response } from 'express';

export default class ChatRoutes {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    include(): void {
    }
}
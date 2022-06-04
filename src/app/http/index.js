import { Router } from 'express';
import { UserController } from './controller/user.controller.js';

const currentControllers = new Map();

currentControllers.set('users', UserController(Router()));

export { currentControllers };

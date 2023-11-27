import express from 'express';
import { tempTest, tempException } from '../controllers/temp.controller.js';

export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);

tempRouter.get('/exception/:flag',tempException);
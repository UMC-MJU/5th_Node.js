import express from "express";
import {ownerRestaurant,restaurantMission} from "../controllers/owner.controller.js";
import asyncHandler from 'express-async-handler';

export const ownerRouter = express.Router();

ownerRouter.post('/restraunt',asyncHandler(ownerRestaurant));
ownerRouter.post('/mission',asyncHandler(restaurantMission));

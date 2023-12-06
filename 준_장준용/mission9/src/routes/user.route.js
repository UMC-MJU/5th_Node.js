import express from "express";
import {userSignin,userReview,userMission}from "../controllers/user.controller.js";
import asyncHandler from 'express-async-handler';

export const userRouter = express.Router();

userRouter.post('/signin',asyncHandler(userSignin));
userRouter.post('/review',asyncHandler(userReview));
userRouter.post('/mission',asyncHandler(userMission));

// userRouter.get('/signin', asyncHandler(handleGetSignin));
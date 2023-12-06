import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import {joinUser,joinReview,joinMission} from "../services/user.service.js";

export const userSignin = async (req,res,next)=>{
    console.log("회원가입을 요청하였습니다!");
    console.log("body:",req.body.signin);

    res.send(response(status.SUCCESS, await joinUser(req.body)));
}
export const handleGetSignin = async (req, res) => {
    // Handle GET request for /user/signin
    res.send('GET request for /user/signin');
};
export const userReview= async (req,res,next)=>{
    console.log('리뷰를 요청하셨습니다');
    console.log("body:",req.body);
    res.send(response(status.SUCCESS, await joinReview(req.body)));
}

export const userMission = async(req,res,next)=>{
    console.log('미션도전을 요청하셨습니다');
    console.log("body",req.body);
    res.send(response(status.SUCCESS, await joinMission(req.body)));
}
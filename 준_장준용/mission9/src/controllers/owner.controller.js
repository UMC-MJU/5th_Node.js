import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import {joinRestaurant,joinRestaurantMission} from "../services/owner.service.js"


export const ownerRestaurant=async(req,res,next)=>{
    console.log("가게 추가를 요청하셨습니다")
    console.log("body",req.body);
    res.send(response(status.SUCCESS, await joinRestaurant(req.body)));
}
export const restaurantMission=async(req,res,next)=>{
    console.log("미션 추가를 요청하셨습니다")
    console.log("body",req.body);
    res.send(response(status.SUCCESS, await joinRestaurantMission(req.body)));
}
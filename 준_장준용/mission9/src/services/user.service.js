import { BaseError } from "../../config/error.js";
import {status} from "../../config/response.status.js"
import {signinResponseDTO,reviewResponseDTO} from "../dtos/user.dto.js"
import {addMissionToUser,addUser,getUser,getUserPreferToUserID,setPrefer,addReview} from "../models/user.dao.js"

export const joinUser = async (body) => {
    
    const prefer = body.prefer;

    const joinUserData = await addUser({
        'id': body.id,
        'email': body.email,
        'name': body.name,
        'nickname': body.nickname,
        'gender': body.gender,
        'birth_date': body.birth_date,
        'state':body.state,
        'phone': body.phone
    });

    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}

export const joinReview = async(body)=>{
    const joinReviewData = await addReview({
        'star' : body.star,
        'description' : body.text,
        'user' : body.user,
        'restraunt' : body.restaurant
    })
    if(joinReviewData == -1){
        throw new BaseError(status.REVIEW_ALREADY_EXIST);
    }else{
        return reviewResponseDTO(await addReview(joinReviewData));
    }
}
export const joinMission = async(body)=>{
    const joinMissionData = await addMissionToUser({
        'is_success':body.is_success,
        'key':body.key,
        'cost':body.cost,
        'state':body.state,
        'customer':body.customer,
        'mission':body.mission
    })
    if(joinMissionData == -1){
        throw new BaseError(status.MISSION_ALREADY_EXIST);
    }else{
        return missionResponseDTO(await addMission(joinMissionData));
    }
}
// //{
//     "email": "swaggerTest@mail.com",
//     "name": "swagger",
//     "nickname": "joon",
//     "gender": "M",
//     "birth_date": "2000-02-21",
//     "state": true,
//     "phone": "010-0000-0000",
//     "prefer": [
//       1,
//       3,
//       5
//     ]
//   }
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {addRestrauntResponsDTO} from "../dtos/owner.dto.js"
import {addRestraunt,addMissionToRestaurant} from "../models/owner.dao.js"


export const joinRestaurant = async (body)=>{
    const prefer = body.prefer;
    const joinRestaurantData = await addRestraunt({
        'id':body.id,
        'name' : body.name,
        'description' : body.description,
        'location' : body.location,
        'owner': body.owner
    });

    if(joinRestaurantData == -1){
        throw new BaseError(status.RESRETRAUNT_ALREDY_EXIT)
    }else{
        return addRestrauntResponsDTO(await addRestraunt(joinRestaurantData));
    }
}

export const joinRestaurantMission=async (body)=>{
    
    const joinMissionData= await addMissionToRestaurant({
        'id':body.id,
        'description':body.description,
        'reward':body.reward,
        'target_cost' : body.target_cost,
        'restaurant' : body.restaurant
    });
}

// INSERT INTO restaurant(id,name,description,location,owner) values(1,'만수식당','맛있어요','1',1);
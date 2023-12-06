import {pool} from "../../config/db.config.js"
import { BaseError } from "../../config/error.js"
import { status } from "../../config/response.status.js"
import { insertRestaurantSql,confirmLocation,insertLocationSql,insertMission} from "./owner.sql.js"

export const addRestraunt = async (data)=>{
    try{
        const conn =await pool.getConnection();
        const [confirm] = await pool.query(confirmLocation,[data.location])

        if(confirm[0].isNotExistLocation){
            const locationResult=await pool.query(insertLocationSql,[data.location,data.location_name]);
        }
        const result = await pool.query(insertRestaurantSql,[data.id,data.name,data.description,data.location,data.owner]);
        conn.release;
        return result[0].insertId;
    }catch(err){
        console.error(err);
        throw new BaseError(status.PARAMATER_IS_WRONG);
    }
}

export const addMissionToRestaurant = async (data)=>{
    try{
        const today=new Date();
        const currentDate = new Date(today.getFullYear(),today.getMonth() +1,today.getDate());
        const conn = await pool.getConnection();
        const result = await pool.query(insertMission,[data.id,data.description,data.reward,data.target_cost,currentDate,data.restaurant]);
    }catch(err){
        console.error(err);
        throw new BaseError(status.PARAMATER_IS_WRONG);
    }
}

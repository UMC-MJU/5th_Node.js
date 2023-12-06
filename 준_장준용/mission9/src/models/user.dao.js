import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { confrimMission,insertUseMission,insertReview,connectFoodCategory, confirmEmail,confrimUserFromReview, getUserID, insertUserSql, getPreferToUserID } from "./user.sql.js";

//user review 추가
export const addReview = async (data)=>{
    try{
        const conn = await pool.getConnection();
        const [confirm] = await pool.query(confrimUserFromReview,[data.user,data.restaurant]);
        if(confirm[0].isUser){
            conn.release();
            return -1;
        }
        const result = await pool.query(insertReview,[data.star,data.description,data.user,data.restaurant]);
        conn.release();
        return result[0].insertId;
    }catch(err){
        console.error(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
//user mission 추기
export const addMissionToUser = async (data) =>{
    try{
        const today=new Date();
        const conn = await pool.getConnection();
        const [confirm]= await pool.query(confrimMission,[data.customer,data.mission]);
        if(confirm[0].isMission){
            conn.release();
            return -1;
        }
        const result = await pool.query(insertUseMission,[data.is_success,data.key,data.cost,today,data.state,data.customer,data.mission]);
    }catch(err){
        console.error(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
//user data 추가
export const addUser = async (data) => {
    try{
        const today=new Date();

        const currentDate = new Date(today.getFullYear(),today.getMonth() +1,today.getDate());
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(confirmEmail, [data.email]);

        if(confirm[0].isExistEmail){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertUserSql, [data.id,data.email, data.name, data.nickname,data.gender, data.birth_date, currentDate,data.state, data.phone]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        console.error(err); // 실제 오류 내용을 콘솔에 출력해 디버깅에 도움을 줄 수 있습니다.
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자 정보 얻기
export const getUser = async (userId) => {
    try {
        const conn = await pool.getConnection();
        const [user] = await pool.query(getUserID, userId);

        console.log(user);

        if(user.length == 0){
            return -1;
        }

        conn.release();
        return user;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const setPrefer = async (userId, foodCategoryId) => {
    try {
        const conn = await pool.getConnection();
        
        await pool.query(connectFoodCategory, [foodCategoryId, userId]);

        conn.release();
        
        return;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);

    }
}

// 사용자 선호 카테고리 반환
export const getUserPreferToUserID = async (userID) => {
    try {
        const conn = await pool.getConnection();
        const prefer = await pool.query(getPreferToUserID, userID);

        conn.release();

        return prefer;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
import { BaseError } from "../../error.js";
import { status } from "../../config/response.status.js";
import {flagResponseDTO} from "../dtos/temp.response.dto.js";

export function CheckFlag(flag){
    if(flag == 1)
        throw new BaseError(status.BAD_REQUEST);   // 에러 발생시키기!
    else{
        return flagResponseDTO(flag);
    }
}
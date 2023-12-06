// response.status.js

import { StatusCodes } from "http-status-codes";

export const status = {
    // success
    SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": 2000, "message": "SUCCESS!"},

    // error
		// common err
    INTERNAL_SERVER_ERROR: {status: StatusCodes.INTERNAL_SERVER_ERROR, "isSuccess": false, "code": "COMMON000", "message": "서버 에러, 관리자에게 문의 바랍니다." },
    BAD_REQUEST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "COMMON001", "message": "잘못된 요청입니다." },
    UNAUTHORIZED: {status: StatusCodes.UNAUTHORIZED, "isSuccess": false, "code": "COMMON002", "message": "권한이 잘못되었습니다." },
    METHOD_NOT_ALLOWED: {status: StatusCodes.METHOD_NOT_ALLOWED, "isSuccess": false, "code": "COMMON003", "message": "지원하지 않는 Http Method 입니다." },
    FORBIDDEN: {status: StatusCodes.FORBIDDEN, "isSuccess": false, "code": "COMMON004", "message": "금지된 요청입니다." },
    
    REVIEW_ALREADY_EXIST:{status: StatusCodes.BAD_REQUEST, "isSuccess": false,"code":"COMMON006","message":"리뷰가 존재합니다"},
    MISSION_ALREADY_EXIST:{status: StatusCodes.BAD_REQUEST, "isSuccess": false,"code":"COMMON007","message":"미션이 존재합니다"},
    RESRETAURANT_ALREDY_EXIT:{status: StatusCodes.BAD_REQUEST, "isSuccess": false,"code":"COMMON008","message":"식당이 존재합니다"},
		// member err
    MEMBER_NOT_FOUND: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MEMBER4001", "message": "사용자가 없습니다."},
    NICKNAME_NOT_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MEMBER4002", "message": "닉네임은 필수입니다."},
    EMAIL_ALREADY_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "MEMBER4003", "message": "이미 존재하는 이메일입니다."},
    // article err
    ARTICLE_NOT_FOUND: {status: StatusCodes.NOT_FOUND, "isSuccess": false, "code": "ARTICLE4001", "message": "게시글이 없습니다."}

};

// // http-status-codes 사용
// SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": 2000, "message": "success!"},

// // http-status-codes 미사용 (정수 값 대입)
// SUCCESS: {status: 200, "isSuccess": true, "code": 2000, "message": "success!"},
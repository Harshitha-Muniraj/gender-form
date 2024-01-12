
import { USER_NAME,USER_EMAIL } from "./ActionTypes"

export const updateName=(name)=>{
    return {
        type:USER_NAME,
        payload:name
    }
}

export const updateEmail=(email)=>{
    return {
        type:USER_EMAIL,
        payload:email
    }
}
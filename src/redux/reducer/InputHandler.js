import { USER_EMAIL,USER_NAME } from "../actions/ActionTypes";

const initialState={
    name:'',
    email:""
}
const InputHandler=(state=initialState,action)=>{
    switch (action.type) {
        case USER_NAME:
            return {...state,name:action.payload}
            break;
        case USER_EMAIL:
            return {...state,email:action.payload}
            break;
        
        default:
            return state
            break;
    }
}
export default InputHandler;

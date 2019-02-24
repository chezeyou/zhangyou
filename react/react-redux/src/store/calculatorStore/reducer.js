import state from './state'
const reducer=(prevState=state,action)=>{
    let newData={...prevState}
     switch(action.type){
         case "CHANGE_EXPRESSION" :
         if(action.numtype==='prev'){
            newData.prevNum=Number(action.val)
         }else{
            newData.nextNum=Number(action.val)
         }
         break;
         case "SUM_EXPRESSION":
           newData.resultNum=newData.prevNum+newData.nextNum
         break;
         default:
         break;
     }
    return  newData
}
export default reducer
import state from './state'
const reducer=(prevState=state,action)=>{
    let newData={...prevState}
    //根据action 
    //处理数据
    switch(action.type){
        case 'ADD_LIST':
         newData.todolist.push({id:getMaxId(newData.todolist),title:action.title,isFinish:false})
        break;
        case 'DELETE_LIST':
        newData.todolist=delById(newData.todolist,action.id)
        break;
        case 'FINISH_LIST':
        newData.todolist=finishById(newData.todolist,action.id)
        break;
        default:
        break;
    }
    //返回数据

    localStorage.todolist=JSON.stringify(newData.todolist)
    return newData
}
function delById(arr,id){
 let result=  arr.filter((item)=>{
        if(item.id===id){
            return false
        }else{
            return true
        }
    })
  return result
}
function getMaxId(arr){
  let num=0;
  for(let i=0;i<arr.length;i++){
       if(arr[i].id>=num){
           num=arr[i].id
       }
  }
  return num+1
}
function finishById(arr,id){
  
    for(let i=0;i<arr.length;i++){
        if(arr[i].id===id){
          arr[i].isFinish=true
        }
   }
   console.log(arr)
   return arr
}
export default reducer
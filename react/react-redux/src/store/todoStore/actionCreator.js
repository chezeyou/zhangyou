
const actionCreator={
   addlist(title){
      let action={
          type:'ADD_LIST',
          title:title
      }
      return action
   },
   delete(id){
    let action={
        type:'DELETE_LIST',
        id:id
    }
    return action
   },
   finish(id){
       console.log('action')
     let action={
         type:'FINISH_LIST',
         id:id
     }
     return action
   }
}

export default actionCreator
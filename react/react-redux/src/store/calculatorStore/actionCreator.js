import store from "../store";

const actionCreator={
    changePrev(numtype,val){
      let action={
          type:'CHANGE_EXPRESSION',
          numtype:numtype,
          val:val
      }
      store.dispatch(action)
    },
    sumNum(){
        let action={
            type:'SUM_EXPRESSION',

        }
        store.dispatch(action)  
    }

}
export default actionCreator
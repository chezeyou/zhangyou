import React from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect}  from 'react-router-dom'
import Home from '../page/home/home'
import Login from '../page/login/login'
import NotFond from './notFond'
import Goods from '../components/goods/goods'
import Line1 from '../components/staticChart/line'
import Bar1 from '../components/staticChart/bar'
import Bar2 from '../components/staticChart/bar1'
// import Bie1 from '../components/staticChart/bie'
class all extends React.Component{


    render(){
        return(
           <Router>
               <div>
                   <Switch>
                        <Route exact={true} path='/' >
                            <Redirect to='/login'></Redirect>
                        </Route>
                        <Route path='/admin/:id' render={(props)=>{
                            return(
                                <Home {...props}>
                                    <Switch>
                                        <Route path='/admin/line1' component={Line1}></Route>
                                        <Route path='/admin/bar1' component={Bar1}></Route>
                                        <Route path='/admin/bar2' component={Bar2}></Route>
                                        {/* <Route path='/admin/bie1' component={Bie1}></Route> */}
                                        <Route path='/admin/' component={Goods}></Route>
                                        <Route path='/admin/home' component={Home}></Route>
                                        <Route path='/admin/data' component={Goods}></Route>
                                        <Route path='/admin/goods/list' component={Goods}></Route>
                                        <Route path='/admin/goods/add' component={Goods}></Route>
                                        <Route path='/admin/goods/updata' component={Goods}></Route>
                                        <Route path='/admin/user/list' component={Goods}></Route>
                                        <Route path='/admin/user/add' component={Goods}></Route>
                                        <Route path='/admin/user/updata' component={Goods}></Route>
                                        <Route path='/admin/banner/list' component={Goods}></Route>
                                        <Route path='/admin/banner/add' component={Goods}></Route>
                                        <Route path='/admin/banner/updata' component={Goods}></Route>
                                        <Route  component={NotFond}></Route>
                                    </Switch>
                                </Home>
                            )
                        }} ></Route> 
                        <Route path='/login' component={Login}></Route>
                        <Route  component={NotFond}></Route>
                        
                   </Switch>   
               </div>    
           </Router>
            )
    }
}
export default all
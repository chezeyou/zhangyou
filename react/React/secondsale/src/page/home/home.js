import React from 'react'
import NavList from '../../components/navList'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './home.less'
class Home extends React.Component{
    render(){
        console.log(this)
        console.log(this.props.match.params.id)
        return(
            <div className='home'>
                <div className="left">
                  <NavList></NavList>
                </div>
                <div className="right">
                 <Header id={this.props.match.params.id} {...this.props}></Header>
                 <div className='center'>
                    {this.props.children}
                 </div>
                 <Footer></Footer>
                </div>
            </div>
            )
    }
}
export default Home
import React,{Component} from "react";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import ToggleButton from "./ToggleButton";

class Main extends Component{
    
    state = {
        loginStatus: false
    }

    handleLoginLogOut = () => {
         this.setState({
            loginStatus:!this.state.loginStatus
         })
                
    }
    
    render(){
        return (
            <div className="w-10/12 h-96 bg-purple-200 md:w-6/12 flex flex-col rounded-lg shadow-xl">
                {this.state.loginStatus?<LoggedIn />:<LoggedOut/>}
                <ToggleButton fn={this.handleLoginLogOut} />
            </div>
        );
    }
}

export default Main;
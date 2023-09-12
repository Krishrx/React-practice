import React,{Component} from "react";
import FetchButton from "./FetchButton";
import FetchData from "./FetchData";

class Main extends Component{

     state = {
         fetchedData: 'uff Bored!!',
         isLoading: false,
     }

    fetchData = async () => {
        this.setState({ isLoading: true });
        await this.getData();
        this.setState({ isLoading: false });
    }


    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }


    async getData() {
        await this.delay(5000); 
        const response = await fetch('http://www.boredapi.com/api/activity/');
        const data = await response.json();
        this.setState({
            fetchedData:data.activity
        })
    }
 
    render() {
        const { isLoading, fetchedData } = this.state;
        return (
            <div className="w-10/12 h-96 bg-purple-50 md:w-6/12 flex flex-col rounded-lg shadow-xl">

                {isLoading && (
                    <div role="status" className="animate-pulse w-full h-full p-4 pt-12 flex flex-col items-center  text-center">
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div>
                        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-[25%] mb-4"></div>
                    </div>
                )}

                {!isLoading && (<FetchData data={fetchedData} />)}
                <FetchButton fn={this.fetchData} />
            </div>
        );
    }
}

export default Main;
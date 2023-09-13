import React, { Component } from 'react'
import TextBox from '../shared/TextBox'
import SubmitBtn from './SubmitBtn'

class Main extends Component {

    state = {
        name: '',
        pwd:''
    }

    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        if (e.target.name === 'firstName') {
            this.setState({
                name: e.target.value
           })
        }
        else if (e.target.name === 'pwd') {
            this.setState({
                pwd:e.target.value
            })
        }
    }

    handleSubmit = () => {
        alert(this.state.name + ' ' + this.state.pwd);
        this.setState({
            name:'',
            pwd:''
        })
    }



    render() {
        return (
            <div className='w-full h-screen bg-pink-50 flex flex-col justify-center items-center'>
                <div className='w-11/12 bg-pink-100 p-5 md:w-6/12'>
                    <TextBox type={'text'} name={'firstName'} labelName={'FirstName'} fn={this.handleChange} value={this.state.name} />
                    <TextBox type={'password'} name={'pwd'} labelName={'Password'} fn={this.handleChange}/>
                    <SubmitBtn fn={this.handleSubmit} value={this.state.pwd}/>
                </div>
                
            </div>
        )
    }
}

export default Main
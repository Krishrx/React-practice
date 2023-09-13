import React, { Component } from 'react'

class Main extends Component {
    
    state = {
        top: 0,
        left:0
    }
    handleHover= (e) => {
        let newTop = Math.floor(Math.random() * 500);
        let newLeft = Math.floor(Math.random() * 500);
        this.setState({
            top: newTop,
            left: newLeft
        })

    }
    render() {
        const { top, left } = this.state;
        let style = `relative cursor-pointer p-5 bg-pink-600 top-[${top}px] left-[${left}px] w-fit m-5`;
    return (
    <div className={style} onMouseEnter={this.handleHover}>
        Hover over me  
    </div>
    )
}
}

export default Main
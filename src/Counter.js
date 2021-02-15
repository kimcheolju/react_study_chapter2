import React, { Component } from 'react'

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    }

    render() {
        const {number, fixedNumber} = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값:{fixedNumber}</h2>
                <button
                // onclick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
                onClick={()=>{
                    //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
                    this.setState({
                        number: number + 1
                    }, ()=>{
                        console.log('조금 전 setState가 실행되었습니다.');
                        console.log(this.state);
                    })
                }}
                >
                  + 1  
                </button>
            </div>
        )
    }
    
}

export default Counter;
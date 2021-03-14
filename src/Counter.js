import React, { useReducer, useState } from 'react';

function reducer(state, action) {
    // action.type에 따라 다른 작업 수행
    switch (action.type) {
        case 'INCREAMENT':
            return {value: state.value + 1};
        case 'DECREAMENT':
            return {value:state.value -1};
        default:
            // 아무것도 해당되지 않으면 기존상태 반영
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    return (
        <div>
            <p>
                현재 카운터 값은 <b> { state.value } 입니다.</b>
            </p>
            <button onClick={()=>dispatch({type: 'INCREAMENT'})}>+1</button>
            <button onClick={()=>dispatch({type: 'DECREAMENT'})}>-1</button>
        </div>
    );
};

export default Counter;
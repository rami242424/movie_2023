import React from "react";

class Detail extends React.Component{
    componentDidMount(){ // 1. Detail 컴포넌트가 마운트되면
        const { location, history } = this.props; // 2. 구조 분해 할당으로 location, history를 얻고
        
        if (location.state === undefined) { // 3. location.state가 없는 경우
            history.push('/'); // 4. Home으로 이동시키기
        }
    }

    render(){
        const { location } = this.props;
        if (location.state){
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;
import React from 'react';

class Detail extends React.Component{
    //디테일 컴포넌트가 마운트 되면
    componentDidMount(){
        //movies.js <LINK>태그에서 데이터 전송
        const  {location, history} = this.props;
        if(location.state == undefined){
            history.push('/');
        }//end if
    }//end com
    

    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        }else{
            return null;
        }//end if
        
    }//end ren
}//end class

export default Detail;
import React from 'react';
import { Button } from 'antd';
class Choice extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answerNum: [1],
        }
    }
    addNum = () => {
        const { answerNum } = this.state;
        let tempArr = answerNum;
        tempArr.push(1);
        this.setState({
            answerNum: tempArr
        })
    }
    deleteNum = () => {
        const { answerNum } = this.state;
        let tempArr = answerNum;
        tempArr.pop();
        this.setState({
            answerNum: tempArr
        })
    }
    render(){
       const { answerNum } = this.state;
        return(
            <div>
                <div style={{marginBottom: '8px', marginTop: '8px'}}>
                    <Button type="primary" ghost onClick={this.addNum}> 增加解答题数量 </Button>
                    <Button type="danger" ghost disabled={answerNum.length === 0} onClick={this.deleteNum}>减少解答题数量</Button>
                </div>
                {
                    answerNum.map((item, index) => (
                        <div key={index}>
                            <p>解答题</p>
                            <div style={{border: '1px solid #000', width: '300px', height: '50px', marginBottom: '8px'}}>

                            </div>
                        </div>

                    ))
                }
                
            </div>
        )
    }
}
export default Choice;

  
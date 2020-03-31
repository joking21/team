import React from 'react';
import { Button } from 'antd';
class ExaminationPermitNo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            examinationNum: [1,1,1],
        }
    }
    addNum = () => {
        const { examinationNum } = this.state;
        let tempArr = examinationNum;
        tempArr.push(1);
        this.setState({
            examinationNum: tempArr
        })
    }
    deleteNum = () => {
        const { examinationNum } = this.state;
        let tempArr = examinationNum;
        tempArr.pop();
        this.setState({
            examinationNum: tempArr
        })
    }
    render(){
       const { examinationNum } = this.state;
        return(
            <div className="examination">
                <div style={{marginBottom: '8px'}}>
                    <Button type="primary" ghost onClick={this.addNum}> 添加准考证号位数 </Button>
                    <Button type="danger" ghost disabled={examinationNum.length === 0} onClick={this.deleteNum}>减少准考证号位数</Button>
                </div>
                <div>
                    <p style={{width: `${50*examinationNum.length}px`, minWidth: '150px'}}>准考证号</p>
                    {
                        examinationNum.map((item, index) => 
                            <ul key={index}>
                                <li className="first"></li>
                                {
                                    [0,1,2,3,4,5,6,7,8,9].map((item) => 
                                    <li key={item}>[{item}]</li>
                                    )
                                }
                        
                            </ul>
                            )
                    }
                </div>
            </div>
        )
    }
}
export default ExaminationPermitNo;

  
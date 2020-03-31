import React from 'react';
import { Button } from 'antd';
class Choice extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            choiceNum: [1,2,3,4,5,6,7,8,9,10,11],
        }
    }
    addNum = () => {
        const { choiceNum } = this.state;
        let tempArr = choiceNum;
        tempArr.push(choiceNum.length+1);
        this.setState({
            choiceNum: tempArr
        })
    }
    deleteNum = () => {
        const { choiceNum } = this.state;
        let tempArr = choiceNum;
        tempArr.pop();
        this.setState({
            choiceNum: tempArr
        })
    }
    dealArr = () => {
        const { choiceNum } = this.state;
        const tempNum = choiceNum.slice(0);
        const tempArr = [];
        while (tempNum.length!==0){
            if(tempNum.length>=4){
                tempArr.push(tempNum.splice(0,4))
            }else{
                tempArr.push(tempNum.splice(0))
            }
        }
        return tempArr;
    }
    render(){
       const { choiceNum } = this.state;
        return(
            <div className="choice">
                <div style={{marginBottom: '8px'}}>
                    <Button type="primary" ghost onClick={this.addNum}> 添加客观题数量 </Button>
                    <Button type="danger" ghost disabled={choiceNum.length === 0} onClick={this.deleteNum}>减少客观题数量</Button>
                </div>
                <p>客观题</p>
                <div className="teams">
                    {
                        this.dealArr().map((pItem)=>
                            <div key={pItem} className="choiceParent">
                                {
                                    pItem.map((iItem) => (
                                        <p key={iItem}>
                                            {iItem}[A] [B] [C] [D]
                                        </p>
                                    ))
                                }
                               
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
export default Choice;

  
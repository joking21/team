import React from 'react';
import { Link } from 'react-router-dom';
import ExaminationPermitNo from './modal/ExaminationPermitNo.jsx';
import Choice from './modal/Choice.jsx';
import AnswerQuestions from './modal/AnswerQuestions.jsx';
import './index.less';

class PageApp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{padding: '20px'}}>
                <div style={{marginBottom: '20px'}}>
                   <Link to='/two'> 点击去第二题 </Link>
                </div>
             
              <ExaminationPermitNo />
              <Choice />
              <AnswerQuestions />
            </div>
        )
    }
}
export default PageApp;

  
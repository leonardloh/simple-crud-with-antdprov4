import React, {Component} from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Card } from 'antd';
import ColumnChart from './components/ColumnChart';

class Index extends Component{
    
    render(){
        return (
 
            <GridContent>
                <Card bordered={false}>
                    <ColumnChart></ColumnChart>
                </Card>
            </GridContent>
        );
    }
}

export default Index;
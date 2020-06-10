import React, {Component} from 'react';
import { PageHeaderWrapper, GridContent } from '@ant-design/pro-layout';
import { Card } from 'antd';

class Index extends Component{
    
    render(){
        return (
            <PageHeaderWrapper>
                <GridContent>
                <Card bordered={false}>
                    this is a demo page
                </Card>
                </GridContent>
            </PageHeaderWrapper>
        );
    }
}

export default Index;
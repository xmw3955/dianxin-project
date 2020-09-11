/*
 * @Author: your name
 * @Date: 2020-09-11 14:08:49
 * @LastEditTime: 2020-09-11 15:37:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dianxin_project\src\index\components\pc_news_image_block.js
 */
import React from 'react'
import { Card } from 'antd'

export default class PCNewsImageBlock extends React.Component{
    render(){
        const { Meta } = Card;
        return (
            <div class="topNewsList">
              <Card hoverable style={{ width: 130 }} class="topNewsListCard" cover={<img alt="example" src="../../images/logo.gif" />}>
                 <Meta title="Europe Street beat" description="www.instagram.com" />
             </Card>
             <Card hoverable style={{ width: 130 }} class="topNewsListCard" cover={<img alt="example" src="../../images/logo.gif" />}>
                 <Meta title="Europe Street beat" description="www.instagram.com" />
             </Card> 
             <Card hoverable style={{ width: 130 }} class="topNewsListCard" cover={<img alt="example" src="../../images/logo.gif" />}>
                 <Meta title="Europe Street beat" description="www.instagram.com" />
             </Card>
             <Card hoverable style={{ width: 130 }} class="topNewsListCard" cover={<img alt="example" src="../../images/logo.gif" />}>
                 <Meta title="Europe Street beat" description="www.instagram.com" />
             </Card>
             <Card hoverable style={{ width: 130 }} class="topNewsListCard" cover={<img alt="example" src="../../images/logo.gif" />}>
                 <Meta title="Europe Street beat" description="www.instagram.com" />
             </Card>
             <Card hoverable style={{ width: 130 }} class="topNewsListCard" cover={<img alt="example"src="../../images/logo.gif" />}>
                 <Meta title="Europe Street beat" description="www.instagram.com" />
             </Card>
            </div>
        )
    }
}

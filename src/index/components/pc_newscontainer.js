/*
 * @Author: your name
 * @Date: 2020-09-11 14:07:59
 * @LastEditTime: 2020-09-11 15:57:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dianxin_project\src\index\components\pc_newscontainer.js
 */
import React from 'react'
import {Row,Col} from 'antd'
import { Carousel } from 'antd';
import PCNewsImageBlock from './pc_news_image_block'
export default class PCNewsContainer extends React.Component{
    render(){
        // const contentStyle = {
        //   dots:true,
        //   autoplay:true,
        //     };
        return(
          <div>
              <Row>
                  <Col span={2}></Col>
                  <Col span={20}>
                      <div class="leftContainer">
                          <div class="carousel">
                          <Carousel  autoplay={true} >
                        <div>
                         <img src="../../images/carouse1.jpg"></img>
                        </div>
                        <div>
                         <img src="../../images/carouse2.jpg"></img>
                        </div>
                        <div>
                            <img src="../../images/carouse3.jpg"></img>
                         </div>
                         <div>
                         <img src="../../images/carouse4.jpg"></img>
                        </div>
                          </Carousel>
                    <PCNewsImageBlock></PCNewsImageBlock>
                          </div>
                      </div>
                  </Col>
                  <Col span={2}></Col>
              </Row>
          </div>
        )
    }
}
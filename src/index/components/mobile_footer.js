/*
 * @Author: your name
 * @Date: 2020-09-11 10:48:03
 * @LastEditTime: 2020-09-11 11:50:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dianxin_project\src\index\components\mobile_footer.js
 */
import React from 'react'
import {Row,Col} from 'antd'
export default class MobileFooter extends React.Component{
   render(){
       return(
        <footer>
        <Row>
            <Col span={2}></Col>
            <Col span={20} class="footer">

                @copy;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Powered by 安徽电信 -2020. All rights reserve
            </Col>
            <Col span={2}></Col>
        </Row>
    </footer>
       )
   }
}
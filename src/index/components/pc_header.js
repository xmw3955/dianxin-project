/*
 * @Author: your name
 * @Date: 2020-09-11 10:47:15
 * @LastEditTime: 2020-09-11 11:31:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dianxin_project\src\index\components\pc_header.js
 */
import React from 'react'
import {Row,Col} from 'antd'
import { Menu } from 'antd';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    SafetyCertificateOutlined
  } from '@ant-design/icons';
export default class PCHeader extends React.Component{
    constructor(){
        super();
        this.state={
            current:"top"
        }
    }
    render(){
        const { current } = this.state;
        return(
            <header>
                 <Row>
      <Col span={2}>col-2</Col>
      <Col span={4}>
          <a href="#" class="logo">
              <img src='../../images/logo.gif'/>
              <span>电信</span>
          </a>
      </Col>
      <Col span={16}>
      <Menu selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="top"  >
        <HomeOutlined />头条
        </Menu.Item>
        <Menu.Item key="shehui"  >
        <SettingFilled /> 社会
        </Menu.Item>
        <Menu.Item key="guonei"  >
        <SafetyCertificateOutlined />国内
        </Menu.Item>
        <Menu.Item key="guoji"  >
        <SmileOutlined/>国际
        </Menu.Item>
        <Menu.Item key="yule"  >
        <SyncOutlined/> 娱乐
        </Menu.Item>
        <Menu.Item key="tiyu"  >
        <SmileOutlined rotate={180} /> 体育
        </Menu.Item>
        <Menu.Item key="keji"  >
        <LoadingOutlined /> 科技
        </Menu.Item>
        <Menu.Item key="shishang"  >
        <LoadingOutlined />  时尚
        </Menu.Item>

        </Menu>
      </Col>
      <Col span={2}>col-2</Col>
                 </Row>
            </header>
        )
    }
}
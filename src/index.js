/*
 * @Author: your name
 * @Date: 2020-09-10 09:16:50
 * @LastEditTime: 2020-09-11 11:01:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-project\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

import MediaQuery from 'react-responsive'
import 'antd/dist/antd.css'

import PCIndex from './index/components/pc_index'
import MobileIndex from './index/components/mobile_index'

class Root extends React.Component{
    render(){
    return(
        <div>
            
           <MediaQuery query="(min-device-width:1224px)">
            <PCIndex></PCIndex></MediaQuery>
            <MediaQuery query="(max-device-width:1223px)">
            <MobileIndex></MobileIndex>
            </MediaQuery>
        </div>
    )
}
}
ReactDOM.render(
    <Root></Root>,
    document.getElementById('root')
)
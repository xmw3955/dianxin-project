/*
 * @Author: your name
 * @Date: 2020-09-11 09:54:09
 * @LastEditTime: 2020-09-11 11:56:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dianxin_project\src\index\components\mobile_index.js
 */
import React from 'react'
import MobileFooter from './mobile_footer'
import MobileHeader from './mobile_header'
export default class MobileIndex extends React.Component{
    render(){
        return(
          <div>
              <MobileHeader></MobileHeader>
              <MobileFooter></MobileFooter></div>  
        )
    }
}
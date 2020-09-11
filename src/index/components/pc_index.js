/*
 * @Author: your name
 * @Date: 2020-09-11 09:54:00
 * @LastEditTime: 2020-09-11 14:35:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dianxin_project\src\index\components\pc_index.js
 */
import React from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsContainer from './pc_newscontainer'
export default class PCIndex extends React.Component{
    render(){
        return(
         <div ><PCHeader></PCHeader>
         <PCNewsContainer></PCNewsContainer>
         <PCFooter></PCFooter>
         </div>  
             
        )
    }
}
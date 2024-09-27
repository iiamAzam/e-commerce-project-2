import React,{useState} from 'react'

import access from '../../assets/pexels-lum3n-44775-322207.jpg'

import { Menu, Space, Typography } from 'antd';


function Accessories(){
    const [select,setselect]=useState('')
    const onClick=(item)=>{
                setselect(item.key)
    }
  
  
  
  
    return <div className='h-10 p-5 '>
      <Typography.Title style={{marginLeft:'35px'}}> Accessories</Typography.Title>
      <Space>
     
      <div className=' grid grid-cols-2 gap-2'>
      </div>     
  <Menu 
    style={{
      marginTop:'-60px',
      boxShadow:'none',
      width:'200px'
    }}
    selectedKeys={select}
    onClick={onClick}
    
    items={[
      {
        label: 'New Arrivals',
        key: 'newarr',
      },
      {
        label: 'Trending Now',
        key: 'trend',
      },
      {
        label: 'Just In',
        key: 'just',
      },
      {
        label: 'Best Sellers',
        key: 'bestsell',
      }
    ]}
  />
      <Menu
      style={{
        marginTop:'-60px',
        boxShadow:'none'
        
      }}
      selectedKeys={select}
      onClick={onClick}
      
      items={[
        {
          label:'Most popular',
          key:'most'
        },{
          label:'limited time offer',
          key:'mostpopular'
        },
        {
          label:'limited time offers ',
          key:'limited'
        },
        {
          label:'Editor choice',
          key : 'edited'
        }
      ]}/>
     
     <img src={access} className='w-[400px] transition-transform  h-full duration-500 hover:scale-110 '></img>
      
      
      </Space>
  
  </div>
      
    
  }
  export default  Accessories
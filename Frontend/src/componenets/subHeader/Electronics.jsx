import React,{useState} from 'react'
import desk from '../../assets/pexels-pixabay-356056.jpg'
import acces from '../../assets/pexels-thelazyartist-1342609.jpg'
import laptop from '../../assets/pexels-willianjusten-792345.jpg'
import access2 from '../../assets/pexels-luckysam-454699.jpg'

import { Menu, Space, Typography } from 'antd';


function Electronics(){
    const [select,setselect]=useState('')
    const onClick=(item)=>{
                setselect(item.key)
    }
  
  
  
  
    return <div className='h-10 p-5 '>
      <Typography.Title>Electronics</Typography.Title>
      <Space>
      <img src={laptop} className='w-[430px] transition-transform  h-full duration-500 hover:scale-110 '></img>
      <div className=' grid  gap-2'>

          <img src={desk} className='w-[235px] transition-transform  h-full duration-500 hover:scale-110'></img>
         
          <img src = {access2} className='w-[200px] transition-transform  h-full duration-500 hover:scale-110'></img>
      </div>     
  <Menu 
    style={{
      marginTop:'-20px',
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
        marginTop:'-20px',
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
     
     
      
      
      </Space>
  
  </div>
      
    
  }
  export default Electronics
import React,{useState} from 'react'
import girlsdress  from '../../assets/pexels-cottonbro-5582420.jpg'
import suit from '../../assets/pexels-deepcreation-1096849.jpg'
import dress from '../../assets/pexels-sergeymakashin-5368654.jpg'
import suit2 from '../../assets/pexels-thelazyartist-1342609.jpg'
import shirt from '../../assets/pexels-david-bartus-43782-297933.jpg'
import laptop from '../../assets/pexels-thelazyartist-1342609.jpg'
import mobile from '../../assets/pexels-willianjusten-792345.jpg'
import mobile2 from '../../assets/pexels-luckysam-454699.jpg'
import mobile3 from '../../assets/pexels-lum3n-44775-322207.jpg'
import mobile4 from '../../assets/pexels-oandremoura-2562992.jpg'
import { Menu, Space, Typography } from 'antd';


function Bestselling(){
    const [select,setselect]=useState('')
    const onClick=(item)=>{
                setselect(item.key)
    }
  
  
  
  
    return <div className='h-10 p-5 '>
      <Typography.Title>Best-selling Products</Typography.Title>
      <Space>
      <img src={girlsdress} className='w-[400px] transition-transform  h-full duration-500 hover:scale-110 '></img>
      <div className=' grid grid-cols-2 gap-2'>

          <img src={suit} className='w-[200px] transition-transform  h-full duration-500 hover:scale-110' ></img>
          <img src={mobile} className='w-[235px] transition-transform  h-full duration-500 hover:scale-110'></img>
          <img src = {mobile2} className='w-[200px] transition-transform  h-full duration-500 hover:scale-110'></img>
          <img src = {shirt} className='w-[200px] transition-transform  h-full duration-500 hover:scale-110'></img>
      </div>     
      <div className=' grid grid-cols-2 gap-2'>

          <img src={laptop} className='w-[200px] transition-transform  h-full duration-500 hover:scale-110' ></img>
          <img src={mobile4} className='w-[235px] transition-transform  h-full duration-500 hover:scale-110'></img>
          <img src = {suit2} className='w-[200px] transition-transform  h-full duration-500 hover:scale-110'></img>
          <img src = {mobile3} className='w-[200px] transition-transform  h-full duration-500 hover:scale-110'></img>
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
     
     
      
      
      </Space>
  
  </div>
      
    
  }
  export default Bestselling
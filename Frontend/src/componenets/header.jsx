import React, {  useState } from 'react';
import './custom.css'
import okImage from '../assets/ok.jpg'
import bag from '../assets/pexels-geyonk-1152077.jpg'
import phone from '../assets/pexels-luckysam-454699.jpg'
import shoe from '../assets/pexels-oandremoura-2562992.jpg'
import shirt from '../assets/pexels-david-bartus-43782-297933.jpg'
import { Menu, Space, Typography } from 'antd';
import Clothing from './subHeader/Clothing';
import Accessories from './subHeader/accessooriece';
import Electronics from './subHeader/Electronics';
import Bestselling from './subHeader/Bestselling';
import { FireOutlined ,ShoppingOutlined,AppstoreAddOutlined,LaptopOutlined,
  StarOutlined,TagOutlined,ShoppingCartOutlined,KeyOutlined  } from '@ant-design/icons';
const items = [
        {
          label:"New & Trending",
          key: 'mail',
          icon :<FireOutlined/>,
          children:[
              {
                label:<Megamenu/>,
                key:"megamenu",
                style:{
                  height:'400px' ,
                  width:'800px',
                  backgroundColor:'white',
                  display:'absolute',

                }
              }
          ],
          popupOffset: [-50, 0]

        },
        {
          label:'Clothing',
          key:'clothing',
          icon:<ShoppingOutlined/>,
          children:[{
            label:<Clothing/>,
            key:"clothing",
            style:{
              height:'400px' ,
              width:'800px',
              backgroundColor:'white'
            }
          }

          ],
          popupOffset: [-150, 0]
          
        },
        {
          label : 'Accessories',
          key: 'app',
          icon:<ShoppingOutlined/>,
          children:[{
            label:<Accessories/>,
            key:"access",
            style:{
              height:'400px' ,
              width:'800px',
              backgroundColor:'white'
            }
          }

          ],
          popupOffset: [-250, 0]
          
        },
        {
          label:'Electronics',
          key:'ele',
          icon:<LaptopOutlined/>,
          children:[
            {
              label:<Electronics/>,
              key:"electro",
              style:{
                height:'400px' ,
                width:'800px',
                backgroundColor:'white',
                

              }
            }
        ],
        popupOffset: [350, 0]
        },
        {
          label:'Best-selling Products',
          key:'best',
          icon:<StarOutlined/>,
          children:[
            {
              label:<Bestselling/>,
              key:"bestsell",
              style:{
                height:'400px' ,
                width:'800px',
                backgroundColor:'white',
                

              }
            }
        ],
        popupOffset: [200, 0]

        },

];

const Header = () => {
 




  return (
    <>
    <div className='px-10 py-5'>
        <div  className='flex  justify-between items-center'>
          <input className='bg-slate-100 focus:outline-none rounded-sm text-[20px]'  placeholder=' Search'></input>
          <h1 className='text-[30px] text-slate-400  absolute left-[500px] font-semibold'>RegularCart</h1>
          <div  className='flex  justify-center gap-2 items-center'>
          <span><KeyOutlined/> Login</span>
          <span><ShoppingCartOutlined />Cart</span>
          </div>
          </div>  
    </div>
    <Menu style={{marginLeft:'180px',  marginRight:'150px' }}
      
      mode="horizontal" items={items} 
      />
      <div>
        <img src={okImage} alt="" />
      </div>
    </>
  );
};


function Megamenu(){
  const [select,setselect]=useState('')
  const onClick=(item)=>{
              setselect(item.key)
  }




  return <div className='h-10 p-5 '>
    <Typography.Title>New & Trending</Typography.Title>
    <Space>
       
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
    <div className=' grid grid-cols-2 gap-2'>
        <img src={shoe} className='w-[200px] transition-transform  h-full duration-500 hover:scale-110 '></img>
        <img src={phone} className='w-[200px] transition-transform  h-full duration-500 hover:scale-110' ></img>
        <img src={bag} className='w-[200px] transition-transform  h-full duration-500 hover:scale-110'></img>
        <img src = {shirt} className='w-[200px] transition-transform  h-full duration-500 hover:scale-110'></img>
    </div>
   
    
    
    </Space>

</div>
    
  
}





export default Header




// {
//   label: 'New & Trending',
//   key: 'mail',
//   icon: < FireOutlined/>,
//  },

// {
//   label: 'Clothing',
//   key: 'app',
//   icon: <ShoppingOutlined />, 
// },
// {
//   label: 'Accessories',
//   key: 'SubMenu',
//   icon: <AppstoreAddOutlined />,
//     },
//     {
//       type: 'group',
//       label: 'Item 2'
//     },
// {
//   label: 'Electronics',
//   key: 'ele',
//   icon: <LaptopOutlined />,
  
// },
// {
//   label: 'Best-Selling Products',
//   key: 'best',
//   icon: <StarOutlined/>,
  
// },
// {
//   label: 'Brands',
//   key: 'brds',
//   icon: <TagOutlined/>,
  
// },
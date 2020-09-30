import React from 'react'
import './order.css'

const accordian_arr = [{id:1,status:"Delivered",date:"11.09.2020",amount:"235,00",number:"5217322488"},
                       {id:2,status:"Delivered",date:"11.09.2020",amount:"235,00",number:"5217322488"},
                       {id:3,status:"Returned",date:"11.09.2020",amount:"235,00",number:"5217322488"}
                      ];

const href="#" 
export default function Orders() {

   const renderOrder = () =>{
       return accordian_arr.map(({status,date,amount,number,id})=>
            <div className="card" key={id}>
            <div className="card-header" role="tab" id="heading1">
                <a data-toggle="collapse" className="collapseArrow" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                <i className={status==="Returned" ? "far fa-arrow-left" : "far fa-check-circle"} />
                <h6 className="mb-0">
                    {status}
                    <span>{date}</span>
                </h6>
                </a>
            </div>
            <div id="collapse1" className={id===2 ? "collapse  show" : "collapse"} role="tabpanel" aria-labelledby="heading1">
                <div className="card-body">
                <ul>
                    <li>Order Ammount: <span>{amount} kn</span></li>
                    <li>Order Number: <span>{number}</span></li>
                </ul>
                <div className="details"><a href="#0">Details</a></div> 
                </div>
            </div>
            </div>
       )
   }

    return (
        <div className="col-md-10">
            <div className="content">
              <div className="orderTop">
                <a href={href}> <i className="fas fa-angle-left" />My Orders</a>
              </div>
              <div id="accordion" role="tablist" className="accordionList">
               {renderOrder()}
              </div>
            </div>
          </div>
    )
}

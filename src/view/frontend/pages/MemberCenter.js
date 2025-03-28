import React from 'react'
import { Link } from 'react-router-dom'
const MemberCenter = () => {
  return (
    <div className='hoinghi'>
        <div className='hoinghi-container'>
            <p> Trung Tâm Hội Viên </p>
            <Link> Số dư tài khoản <span>0</span></Link>
        </div>
        
        <div className='banence-body'>
            <div className='ctnr'>
                <div className='list-banence-member'>
                    <div className='item-member-bannence'>
                       <Link to="/deposit">
                        <div className='icon-banecer'></div>
                        <p>Nạp Tiền</p>
                       </Link>
                    </div>

                    <div className='item-member-bannence'>
                       <Link to="/withdrawApplication">
                        <div className='icon-banecer'></div>
                        <p>Rút Tiền</p>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberCenter
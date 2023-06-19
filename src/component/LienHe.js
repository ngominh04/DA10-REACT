import React ,{useState} from 'react'
import isEmpty from 'validator/lib/isEmpty'

function LienHe() {
    
    const[userName, setUserName] = useState('');
    const[email, setEmail]=useState('');
    const[phoneNumber, setPhoneNumber]=useState('');
    const[content,setContent]=useState('');
    const[validate, setValidate]=useState('')

    const onChangeName = (ev)=>{
        const value = ev.target.value
        setUserName(value)
    }
    const onChangeEmail = (ev)=>{
        const value = ev.target.value
        setEmail(value)
    }
    const onChangePhoneNumber = (ev)=>{
        const value = ev.target.value
        setPhoneNumber(value)
    }
    const onChangeContent = (ev)=>{
        const value = ev.target.value
        setContent(value)
    }

    const validateAll =()=>{
        const msg ={}
        if(isEmpty(userName)){
            msg.userName = "Bạn chưa nhập họ tên"
        }
        if(isEmpty(email)){
            msg.email = "Bạn chưa nhập email"
        }
        if(isEmpty(phoneNumber)){
            msg.phoneNumber = "Bạn chưa nhập số điện thoại"
        }
        if(isEmpty(content)){
            msg.content = "Bạn chưa nhập nội dung"
        }

        setValidate(msg)
        if(Object.keys(msg).length>0) return false
    }

    const onSubmit=()=>{
        const isValidate = validateAll()
        if(!isValidate) return
    }
    return (
        <>
            <>
                <section id="lien-he">
                    <div className="banner">
                        <img src="./imgs/AnhCat/lh-banner.png" width="100%" alt="" />
                        <div className="banner-text">
                            <img src="./imgs/AnhCat/gt-logo.png" alt="" />
                            <h1>LIÊN HỆ</h1>
                        </div>
                        <div className="container" id="lien-he-box">
                            <div className="row">
                                <div className="col-6">
                                    <img src="./imgs/AnhCat/lh-giuong.png" alt="" />
                                </div>
                                <div className="col-6">
                                    <h4>LIÊN HỆ VỚI CHÚNG TÔI</h4>
                                    <ul>
                                        <li>
                                            <input
                                                type='text'
                                                onChange={onChangeName}
                                                placeholder='Họ tên'
                                                
                                            ></input>  
                                            <p className='text-red-400 text-xs' style={{color:"red"}}>{validate.userName}</p>
                                        </li>
                                        <li>
                                            <input type='email' onChange={onChangeEmail} placeholder='Email'></input>
                                            <p className='text-red-400 text-xs' style={{color:"red"}}>{validate.email}</p>
                                        </li>
                                        <li>
                                            <input type='tel' onChange={onChangePhoneNumber} placeholder='Số điện thoại'></input>
                                            <p className='text-red-400 text-xs' style={{color:"red"}}>{validate.phoneNumber}</p>
                                        </li>
                                        <li>
                                            <input type='text' onChange={onChangeContent} placeholder='Nội dung'></input>
                                            
                                            <p className='text-red-400 text-xs' style={{color:"red"}}>{validate.content}</p>
                                        </li>
                                        <li>
                                            <button 
                                                id="lien-he-submit"
                                                onClick={onSubmit}
                                            >Gửi</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="lien-he-khoang-trong" />
            </>

        </>
    )
}

export default LienHe

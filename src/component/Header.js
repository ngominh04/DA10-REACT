import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const isActiveStyle = ({ isActive }) => {
        return {
            color: isActive? "#bd945f":"black"
        }
    }
    return (
        <header>
            <div className="container" style={{ fontSize: 16 }}>
                <div className="row">
                    <img src="./imgs/AnhCat/logo.png" alt="" srcSet="" />
                    <ul>
                        <li>
                            {/* <a href="#">TRANG CHỦ</a> */}
                            <NavLink style={isActiveStyle} to={'/'}>
                                TRANG CHỦ
                                <div
                                    id="header-TC"
                                    style={{ backgroundColor: "#bd945f", width: 70, height: 3 }}
                                />
                            </NavLink>

                        </li>
                        <li>
                            {/* <a href="./GioiThieu.html">GIỚI THIỆU</a> */}
                            <NavLink style={isActiveStyle} to={'/gioithieu'}>
                                GIỚI THIỆU
                            </NavLink>
                        </li>
                        <li>
                            {/* <a href="./Sanpham.html">SẢN PHẨM</a> */}
                            <NavLink style={isActiveStyle} to={"/sanpham"}>SẢN PHẨM</NavLink>
                        </li>
                        <li>
                            {/* <a href="./TinTuc.html">TIN TỨC</a> */}
                            <NavLink style={isActiveStyle} to={"/tintuc"}>TIN TỨC</NavLink>
                        </li>
                        <li>
                            {/* <a href="./DoiTac.html">ĐỐI TÁC</a> */}
                            <NavLink style={isActiveStyle} to={"/doitac"}>ĐỐI TÁC</NavLink>
                        </li>
                        <li>
                            {/* <a href="./LienHe.html">LIÊN HỆ</a> */}
                            <NavLink style={isActiveStyle} to={"/lienhe"}>LIÊN HỆ</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    )
}

export default Header

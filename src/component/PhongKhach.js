import React from 'react'
import { NavLink } from 'react-router-dom'

function PhongKhach() {
    const activeStyle = ({ isActive }) => {
        return {
            
            backgroundColor: isActive ? '#bd945f' : '#f3f3f3',
            color: isActive ? 'black' : 'white'
        }
    }
    return (
        <>
            <>
                <section id="phong-khach">
                    <div className="banner">
                        <img src="./imgs/AnhCat/ss-banner.png" width="100%" alt="" />
                        <div className="banner-text">
                            <h1>
                                Không gian hiện đại
                                <img src="./imgs/AnhCat/san-pham/sp-text.png" alt="" />
                            </h1>
                            <button>Mua ngay</button>
                        </div>
                    </div>
                    <div className="p-khach" id="phong">
                        <div className="container">
                            <h3>
                                PHÒNG KHÁCH
                                <div style={{ backgroundColor: "#bd945f", width: 160, height: 8 }} />
                            </h3>
                            <div className="row">
                                <div className="col-3">
                                    <img
                                        src="./imgs/AnhCat/san-pham/phong-khach-ban-uong-nuoc.png"
                                        alt=""
                                    />
                                    <h6>BÀN UỐNG NƯỚC</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(Size vừa, nâu đậm)</p>
                                    <p id="gia">8.999.000 VNĐ</p>
                                </div>
                                <div className="col-3">
                                    <img
                                        src="./imgs/AnhCat/san-pham/phong-khach-ban-uong-nuoc-2.png"
                                        alt=""
                                    />
                                    <h6>BÀN UỐNG NƯỚC 2</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(Size vừa, nâu vân gỗ)</p>
                                    <p id="gia">3.999.000 VNĐ</p>
                                </div>
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/san-pham/phong-khach-ke-ti-vi.png" alt="" />
                                    <h6>KỆ TV</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(4 ngăn, gỗ lim)</p>
                                    <p id="gia">12.999.000 VNĐ</p>
                                </div>
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/san-pham/phong-khach-ke-de-do.png" alt="" />
                                    <h6>KỆ ĐỂ ĐỒ</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(4 ngăn, trắng gỗ)</p>
                                    <p id="gia">2.499.000 VNĐ</p>
                                </div>
                                {/* hàng 2  */}
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/pk-1.png" alt="" />
                                    <h6>SOFA</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(Size vừa, nâu đậm)</p>
                                    <p id="gia">8.999.000 VNĐ</p>
                                </div>
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/pk-2.png" alt="" />
                                    <h6>SOFA 2</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(Size vừa, nâu vân gỗ)</p>
                                    <p id="gia">3.999.000 VNĐ</p>
                                </div>
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/pk-3.png" alt="" />
                                    <h6>BNAF UỐNG NƯỚC</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(4 ngăn, gỗ lim)</p>
                                    <p id="gia">12.999.000 VNĐ</p>
                                </div>
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/pk-4.png" alt="" />
                                    <h6>BÀN UỐNG NƯỚC</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(4 ngăn, trắng gỗ)</p>
                                    <p id="gia">2.499.000 VNĐ</p>
                                </div>
                                {/* hàng 3 */}
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/pk-5.png" alt="" />
                                    <h6>BÀN UỐNG NƯỚC</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(Size vừa, nâu đậm)</p>
                                    <p id="gia">8.999.000 VNĐ</p>
                                </div>
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/pk-6.png" alt="" />
                                    <h6>KỆ ĐỒ</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(Size vừa, nâu vân gỗ)</p>
                                    <p id="gia">3.999.000 VNĐ</p>
                                </div>
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/pk-7.png" alt="" />
                                    <h6>KỆ ĐỒ 2</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(4 ngăn, gỗ lim)</p>
                                    <p id="gia">12.999.000 VNĐ</p>
                                </div>
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/pk-8.png" alt="" />
                                    <h6>GIÁ ĐỒ</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="size">(4 ngăn, trắng gỗ)</p>
                                    <p id="gia">2.499.000 VNĐ</p>
                                </div>
                            </div>
                        </div>
                        <div id="phongkhach-next">
                                <ul>
                                    <li >
                                        <NavLink style={activeStyle} to={"/phongkhach-1"}><b>1</b></NavLink>


                                    </li>
                                    <li>
                                        <NavLink style={activeStyle} to={"/phongkhach-2"}><b>2</b></NavLink>


                                    </li>
                                    <li>
                                        <NavLink style={activeStyle} to={"/phongkhach-3"}><b>3</b></NavLink>


                                    </li>
                                    <li>
                                        <NavLink style={activeStyle} to={"/phongkhach-4"}><b>4</b></NavLink>


                                    </li>
                                    <li>
                                        <NavLink style={activeStyle} to={"/phongkhach-next"}><b>&gt;</b></NavLink>

                                    </li>
                                </ul>
                            </div>
                    </div>
                </section>
                <div className="phong-khach-khoang-trong">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ul id="text">
                                    <li id="text-1" style={{ color: "black" }}>
                                        Chọn mức giá:
                                    </li>
                                    <li id="text-2">Dưới 5 triệu</li>
                                    <li id="text-3">5 - 10 triệu</li>
                                    <li id="text-4">10 - 15 triệu</li>
                                    <li id="text-5">Trên 15 triệu</li>
                                    <li id="text-6" style={{ color: "black" }}>
                                        Sắp xếp
                                        <ul id="sx">
                                            <li style={{ color: "black" }}>Giá cao đến thấp</li>
                                            <li style={{ color: "black" }}>Giá thấp đến cao</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default PhongKhach

import React from 'react'
import { NavLink } from 'react-router-dom'

function TinTuc() {
    const activeStyle = ({ isActive }) => {
        return {
            
            backgroundColor: isActive ? '#bd945f' : '#f3f3f3',
            color: isActive ? 'black' : 'white'
        }
    }
    return (
        <>
            <>
                <section id="tin-tuc">
                    <div className="container">
                        <center>
                            <h1>
                                TIN TỨC
                                <div style={{ backgroundColor: "#bd945f", width: 160, height: 8 }} />
                            </h1>
                        </center>
                        <div className="row">
                            <div className="col-4">
                                <img src="./imgs/AnhCat/tin-tuc/tintuc-1.png" alt="" />
                                <h6>NGẤT NGÂY VỚI TOP 10 MẪU NỘI THẤT CHUNG CƯ 1 PHÒNG NGỦ ĐẸP</h6>
                                <p>
                                    Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên ưa
                                    chuộng hơn trong cuộc sống hiến đại với những ai có khoản kinh phí
                                    "hạn hẹp"
                                </p>
                            </div>
                            <div className="col-4">
                                <img src="./imgs/AnhCat/tin-tuc/tintuc-2.png" alt="" />
                                <h6>25+ MẪU GIƯỜNG NGỦ HỘC KÉO THÔNG MINH CHO CĂN PHÒNG BẠN</h6>
                                <p>
                                    Sự thật chúng ta dành hết 1/3 cuộc đời chỉ để ngủ, vì thế tạo được
                                    một giấc ngủ ngon là điều đặc biệt quan trọng
                                </p>
                            </div>
                            <div className="col-4">
                                <img src="./imgs/AnhCat/tin-tuc/tintuc-3.png" alt="" />
                                <h6>TUYỆT CHIÊU THIẾT KẾ CHUNG CƯ MINI 2 PHÒNG NGỦ SIÊU ĐẸP</h6>
                                <p>
                                    Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện
                                    đại thời nay, thế nên việc "thiết kế căn hộ chung cư mini 2 phòng
                                    ngủ"
                                </p>
                            </div>
                            <div className="col-4">
                                <img src="./imgs/AnhCat/tin-tuc/tintuc-1.png" alt="" />
                                <h6>NGẤT NGÂY VỚI TOP 10 MẪU NỘI THẤT CHUNG CƯ 1 PHÒNG NGỦ ĐẸP</h6>
                                <p>
                                    Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên ưa
                                    chuộng hơn trong cuộc sống hiến đại với những ai có khoản kinh phí
                                    "hạn hẹp"
                                </p>
                            </div>
                            <div className="col-4">
                                <img src="./imgs/AnhCat/tin-tuc/tintuc-2.png" alt="" />
                                <h6>25+ MẪU GIƯỜNG NGỦ HỘC KÉO THÔNG MINH CHO CĂN PHÒNG BẠN</h6>
                                <p>
                                    Sự thật chúng ta dành hết 1/3 cuộc đời chỉ để ngủ, vì thế tạo được
                                    một giấc ngủ ngon là điều đặc biệt quan trọng
                                </p>
                            </div>
                            <div className="col-4">
                                <img src="./imgs/AnhCat/tin-tuc/tintuc-3.png" alt="" />
                                <h6>TUYỆT CHIÊU THIẾT KẾ CHUNG CƯ MINI 2 PHÒNG NGỦ SIÊU ĐẸP</h6>
                                <p>
                                    Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện
                                    đại thời nay, thế nên việc "thiết kế căn hộ chung cư mini 2 phòng
                                    ngủ"
                                </p>
                            </div>
                            <div className="col-4">
                                <img src="./imgs/AnhCat/tin-tuc/tintuc-1.png" alt="" />
                                <h6>NGẤT NGÂY VỚI TOP 10 MẪU NỘI THẤT CHUNG CƯ 1 PHÒNG NGỦ ĐẸP</h6>
                                <p>
                                    Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên ưa
                                    chuộng hơn trong cuộc sống hiến đại với những ai có khoản kinh phí
                                    "hạn hẹp"
                                </p>
                            </div>
                            <div className="col-4">
                                <img src="./imgs/AnhCat/tin-tuc/tintuc-2.png" alt="" />
                                <h6>25+ MẪU GIƯỜNG NGỦ HỘC KÉO THÔNG MINH CHO CĂN PHÒNG BẠN</h6>
                                <p>
                                    Sự thật chúng ta dành hết 1/3 cuộc đời chỉ để ngủ, vì thế tạo được
                                    một giấc ngủ ngon là điều đặc biệt quan trọng
                                </p>
                            </div>
                            <div className="col-4">
                                <img src="./imgs/AnhCat/tin-tuc/tintuc-3.png" alt="" />
                                <h6>TUYỆT CHIÊU THIẾT KẾ CHUNG CƯ MINI 2 PHÒNG NGỦ SIÊU ĐẸP</h6>
                                <p>
                                    Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện
                                    đại thời nay, thế nên việc "thiết kế căn hộ chung cư mini 2 phòng
                                    ngủ"
                                </p>
                            </div>
                            <div id="tintuc-next">
                                <ul>
                                    <li>
                                        <NavLink style={activeStyle} to={"/tintuc-1"}><b>1</b></NavLink>


                                    </li>
                                    <li>
                                        <NavLink style={activeStyle} to={"/tintuc-2"}><b>2</b></NavLink>


                                    </li>
                                    <li>
                                        <NavLink style={activeStyle} to={"/tintuc-3"}><b>3</b></NavLink>


                                    </li>
                                    <li>
                                        <NavLink style={activeStyle} to={"/tintuc-4"}><b>4</b></NavLink>


                                    </li>
                                    <li>
                                        <NavLink style={activeStyle} to={"/tintuc-next"}><b>&gt;</b></NavLink>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </section>
                <div className="tin-tuc-khoang-trong" />
            </>

        </>
    )
}

export default TinTuc

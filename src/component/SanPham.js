import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function SanPham() {
    return (
        <>
            <section id="sp">
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
                {/* phòng khách  */}
                <div className="p-khach" id="phong">
                    <div className="container">
                        <h3>
                            PHÒNG KHÁCH
                            <div style={{ backgroundColor: "#bd945f", width: 160, height: 8 }} />
                            <p>
                                {/* <a
                                    href="./PhongKhach.html"
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    XEM TẤT CẢ
                                </a> */}
                                <NavLink  to={'/phongkhach'}>XEM TẤT CẢ</NavLink>
                            </p>
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
                        </div>
                    </div>
                </div>
                {/* phòng ngủ */}
                <div className="p-ngu" id="phong">
                    <div className="container">
                        <h3>
                            PHÒNG NGỦ
                            <div style={{ backgroundColor: "#bd945f", width: 160, height: 8 }} />
                            <p>XEM TẤT CẢ</p>
                        </h3>
                        <div className="row">
                            <div className="col-3">
                                <img
                                    src="./imgs/AnhCat/san-pham/phong-ngu/giuong-chau-au.png"
                                    alt=""
                                />
                                <h6>GIƯỜNG CHÂU ÂU</h6>
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
                                <img src="./imgs/AnhCat/san-pham/phong-ngu/giuong-ngu.png" alt="" />
                                <h6>GIƯỜNG GỖ</h6>
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
                                <img
                                    src="./imgs/AnhCat/san-pham/phong-ngu/ke-dau-giuong.png"
                                    alt=""
                                />
                                <h6>KỆ ĐẦU GIƯỜNG</h6>
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
                                <img src="./imgs/AnhCat/san-pham/phong-ngu/tu-quan-ao.png" alt="" />
                                <h6>TỦ QUẦN ÁO</h6>
                                <p>
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </p>
                                <p id="size">(4 ngăn, trắng gỗ)</p>
                                <p id="gia">12.499.000 VNĐ</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* phòng bếp  */}
                <div className="p-bep" id="phong">
                    <div className="container">
                        <h3>
                            PHÒNG BẾP
                            <div style={{ backgroundColor: "#bd945f", width: 160, height: 8 }} />
                            <p>XEM TẤT CẢ</p>
                        </h3>
                        <div className="row">
                            <div className="col-3">
                                <img src="./imgs/AnhCat/san-pham/phong-bep-1.png" alt="" />
                                <h6>BÀN ĂN 6</h6>
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
                                <img src="./imgs/AnhCat/san-pham/phong-bep-2.png" alt="" />
                                <h6>BÀN TRÀ</h6>
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
                                <img src="./imgs/AnhCat/san-pham/phong-bep-3.png" alt="" />
                                <h6>BÀN ĂN 4</h6>
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
                                <img src="./imgs/AnhCat/san-pham/phong-bep-4.png" alt="" />
                                <h6>BÀN ĂN 8</h6>
                                <p>
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </p>
                                <p id="size">(4 ngăn, trắng gỗ)</p>
                                <p id="gia">12.499.000 VNĐ</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* phòng tắm  */}
                <div className="p-tam" id="phong">
                    <div className="container">
                        <h3>
                            PHÒNG TẮM
                            <div style={{ backgroundColor: "#bd945f", width: 160, height: 8 }} />
                            <p>XEM TẤT CẢ</p>
                        </h3>
                        <div className="row">
                            <div className="col-3">
                                <img src="./imgs/AnhCat/san-pham/phong-tam-1.png" alt="" />
                                <h6>BỒN RỬA MẶT</h6>
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
                                <img src="./imgs/AnhCat/san-pham/phong-tam-2.png" alt="" />
                                <h6>BỒN RỬA TAY</h6>
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
                                <img src="./imgs/AnhCat/san-pham/phong-tam-3.png" alt="" />
                                <h6>BỒN RỬA 2</h6>
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
                                <img src="./imgs/AnhCat/san-pham/phong-tam-4.png" alt="" />
                                <h6>TỦ ÂM TƯỜNG</h6>
                                <p>
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </p>
                                <p id="size">(4 ngăn, trắng gỗ)</p>
                                <p id="gia">12.499.000 VNĐ</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* phòng trẻ em  */}
                <div className="p-tre-em" id="phong">
                    <div className="container">
                        <h3>
                            TRẺ EM
                            <div style={{ backgroundColor: "#bd945f", width: 160, height: 8 }} />
                            <p>XEM TẤT CẢ</p>
                        </h3>
                        <div className="row">
                            <div className="col-3">
                                <img src="./imgs/AnhCat/san-pham/tre-em-1.png" alt="" />
                                <h6>BÀN HỌC</h6>
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
                                <img src="./imgs/AnhCat/san-pham/tre-em-2.png" alt="" />
                                <h6>GIƯỜNG TẦNG</h6>
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
                                <img src="./imgs/AnhCat/san-pham/tre-em-3.png" alt="" />
                                <h6>GIƯỜNG TẦNG 2</h6>
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
                                <img src="./imgs/AnhCat/san-pham/tre-em-4.png" alt="" />
                                <h6>CŨI TRẺ EM</h6>
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
                </div>
                {/* văn phòng  */}
                <div className="p-vanphong" id="phong">
                    <div className="container">
                        <h3>
                            VĂN PHÒNG
                            <div style={{ backgroundColor: "#bd945f", width: 160, height: 8 }} />
                            <p>XEM TẤT CẢ</p>
                        </h3>
                        <div className="row">
                            <div className="col-3">
                                <img src="./imgs/AnhCat/san-pham/van-phong-1.png" alt="" />
                                <h6>GHẾ VĂN PHÒNG</h6>
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
                                <img src="./imgs/AnhCat/san-pham/van-phong-2.png" alt="" />
                                <h6>BÀN LÀM VIỆC</h6>
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
                                <img src="./imgs/AnhCat/san-pham/vsn-phong-3.png" alt="" />
                                <h6>BÀN LÀM VIỆC 2</h6>
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
                                <img src="./imgs/AnhCat/san-pham/van-phong-4.png" alt="" />
                                <h6>GIÁ SÁCH</h6>
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
                </div>
                {/* cầu thang  */}
                <div className="p-cauthang" id="phong">
                    <div className="container">
                        <h3>
                            CẦU THANG
                            <div style={{ backgroundColor: "#bd945f", width: 160, height: 8 }} />
                            <p>XEM TẤT CẢ</p>
                        </h3>
                        <div className="row">
                            <div className="col-3">
                                <img src="./imgs/AnhCat/san-pham/cau-thang-1.png" alt="" />
                                <h6>CẦU THANG 1</h6>
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
                                <img src="./imgs/AnhCat/san-pham/cau-thang-2.png" alt="" />
                                <h6>CẦU THANG 2</h6>
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
                                <img src="./imgs/AnhCat/san-pham/cau-thang-3.png" alt="" />
                                <h6>CẦU THANG 3</h6>
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
                                <img src="./imgs/AnhCat/san-pham/cau-thang-4.png" alt="" />
                                <h6>CẦU THANG 4</h6>
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
                </div>
                {/* trang trí  */}
                <div className="p-trangtri" id="phong">
                    <div className="container">
                        <h3>
                            TRANG TRÍ
                            <div style={{ backgroundColor: "#bd945f", width: 160, height: 8 }} />
                            <p>XEM TẤT CẢ</p>
                        </h3>
                        <div className="row">
                            <div className="col-3">
                                <img src="./imgs/AnhCat/san-pham/trang-tri-1.png" alt="" />
                                <h6>GƯƠNG 1</h6>
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
                                <img src="./imgs/AnhCat/san-pham/trang-tri-2.png" alt="" />
                                <h6>GƯƠNG 2</h6>
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
                                <img src="./imgs/AnhCat/san-pham/trang-tri-3.png" alt="" />
                                <h6>GHẾ ĐÔN</h6>
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
                                <img src="./imgs/AnhCat/san-pham/trang-tri-4.png" alt="" />
                                <h6>ĐÈN TRÙM</h6>
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
                    
                </div>
                
            </section>
        <Outlet/>
        </>
    )
}

export default SanPham

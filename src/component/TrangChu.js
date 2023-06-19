import React from 'react'


function TrangChu() {

    return (
        <>
            <>
                {/* banner chính ,về chúng tôi ,sản phẩm */}
                <section id="Trangchu">
                    <div className="container-fluild">
                        {/* banner chính  */}
                        <div className="banner">
                            <img
                                src="./imgs/AnhCat/banner.png"
                                width="100%"
                                height="820px"
                                alt=""
                            />
                            <div className="banner-text">
                                <h1 id="h1_1">THẾ GIỚI NỘI THẤT SỐ MỘT VIỆT NAM</h1>
                                <h1 id="h1_2">HOÀNG HOAN</h1>
                                <p>
                                    Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng mong muốn của
                                    khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia đình
                                    và những người thân yêu
                                </p>
                                <button>
                                    <b>LIÊN HỆ NGAY</b>{" "}
                                </button>
                            </div>
                            <div className="container" id="duoi-banner">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="./imgs/AnhCat/p-khach.jpg" alt="" />
                                        <p>
                                            <b>Phòng khách</b>{" "}
                                        </p>
                                    </div>
                                    <div className="col-3">
                                        <img src="./imgs/AnhCat/p-ngu.jpg" alt="" />
                                        <p>
                                            <b>Phòng ngủ</b>{" "}
                                        </p>
                                    </div>
                                    <div className="col-3">
                                        <img src="./imgs/AnhCat/p-bep.jpg" alt="" />
                                        <p>
                                            <b>Phòng bếp</b>{" "}
                                        </p>
                                    </div>
                                    <div className="col-3">
                                        <img src="./imgs/AnhCat/p-tam.jpg" alt="" />
                                        <p>
                                            <b>Phòng tắm</b>{" "}
                                        </p>
                                    </div>
                                    <div className="col-3">
                                        <img src="./imgs/AnhCat/p-tre-em.jpg" alt="" />
                                        <p>
                                            <b>Trẻ em</b>{" "}
                                        </p>
                                    </div>
                                    <div className="col-3">
                                        <img src="./imgs/AnhCat/p-vanphong.jpg" alt="" />
                                        <p>
                                            <b>Văn phòng</b>{" "}
                                        </p>
                                    </div>
                                    <div className="col-3">
                                        <img src="./imgs/AnhCat/p-cauthang.jpg" alt="" />
                                        <p>
                                            <b>Cầu thang</b>{" "}
                                        </p>
                                    </div>
                                    <div className="col-3">
                                        <img src="./imgs/AnhCat/p-trangtri.jpg" alt="" />
                                        <p>
                                            <b>Đồ trang trí</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* sản phẩm  */}
                        <div className="container" id="sp-noi-bat">
                            <h2>
                                SẢN PHẨM NỔI BẬT
                                <center>
                                    <div
                                        style={{ backgroundColor: "#bd945f", width: 160, height: 8 }}
                                    />
                                </center>
                            </h2>
                            <div className="row" >
                                {/* <section  > */}
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/sp-1.jpg" id="sp-noi-bat-img" />
                                    <h6>GIƯỜNG CHÂU ÂU</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="sp-loai" style={{ fontFamily: "gotham-thin" }}>
                                        (size lớn, trắng sữa)
                                    </p>
                                    <p id="sp-gia" style={{ fontFamily: "gotham-medium" }}>
                                        8.999.000 đ
                                    </p>
                                </div>
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/sp-2.jpg" id="sp-noi-bat-img" />
                                    <h6>BÀN LÀM VIỆC</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="sp-loai" style={{ fontFamily: "gotham-thin" }}>
                                        (size vừa, trắng nâu)
                                    </p>
                                    <p id="sp-gia" style={{ fontFamily: "gotham-medium" }}>
                                        3.999.000 đ
                                    </p>
                                </div>
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/sp-3.jpg" id="sp-noi-bat-img" />
                                    <h6>TỦ QUẦN ÁO</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="sp-loai" style={{ fontFamily: "gotham-thin" }}>
                                        (4 ngăn, trắng gỗ)
                                    </p>
                                    <p id="sp-gia" style={{ fontFamily: "gotham-medium" }}>
                                        12.999.000 đ
                                    </p>
                                </div>
                                <div className="col-3">
                                    <img src="./imgs/AnhCat/sp-4.jpg" id="sp-noi-bat-img" />
                                    <h6>KỆ ĐỂ ĐỒ</h6>
                                    <p>
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </p>
                                    <p id="sp-loai" style={{ fontFamily: "gotham-thin" }}>
                                        (4 ngăn, trắng gỗ)
                                    </p>
                                    <p id="sp-gia" style={{ fontFamily: "gotham-medium" }}>
                                        2.499.000 đ
                                    </p>
                                </div>
                                
                                {/* </section> */}
                            </div>
                        </div>
                        {/* về chúng tôi  */}
                        <div className="container-fluild" id="ve-chung-toi">
                            <div className="banner-vct">
                                <img
                                    id="banner-chinh-vct"
                                    src="./imgs/AnhCat/TRANGCHU.png"
                                    width="100%"
                                    height="950px"
                                    alt=""
                                />
                                <div className="row">
                                    <h2 id="h2_1" style={{ fontFamily: "gotham-ultra" }}>
                                        VỀ CHÚNG TÔI
                                        <center>
                                            <div
                                                style={{ backgroundColor: "#bd945f", width: 160, height: 8 }}
                                            />
                                        </center>
                                    </h2>
                                    <div className="col-6" id="vct1">
                                        <img src="./imgs/AnhCat/ve-chung-toi.jpg" alt="" />
                                    </div>
                                    <div className="col-6" id="vct2">
                                        <h5 style={{ fontFamily: "gotham-medium" }}>
                                            NỘI THẤT{" "}
                                            <b style={{ fontFamily: "gotham-ultra" }}>HOÀNG HOAN</b>
                                        </h5>
                                        <h5 style={{ fontFamily: "gotham-medium" }}>
                                            UY TÍN SONG HÀNH CHẤT LƯỢNG
                                        </h5>
                                        <p style={{ fontFamily: "gotham-medium" }}>
                                            Nội thất{" "}
                                            <b style={{ fontFamily: "gotham-ultra" }}>Hoàng Hoan</b> chúng
                                            tôi tuự hào là đứa con tinh thần ra đời sau hơn 30 năm hoạt động
                                            trong lĩnh vực kinh doanh đồ gỗ nội thất với thương hiệu ĐỒ GỖ
                                            HOÀNG HOAN nổi tiếng
                                        </p>
                                        <p style={{ fontFamily: "gotham-medium" }}>
                                            Tài nguyên của chúng tôi là đội ngũ kiến trúc sư tốt nghiệp ĐH
                                            kiến trúc Hà Nội với nhiều năm kinh nghiệm, luôn tràn đầy nhiệt
                                            huyết và sức sáng tạo của tuổi trẻ. Thế mạnh của chúng tôi là sở
                                            hữu xưởng nội thất hơn 10.000m2 tại Hà Nội sản xuất đa dạng các
                                            sản phẩm với giá cả luôn cạnh tranh.
                                        </p>
                                        <ul>
                                            <li>
                                                <img src="./imgs/AnhCat/ve-chung-toi-1.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="./imgs/AnhCat/ve-chung-toi-2.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="./imgs/AnhCat/ve-chung-toi-3.jpg" alt="" />
                                            </li>
                                            <li id="vct2-chen">
                                                <img src="./imgs/AnhCat/ve-chung-toi-4.jpg" alt="" />
                                                <p>Xem thêm &gt;</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <h2 id="h2_2" style={{ fontFamily: "gotham-ultra" }}>
                                        TẠI SAO NÊN CHỌN HOÀNG HOAN?
                                        <center>
                                            <div
                                                style={{
                                                    backgroundColor: "#bd945f",
                                                    width: 160,
                                                    height: 8,
                                                    marginTop: "0.3rem"
                                                }}
                                            />
                                        </center>
                                    </h2>
                                    <div className="col-6" id="vct3">
                                        <img src="./imgs/AnhCat/chon-1.jpg" alt="" />
                                        <ul>
                                            <li>
                                                <h4 style={{ fontFamily: "gotham-ultra" }}>
                                                    CHÍNH SÁCH ĐÁNH GIÁ
                                                </h4>
                                            </li>
                                            <li style={{ fontFamily: "gotham-medium" }}>
                                                Tốt nhất và công giá trên website
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6" id="vct4">
                                        <img src="./imgs/AnhCat/chon-2.jpg" alt="" />
                                        <ul>
                                            <li>
                                                <h4 style={{ fontFamily: "gotham-ultra" }}>SẢN XUẤT</h4>
                                            </li>
                                            <li style={{ fontFamily: "gotham-medium" }}>
                                                Trực tiếp sản xuất bởi đội ngũ nhân viên hàng đầu
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6" id="vct3">
                                        <img src="./imgs/AnhCat/chon-3.jpg" alt="" />
                                        <ul>
                                            <li>
                                                <h4 style={{ fontFamily: "gotham-ultra" }}>BẢO HÀNH</h4>
                                            </li>
                                            <li style={{ fontFamily: "gotham-medium" }}>
                                                Dịch vụ bảo hành sản phẩm tốt nhất khu vực
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6" id="vct4">
                                        <img src="./imgs/AnhCat/chon-4.jpg" alt="" />
                                        <ul>
                                            <li>
                                                <h4 style={{ fontFamily: "gotham-ultra" }}>CHẤT LƯỢNG</h4>
                                            </li>
                                            <li style={{ fontFamily: "gotham-medium" }}>
                                                Cam kết chất lượng sản phẩm và tiến độ thi công
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* tin tức đối tác  */}
                <section>
                    <div className="container" id="tintuc-doitac">
                        <h2 style={{ fontFamily: "gotham-ultra" }}>
                            TIN TỨC
                            <center>
                                <div style={{ backgroundColor: "#bd945f", width: 160, height: 8 }} />
                            </center>
                        </h2>
                        <div className="row">
                            <div className="col-6" id="tt-1">
                                <img src="./imgs/AnhCat/tintuc-1.jpg" alt="" />
                                <div id="tt-text">
                                    <h5 style={{ fontFamily: "gotham-medium" }}>
                                        Cách chọn Sofa cho phòng khách nhà bạn thêm phần sang trọng
                                    </h5>
                                    <p style={{ fontFamily: "gotham-thin" }}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet cum
                                        molestiae ipsa praesentium laborum
                                    </p>
                                </div>
                            </div>
                            <div className="col-6" id="tt-2">
                                <img src="" alt="" />
                                <ul>
                                    <li>
                                        <ul id="tt-box">
                                            <li>
                                                <img src="./imgs/AnhCat/tintuc-2.jpg" alt="" />
                                            </li>
                                            <li>
                                                <h6 style={{ fontFamily: "gotham-medium", color: "#bd945f" }}>
                                                    Trang trí phòng khách cho thêm năng động
                                                </h6>
                                                <p style={{ fontFamily: "gotham-thin" }}>
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                    Quis ullam magnam esse magni odit delectus nesciunt enim
                                                    unde eius.{" "}
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul id="tt-box">
                                            <li>
                                                <img src="./imgs/AnhCat/tintuc-3.jpg" alt="" />
                                            </li>
                                            <li>
                                                <h6 style={{ fontFamily: "gotham-medium", color: "#bd945f" }}>
                                                    Cập nhật xu hướng phòng khách phong cách tối giản
                                                </h6>
                                                <p style={{ fontFamily: "gotham-thin" }}>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Vitae non vel quam molestias veritatis blanditiis!{" "}
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul id="tt-box">
                                            <li>
                                                <img src="./imgs/AnhCat/tintuc-4.jpg" alt="" />
                                            </li>
                                            <li>
                                                <h6 style={{ fontFamily: "gotham-medium", color: "#bd945f" }}>
                                                    Cách sắp xếp vị trí bàn ăn và nhà bếp một cách rộng rãi
                                                </h6>
                                                <p style={{ fontFamily: "gotham-thin" }}>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                                    Mollitia, expedita blanditiis tempora vel in doloribus?
                                                    Quasi, natus illum tenetur laboriosam iusto, debitis
                                                    recusandae porro ab aut maxime temporibus, incidunt harum.
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        style={{
                                            fontFamily: "gotham-medium",
                                            color: "#bd945f",
                                            marginLeft: "0.5rem"
                                        }}
                                    >
                                        Xem thêm &gt;
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row" id="dt">
                            <h2 style={{ fontFamily: "gotham-ultra" }}>
                                ĐỐI TÁC
                                <center>
                                    <div
                                        style={{ backgroundColor: "#bd945f", width: 160, height: 8 }}
                                    />
                                </center>
                            </h2>
                            <div className="col-12">
                                <ul>
                                    <li id="dt1">
                                        <img src="./imgs/AnhCat/vinpearl.jpg" alt="" />
                                    </li>
                                    <li id="dt2">
                                        <img src="./imgs/AnhCat/dt-muongthanh.jpg" alt="" />
                                    </li>
                                    <li id="dt3">
                                        <img src="./imgs/AnhCat/dt-sharaton.jpg" alt="" />
                                    </li>
                                    <li id="dt4">
                                        <img src="./imgs/AnhCat/dt-coffee-house.jpg" alt="" />
                                    </li>
                                    <li id="dt5">
                                        <img src="./imgs/AnhCat/dt--marvella.jpg" alt="" />
                                    </li>
                                    <li id="dt6">
                                        <img src="./imgs/AnhCat/dt--sunrise--sapa.jpg" alt="" />
                                    </li>
                                    <li id="dt7">
                                        <img src="./imgs/AnhCat/dt-mellisa.jpg" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* liên hệ  */}
                <section id="lienhe" style={{ fontFamily: "gotham-medium", color: "white" }}>
                    <div className="container-fluild">
                        <div className="lienhe-banner">
                            <img src="./imgs/AnhCat/lienhe-bg.jpg" width="100%" alt="" />
                            <div className="lienhe-banner2">
                                <img src="./imgs/AnhCat/lienhe_1.png" alt="" />
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <ul>
                                        <li id="lienhe1">
                                            <p>Trải nghiệm dịch vụ</p>
                                            <h5 style={{ fontFamily: "gotham-ultra" }}>
                                                <b>cùng Hoàng Hoan ngay</b>
                                                <div
                                                    style={{
                                                        backgroundColor: "#ffffff",
                                                        width: 160,
                                                        height: 8
                                                    }}
                                                />
                                            </h5>
                                        </li>
                                        <li id="lienhe2">
                                            <p>thông tin liên hệ</p>
                                            <input type="text" placeholder="Email/Số điện thoại" />
                                        </li>
                                        <li id="lienhe3">
                                            <button style={{ border: "#ffff" }}>Gửi</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
    )
}

export default TrangChu

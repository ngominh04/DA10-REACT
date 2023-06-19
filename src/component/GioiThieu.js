import React from 'react'

function GioiThieu() {
    return (
        <>
            <>
                <section id="gt">
                    <div id="banner">
                        <img src="./imgs/AnhCat/gt-banner.png" width="100%" alt="" />
                        <div id="banner-text">
                            <img src="./imgs/AnhCat/gt-logo.png" alt="" />
                            <h1 style={{ fontFamily: "gotham-ultra", color: "white" }}>
                                GIỚI THIỆU
                            </h1>
                        </div>
                        {/* box  */}
                        <div
                            className="container"
                            id="banner-box"
                            style={{ backgroundColor: "white" }}
                        >
                            {/* thành lập và phát triển  */}
                            <div className="container" id="thanhlap_pt">
                                <center>
                                    <h2>THÀNH LẬP &amp; PHÁT TRIỂN</h2>
                                </center>
                                <center>
                                    <div
                                        style={{ backgroundColor: "#bd945f", width: 160, height: 8 }}
                                    />
                                </center>
                                <div className="row">
                                    <div className="col-6">
                                        <img src="./imgs/AnhCat/gt-thanhlap&pt.png" alt="" />
                                    </div>
                                    <div className="col-6" id="thanhlap_pt-text">
                                        <p>
                                            Nội thất Hoàng Hoan được xây dựng dựa trên tình yêu, đam mê của
                                            tôi đối với nghề mộc và khao khát mang những sản phẩm nội thất
                                            đẹp của mình đến với khách hàng thân yêu
                                        </p>
                                        <p>
                                            Cả 1 quá trình từ 1 người thợ phụ rồi được làm thợ mộc chính, tự
                                            tạo ra cho mình 1 phân xưởng nhỏ dần phát triển và hiện tại
                                            Hoàng Hoan đã là 1 trong những công ty có dịch vụ thiết kế và
                                            thi công nội thất uy tín chất lượng với giá tốt nhất Hà Nội với
                                            sứ mềnh "đem dến cho khách hàng không gian nội thất hoàn hảo".
                                        </p>
                                        <p>
                                            Hoàng Hoan luôn hỗ trợ để tạo ra không gian đẹp cho khách hàng
                                            theo nhiều gam màu sắc khác nhau và phong cách đa dạng, theo
                                            đúng ý thích, lứa tuổi và phong thủy của khách hàng.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*end thành lập và phát triển  */}
                            {/* tầm nhìn  */}
                            <section className="container" id="tam-nhin">
                                <center>
                                    <h2>TẦM NHÌN</h2>
                                </center>
                                <center>
                                    <div
                                        style={{ backgroundColor: "#bd945f", width: 160, height: 8 }}
                                    />
                                </center>
                                <div className="row">
                                    <div className="col-12">
                                        <img src="./imgs/AnhCat/gt-tamnhin.png" alt="" />
                                        <p>
                                            Chúng tôi luôn hướng đến việc tạo ra sản phẩm nội thất trên
                                            triết lý tôn trọng và giữ gìn những gì tự nhiên đã ban tặng cho
                                            con người. Chúng tôi luôn tìm tòi về ứng dụng các giải pháp sản
                                            phẩm và công nghệ tiên tiến nhất, hợp tác với các đối tác công
                                            nghệ hàng đầu thế giới, tìm kiếm và phát triển các vùng nguyên
                                            liệu tự nhiên được thiên nhiên chọn lọc, ưu đãi trong nước lẫn
                                            nước ngoài, tất cả nhằm tạo ra các sản phẩm nội thất tự nhiên
                                            gần gũi cho những khách hàng Việt Nam.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            {/* end tầm nhìn  */}
                            {/* sứ mệnh  */}
                            <section className="container" id="su-menh">
                                <center>
                                    <h2>SỨ MỆNH</h2>
                                </center>
                                <center>
                                    <div
                                        style={{ backgroundColor: "#bd945f", width: 160, height: 8 }}
                                    />
                                </center>
                                <div className="row">
                                    <div className="col-6" id="su-menh-box">
                                        <ul>
                                            <li>
                                                <img src="./imgs/AnhCat/gt_1.png" alt="" />
                                            </li>
                                            <li>
                                                <h6>Với xã hội</h6>
                                                <p>
                                                    Hài hòa lợi ích doanh nghiệp với lợi ích xã hội ,tích cực
                                                    cùng cộng đồng xây dựng môi trường sống bền vững
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6" id="su-menh-box">
                                        <ul>
                                            <li>
                                                <img src="./imgs/AnhCat/gt_2.png" alt="" />
                                            </li>
                                            <li>
                                                <h6>Với nhân viên</h6>
                                                <p>
                                                    Xây dựng môi trường làm việc chuyên nghiệp, năng động, sáng
                                                    tạo và nhân văn
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6" id="su-menh-box">
                                        <ul>
                                            <li>
                                                <img src="./imgs/AnhCat/gt_3.png" alt="" />
                                            </li>
                                            <li>
                                                <h6>Với đối tác</h6>
                                                <p>
                                                    Đề cao tinh thần hợp tác cùng phát triển, cam kết trở thành
                                                    "Người đồng hành số 1" của các đối tác.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6" id="su-menh-box">
                                        <ul>
                                            <li>
                                                <img src="./imgs/AnhCat/gt_4.png" alt="" />
                                            </li>
                                            <li>
                                                <h6>Vói thị trường</h6>
                                                <p>
                                                    Cung cấp các sản phẩm với chất lượng quốc tế và phù hợp với
                                                    con người Việt Nam.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            {/* end sứ mệnh */}
                        </div>
                    </div>
                </section>
                <div className="khoang-trong" />
            </>

        </>
    )
}

export default GioiThieu

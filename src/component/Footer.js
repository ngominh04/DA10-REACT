import React from 'react'

function Footer() {
    return (
        <>
            <footer style={{ fontFamily: "gotham-thin" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-4" id="ft-1">
                            <ul style={{ width: 500 }}>
                                <li>
                                    <h6 style={{ fontFamily: "gotham-medium", color: "white" }}>
                                        THÔNG TIN CHUNG
                                        <div
                                            style={{ backgroundColor: "#ffffff", width: 80, height: 3 }}
                                        />
                                    </h6>
                                </li>
                                <li>
                                    <h5 style={{ fontFamily: "gotham-medium" }}>
                                        CÔNG TY TNHH HOÀNG HOAN
                                    </h5>
                                </li>
                                <li>
                                    <img src="./imgs/AnhCat/ft-call.png" alt="" /> 0999.999.999
                                </li>
                                <li>
                                    <img
                                        src="./imgs/AnhCat/ft-tn.png"
                                        width="20px"
                                        height="20px"
                                        alt=""
                                    />{" "}
                                    CSKH@hoanghoan.vn
                                </li>
                                <li>
                                    <img src="./imgs/AnhCat/ft-diachi.png" alt="" /> Số 1 Nguyễn Trãi,
                                    Thanh Xuân,Hà Nội
                                </li>
                            </ul>
                        </div>
                        <div className="col-4" id="ft-2">
                            <ul>
                                <li>
                                    <h6 style={{ fontFamily: "gotham-medium", color: "#ffffff" }}>
                                        VỀ CHÚNG TÔI
                                        <div
                                            style={{ backgroundColor: "#ffffff", width: 80, height: 3 }}
                                        />
                                    </h6>
                                </li>
                                <li>Giới thiệu</li>
                                <li>Sản phẩm</li>
                                <li>Tin tức</li>
                                <li>Đối tác</li>
                                <li>Liên hệ</li>
                            </ul>
                        </div>
                        <div className="col-4" style={{ marginLeft: "-1rem" }} id="ft-3">
                            <ul id="ft-box">
                                <li>
                                    <h6 style={{ fontFamily: "gotham-medium", color: "white" }}>
                                        KẾT NỐI VỚI CHÚNG TÔI
                                        <div
                                            style={{ backgroundColor: "#ffffff", width: 80, height: 3 }}
                                        />
                                    </h6>
                                </li>
                                <li>
                                    <img id="ft-3-1" src="./imgs/AnhCat/ft-fb.png" alt="" />
                                    <img id="ft-3-1" src="./imgs/AnhCat/ft-zl.png" alt="" />
                                    <img id="ft-3-1" src="./imgs/AnhCat/ft-tn.png" alt="" />
                                </li>
                                <li>
                                    <img id="ft-3-2" src="./imgs/AnhCat/ft.png" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer

import { Breadcrumb, Button, Image } from "antd";
import loan from "../assets/img/loan.gif";
import React from "react";
import { Content } from "antd/lib/layout/layout";

const HomePage = () => {
    return (
        <div>
            {/* --- Content --- */}
            <Content className="content__data">
                <Breadcrumb className="content__breadcrumb">
                    <Breadcrumb.Item>Homepage</Breadcrumb.Item>
                </Breadcrumb>
                <div className="homepage">
                    <div className="site-layout-background card">
                        <h3 className="title">Profile</h3>
                        <div className="data__diri">
                            <div className="homepage__content">
                                <p>
                                    <span>Nomor Induk KTP</span>
                                    12345678900999
                                </p>
                                <p>
                                    <span>Nama Lengkap</span>
                                    Rizkhita H. Muhtar
                                </p>
                                <p>
                                    <span>Tempat Tanggal Lahir</span>
                                    Bandung, 6 September 1999
                                </p>
                                <p>
                                    <span>Bukti Selfie KTP</span>
                                    Rizkhita-H-Muhtar.pdf
                                    <a href="#a" style={{ marginLeft: 10 }}>
                                        PDF
                                    </a>
                                </p>
                                <p>
                                    <span>Bukti Slip Gaji</span>
                                    file-slip-gaji.pdf
                                    <a href="#a" style={{ marginLeft: 10 }}>
                                        PDF
                                    </a>
                                </p>
                                <p>
                                    <span>Status Verifikasi</span>
                                    <h4 style={{ color: "#1890ff" }}>
                                        Menunggu Verifikasi
                                    </h4>
                                </p>
                            </div>
                        </div>
                        <div className="button__reset">
                            <Button size="large" className="button_1">
                                Reset Data Diri
                            </Button>
                        </div>
                    </div>
                    <div className="site-layout-background card">
                        <h3 className="title">Pengajuan KPR Terakhir</h3>
                        <div className="data__diri">
                            <Image src={loan} alt="" preview={false}></Image>
                            <div
                                className="homepage__content"
                                style={{ display: "initial" }}
                            >
                                <p>
                                    <span>Harga Rumah</span>
                                    Rp. 500.000.000
                                </p>
                            </div>
                            <div className="button__reset">
                                <Button size="large" className="button_1">
                                    Reset Data Diri
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default HomePage;

import { Breadcrumb, Button } from "antd";

import React from "react";
import { Content } from "antd/lib/layout/layout";

const Beranda = () => {
    return (
        <div>
            {/* --- Content --- */}
            <Content className="content__data">
                <Breadcrumb className="content__breadcrumb">
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background card">
                    <h3 className="title">Data Diri Pengajuan KPR</h3>
                    <div className="data__diri">
                        <div className="data__content">
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
                                <span>Alamat Saat Ini</span>
                                Jl. Raya Bandung, Gedung Sate, Jawa Barat
                            </p>
                            <p>
                                <span>Pekerjaan</span>
                                Freelance Software Enggineer
                            </p>
                            <p>
                                <span>Pendapatan Per Bulan</span>
                                Rp. 8.000.000
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
                    <div className="data__diri">
                        <div className="data__content">
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
                                <span>Alamat Saat Ini</span>
                                Jl. Raya Bandung, Gedung Sate, Jawa Barat
                            </p>
                            <p>
                                <span>Pekerjaan</span>
                                Freelance Software Enggineer
                            </p>
                            <p>
                                <span>Pendapatan Per Bulan</span>
                                Rp. 8.000.000
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
                                <h4 style={{ color: "#e00202" }}>
                                    Tidak Terverifikasi
                                </h4>
                            </p>
                        </div>
                    </div>
                    <div className="button__reset">
                        <Button size="large" className="button_1">
                            Reset Data Diri
                        </Button>
                    </div>
                    <div className="data__diri">
                        <div className="data__content">
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
                                <span>Alamat Saat Ini</span>
                                Jl. Raya Bandung, Gedung Sate, Jawa Barat
                            </p>
                            <p>
                                <span>Pekerjaan</span>
                                Freelance Software Enggineer
                            </p>
                            <p>
                                <span>Pendapatan Per Bulan</span>
                                Rp. 8.000.000
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
                                <h4 style={{ color: "#08c40b" }}>
                                    Terverifikasi, lengkapi dokumen tambahan.
                                </h4>
                            </p>
                        </div>
                    </div>
                    <div className="button__reset">
                        <Button size="large" className="button_2">
                            Lengkapi Data
                        </Button>
                    </div>
                </div>
                <div
                    className="site-layout-background card"
                    style={{ marginTop: 5 }}
                >
                    <h3 className="title">Kelengkapan Data KPR</h3>
                    <div className="data__diri">
                        <div className="data__content">
                            <p>
                                <span>Alamat Rumah</span>
                                Jl. Mulawarman Selatan Dalam II, Gedung Sate,
                                Bandung Raya, Jawa Tengah
                            </p>
                            <p>
                                <span>Luas Tanah / Rumah</span>
                                500 m2
                            </p>
                            <p>
                                <span>Harga Rumah</span>
                                Rp. 500.000.000
                            </p>
                            <p>
                                <span>Jangka Pembayaran</span>5 Tahun
                            </p>
                            <p>
                                <span>Dokumen Pendukung</span>
                                file_pendukung.pdf
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
                    <div className="data__diri">
                        <div className="data__content">
                            <p>
                                <span>Alamat Rumah</span>
                                Jl. Mulawarman Selatan Dalam II, Gedung Sate,
                                Bandung Raya, Jawa Tengah
                            </p>
                            <p>
                                <span>Luas Tanah / Rumah</span>
                                500 m2
                            </p>
                            <p>
                                <span>Harga Rumah</span>
                                Rp. 500.000.000
                            </p>
                            <p>
                                <span>Jangka Pembayaran</span>5 Tahun
                            </p>
                            <p>
                                <span>Dokumen Pendukung</span>
                                file_pendukung.pdf
                                <a href="#a" style={{ marginLeft: 10 }}>
                                    PDF
                                </a>
                            </p>
                            <p>
                                <span>Status Verifikasi</span>
                                <h4 style={{ color: "#e00202" }}>Ditolak</h4>
                            </p>
                        </div>
                    </div>
                    <div className="button__reset">
                        <Button size="large" className="button_1">
                            Reset Pengajuan KPR
                        </Button>
                    </div>
                    <div className="data__diri">
                        <div className="data__content">
                            <p>
                                <span>Alamat Rumah</span>
                                Jl. Mulawarman Selatan Dalam II, Gedung Sate,
                                Bandung Raya, Jawa Tengah
                            </p>
                            <p>
                                <span>Luas Tanah / Rumah</span>
                                500 m2
                            </p>
                            <p>
                                <span>Harga Rumah</span>
                                Rp. 500.000.000
                            </p>
                            <p>
                                <span>Jangka Pembayaran</span>5 Tahun
                            </p>
                            <p>
                                <span>Dokumen Pendukung</span>
                                file_pendukung.pdf
                                <a href="#a" style={{ marginLeft: 10 }}>
                                    PDF
                                </a>
                            </p>
                            <p>
                                <span>Status Verifikasi</span>
                                <h4 style={{ color: "#08c40b" }}>Disetujui</h4>
                            </p>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default Beranda;

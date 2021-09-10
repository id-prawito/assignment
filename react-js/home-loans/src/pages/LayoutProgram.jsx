import React from "react";
import "../index.css";
import logo from "../assets/img/logo.svg";
import Routes from "../components/Routes";
import { Link } from "react-router-dom";

import { Layout, Menu, Image } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

const { Header, Footer, Sider } = Layout;

class LayoutProgram extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;

        return (
            <Layout style={{ minHeight: "100vh" }}>
                {/* --- Sidebar --- */}
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo">
                        <Image src={logo} alt="" preview={false} />
                    </div>

                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <Link to="/">Beranda</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            <Link to="/data">Pengajuan KPR </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<DesktopOutlined />}>
                            <Link to="/homepage">Homepage</Link>
                        </Menu.Item>
                        <Menu.Item key="9" icon={<LogoutOutlined />}>
                            Log Out
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    {/* --- Header --- */}
                    <Header className="site-layout-background atas" />
                    <Routes />
                    {/* --- Footer --- */}
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default LayoutProgram;

import { HomeOutlined, AlertOutlined, LaptopOutlined, YoutubeOutlined, ReadOutlined, AppstoreAddOutlined, CodeOutlined, BulbOutlined, MenuUnfoldOutlined, MenuFoldOutlined, HistoryOutlined } from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Introduction } from "./Content";
import './Container.css'

const { Header, Content, Footer, Sider } = Layout;

/* -------------------------------------------------------------------------- */
/*                               Component Menu                               */
/* -------------------------------------------------------------------------- */

function MenuHere() {
	const navigate = useNavigate();
	return (
		<div>
			{/* ---------------------------------- Logo ---------------------------------- */}
			<div className="css-logo">
				<img src="src/assets/logo-clean-nicelist.svg" />
			</div>

			{/* ---------------------------------- Menu ---------------------------------- */}
			<Menu
				onClick={({ key }) => {
					switch (key) {
						case "nicelist-v1": window.open("https://github.com/alamehan/nice-list", "_blank"); break;
						case "nicelist-v2": window.open("https://alamehan.github.io/alamehan-v1/news", "_blank"); break;
						default: navigate(key);
					}
				}
				}
				defaultSelectedKeys={["/"]}
				mode="inline"
				items={[
					{ label: "Introduction", key: "/", icon: <HomeOutlined /> },
					{ label: "Life Advice", key: "/life-advice", icon: <BulbOutlined /> },
					{
						label: "Daily Check", key: "/daily-check", icon: <AlertOutlined />,
						children: [
							{ label: "Lates News", key: "/daily-check/latest-news" },
							{ label: "Resources", key: "/daily-check/resources" },
							{ label: "Jobs", key: "/daily-check/jobs" },
						]
					},
					{
						label: "Top Courses", key: "/top-courses", icon: <LaptopOutlined />,
						children: [
							{ label: "General", key: "/top-courses/general" },
							{ label: "Coursera", key: "/top-courses/coursera" },
						]
					},
					{
						label: "Top Youtube", key: "/top-youtube", icon: <YoutubeOutlined />,
						children: [
							{ label: "Top 10", key: "/top-youtube/top-10" },
							{ label: "All Channel", key: "/top-youtube/all-channel" },
						]
					},
					{
						label: "Best Book", key: "/best-book", icon: <ReadOutlined />,
						children: [
							{ label: "DK Top Series", key: "/best-book/dk-top-series" },
							{ label: "DK Categories", key: "/best-book/dk-categories" },
							{ label: "DK Non Series", key: "/best-book/dk-non-series" },
							{ label: "National Geographic", key: "/best-book/national-geographic" },
							{ label: "Series", key: "/best-book/series" },
							{ label: "English", key: "/best-book/english" },
							{ label: "Travel", key: "/best-book/travel" },
							{ label: "Favorite", key: "/best-book/favorite" },
						]
					},
					{
						label: "Extension", key: "/extension", icon: <AppstoreAddOutlined />,
						children: [
							{ label: "Google Chrome", key: "/extension/google-chrome" },
							{ label: "VS Code", key: "/extension/vs-code" },
							{ label: "Figma", key: "/extension/figma" },
						]
					},
					{
						label: "Software", key: "/software", icon: <CodeOutlined />,
						children: [
							{ label: "Top Apps", key: "/software/top-apps" },
							{ label: "Developer", key: "/software/developer" },
							{ label: "Miscellaneous", key: "/software/miscellaneous" },
						]
					},
					/* ------------------------------ External Link ----------------------------- */
					{
						label: "Legacy", key: "/legacy", icon: <HistoryOutlined />,
						children: [
							{ label: "NiceList V1", key: "nicelist-v1" },
							{ label: "NiceList V2", key: "nicelist-v2" },
						]
					},
				]}
			/>
		</div>
	)
}

/* -------------------------------------------------------------------------- */
/*                              Component Content                             */
/* -------------------------------------------------------------------------- */

function ContentHere() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Introduction />} />
				<Route path="/life-advice" element={<Introduction />} />
			</Routes>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/*                             Component Watermark                            */
/* -------------------------------------------------------------------------- */

function WatermarkHere() {
	return (
		<div className="css-alamehan">
			<a href="https://alamehan.github.io/" target="_blank">
				<img src="src/assets/memoji-alamehan.png" style={{ width: "96px" }} />
			</a>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/*                                  Main App                                  */
/* -------------------------------------------------------------------------- */

const SideMenu = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout className="css-layout-container" hasSider>
			{/* collapsedWidth yaitu lebar menu saat diciutkan */}
			<Sider className="css-sider" trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} collapsedWidth={window.innerWidth < 768 ? "0" : "72"} breakpoint="md" >
				<MenuHere />
			</Sider>

			{/* kondisi margin-left menyesuaikan dengan lebar layar & collapsedWidth di atas */}
			<Layout style={collapsed ? (window.innerWidth < 768 ? { marginLeft: 0 } : { marginLeft: 72 }) : { marginLeft: 200 }} >
				<Header className="css-header">
					<Button className="css-btn-collapse" type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)} />
					<a href="https://github.com/alamehan/nice-list-web" target="_blank"><img src="src/assets/link-github.svg" style={{ margin: "26px 24px 0 0" }}></img></a>
				</Header>
				<Content style={{ margin: "24px 16px" }}>
					<ContentHere />
				</Content>
				{/* <Footer style={{ textAlign: "center" }}> Built by Raihan Allaam ✌️ </Footer> */}
			</Layout>

			<WatermarkHere />
		</Layout>
	);
};

export default SideMenu;

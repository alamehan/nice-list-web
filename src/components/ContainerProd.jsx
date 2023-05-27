import { HomeOutlined, AlertOutlined, LaptopOutlined, YoutubeOutlined, ReadOutlined, AppstoreAddOutlined, CodeOutlined, BulbOutlined, MenuUnfoldOutlined, MenuFoldOutlined, HistoryOutlined } from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Example, Introduction } from "./Content";
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
				<img src="public/logo-clean-nicelist.svg" />
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
					{ label: "Introduction", key: "/projects/nice-list-web/", icon: <HomeOutlined /> },
					{ label: "Life Advice", key: "/projects/nice-list-web/life-advice", icon: <BulbOutlined /> },
					{
						label: "Daily Check", key: "/projects/nice-list-web/daily-check", icon: <AlertOutlined />,
						children: [
							{ label: "Lates News", key: "/projects/nice-list-web/daily-check/latest-news" },
							{ label: "Resources", key: "/projects/nice-list-web/daily-check/resources" },
							{ label: "Jobs", key: "/projects/nice-list-web/daily-check/jobs" },
						]
					},
					{
						label: "Top Courses", key: "/projects/nice-list-web/top-courses", icon: <LaptopOutlined />,
						children: [
							{ label: "General", key: "/projects/nice-list-web/top-courses/general" },
							{ label: "Coursera", key: "/projects/nice-list-web/top-courses/coursera" },
						]
					},
					{
						label: "Top Youtube", key: "/projects/nice-list-web/top-youtube", icon: <YoutubeOutlined />,
						children: [
							{ label: "Top 10", key: "/projects/nice-list-web/top-youtube/top-10" },
							{ label: "All Channel", key: "/projects/nice-list-web/top-youtube/all-channel" },
						]
					},
					{
						label: "Best Book", key: "/projects/nice-list-web/best-book", icon: <ReadOutlined />,
						children: [
							{ label: "DK Top Series", key: "/projects/nice-list-web/best-book/dk-top-series" },
							{ label: "DK Categories", key: "//projects/nice-list-webbest-book/dk-categories" },
							{ label: "DK Non Series", key: "/projects/nice-list-web/best-book/dk-non-series" },
							{ label: "National Geographic", key: "/projects/nice-list-web/best-book/national-geographic" },
							{ label: "Series", key: "/projects/nice-list-web/best-book/series" },
							{ label: "English", key: "/projects/nice-list-web/best-book/english" },
							{ label: "Travel", key: "/projects/nice-list-web/best-book/travel" },
							{ label: "Favorite", key: "/projects/nice-list-web/best-book/favorite" },
						]
					},
					{
						label: "Extension", key: "/projects/nice-list-web/extension", icon: <AppstoreAddOutlined />,
						children: [
							{ label: "Google Chrome", key: "/projects/nice-list-web/extension/google-chrome" },
							{ label: "VS Code", key: "/projects/nice-list-web/extension/vs-code" },
							{ label: "Figma", key: "/projects/nice-list-web/extension/figma" },
						]
					},
					{
						label: "Software", key: "/projects/nice-list-web/software", icon: <CodeOutlined />,
						children: [
							{ label: "Top Apps", key: "/projects/nice-list-web/software/top-apps" },
							{ label: "Developer", key: "/projects/nice-list-web/software/developer" },
							{ label: "Miscellaneous", key: "/projects/nice-list-web/software/miscellaneous" },
						]
					},
					/* ------------------------------ External Link ----------------------------- */
					{
						label: "Legacy", key: "/projects/nice-list-web/legacy", icon: <HistoryOutlined />,
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
				<Route path="/projects/nice-list-web/" element={<Introduction />} />
				<Route path="/projects/nice-list-web/life-advice" element={<Example />} />
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
				<img src="public/memoji-alamehan.png" style={{ width: "96px" }} />
			</a>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/*                                  Main App                                  */
/* -------------------------------------------------------------------------- */

const ContainerProd = () => {
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
					<a href="https://github.com/alamehan/nice-list-web" target="_blank"><img src="public/link-github.svg" style={{ margin: "26px 24px 0 0" }}></img></a>
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

export default ContainerProd;

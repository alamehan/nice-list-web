import { ConfigProvider } from "antd";
import ContainerDev from "./components/ContainerDev";
import ContainerProd from "./components/ContainerProd";

const App = () => {
	return (
		<ConfigProvider
			// Kustomisasi tema: https://ant.design/docs/react/customize-theme
			theme={{
				token: {
					borderRadius: "12px",
					colorPrimary: "#6556D5",
					boxShadow: "0 6px 16px 0 rgba(101, 86, 213, 0.08), 0 3px 6px -4px rgba(101, 86, 213, 0.12), 0 9px 28px 8px rgba(101, 86, 213, 0.05)",
				},
			}}
		>
			<ContainerDev />
			{/* <ContainerProd /> */}
		</ConfigProvider>
	);
};

export default App;

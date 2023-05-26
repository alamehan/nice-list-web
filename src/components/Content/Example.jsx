import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, theme } from "antd";

const Example = () => {
  const { token: { boxShadow, borderRadius }, } = theme.useToken();

  return (
    <div>
      {/* ------------------------------- Breadcrumb ------------------------------- */}

      <Breadcrumb style={{ margin: '16px 0' }} >
        <Breadcrumb.Item><a href="#"><HomeOutlined /></a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="#">Introduction</a></Breadcrumb.Item>
      </Breadcrumb>

      {/* --------------------------------- Content -------------------------------- */}

      <div style={{ background: "white", padding: 24, minHeight: "50dvh", boxShadow: boxShadow, borderRadius: borderRadius }}>
        Latar belakang NiceList disini... copy dari GitHub.
      </div>
    </div>
  )
}

export default Example
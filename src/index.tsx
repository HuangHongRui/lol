import './index.css';
import { Layout } from 'antd';
import Home from './page/Home';
import NotFound from './page/NotFound';
import Header from './component/Header';
import Footer from './component/Footer';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const { Content } = Layout;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: `calc(100vh - 130px)`,
  lineHeight: '120px',
};

root.render(
  <BrowserRouter>
    <Layout>
      <Header />
      <Content style={contentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  </BrowserRouter>
);
import { Layout } from 'antd'
const { Footer } = Layout;

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 65,
  paddingInline: 50,
  // lineHeight: '64px',
  backgroundColor: '#001529'
};

function App() {
  return (
    <Footer style={footerStyle}>
      FOOTER
    </Footer>
  );
}

export default App;
import { Button, Layout, Space } from 'antd'
import { useNavigate } from 'react-router-dom';
const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 65,
  paddingInline: 50,
  lineHeight: '64px',
};

function App() {
  const navigate = useNavigate();

  const fnLinkA = () => navigate('/');

  const fnLinkB = () => navigate('/B');

  return (
    <Header style={headerStyle}>
      <Space size={6}>
        <Button onClick={fnLinkA}> A </Button>
        <Button onClick={fnLinkB}> B </Button>
      </Space>
    </Header>
  );
}

export default App;
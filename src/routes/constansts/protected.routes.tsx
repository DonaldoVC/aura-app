import Home from 'pages/Home';
import Search from 'pages/Search';
import AITool from 'pages/AITool';

const ProtectedRoutes = [
  {
    title: '',
    path: '/',
    element: <Home />,
  },
  {
    title: 'Search',
    path: '/search',
    element: <Search />,
  },
  {
    title: 'AITool',
    path: '/ai-tool',
    element: <AITool />,
  },
];

export default ProtectedRoutes;

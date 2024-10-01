import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

import ContextWrapper from './context';
import AppRoutes from './routes';
import useViewportHeight from './hooks/useViewportHeight';

function App() {
  useViewportHeight();

  return (
    <ContextWrapper>
      <div style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
        <AppRoutes />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </ContextWrapper>
  );
}

export default App;

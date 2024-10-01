import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

import ContextWrapper from './context';
import AppRoutes from './routes';

function App() {
  return (
    <ContextWrapper>
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
    </ContextWrapper>
  );
}

export default App;

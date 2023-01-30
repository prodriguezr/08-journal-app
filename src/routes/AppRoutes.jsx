import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes';
import { JournalRoutes } from '../journal/routes';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Login and Register */}
      <Route path='auth/*' element={<AuthRoutes />} />
      {/* Journal App */}
      <Route path='/*' element={<JournalRoutes />} />
    </Routes>
  );
};

export default AppRoutes;

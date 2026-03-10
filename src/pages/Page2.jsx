import { Navigate } from 'react-router-dom';

// Page 2 has been merged into Page 1
// Redirect all traffic to the home page
const Page2 = () => {
  return <Navigate to="/" replace />;
};

export default Page2;

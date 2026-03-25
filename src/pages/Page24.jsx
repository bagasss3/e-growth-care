import { Navigate } from 'react-router-dom';

// Page 24 has been merged into Page 23
// Redirect all traffic to Page 23
const Page24 = () => {
  return <Navigate to="/tanda-bahaya-bblr" replace />;
};

export default Page24;

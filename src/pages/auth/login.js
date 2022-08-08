import * as React from 'react';

import Layout from '../../components/layout';
import FormsAuthLogin from '../../forms/auth/login';

// import { useAuth } from '@/contexts/Auth';

const pagesAuthLogin = () => {
  // const { login } = useAuth();

  return (
    <Layout pageTitle='Admin'>
      <FormsAuthLogin />
    </Layout>
  );
};

export default pagesAuthLogin;

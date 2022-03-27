import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    // TODO: checkCredentials
    if (userToken) {
      router.push('/admin/dashboard');
    } else {
      router.push('/login');
    }
  }, []);

  return <></>;
};
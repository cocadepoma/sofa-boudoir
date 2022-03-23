import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { waitFor } from '../../helpers/helpers';

const useUser = () => ({ user: null, loading: true })

export default function Admin() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    checkLoginStatus();

  }, [user, loading]);

  const checkLoginStatus = async () => {
    await waitFor(2000);

    if (!(user)) {
      router.push('/login');
    } else {
      router.push('/admin/dashboard');
    }
  };

  return (
    <>
      {
        loading ? <p>Loading...</p> : <p>Redirecting...</p>
      }
    </>
  );
};
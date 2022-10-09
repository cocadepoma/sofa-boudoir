import WithAuth from '../../../components/withAuth/withAuth';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default WithAuth(Dashboard);
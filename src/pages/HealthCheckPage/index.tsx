import { useGetHealth } from 'src/store/hooks/healthCheck';

const HealthCheckPage = () => {
  const getHealth = useGetHealth();

  return <div>Application is {getHealth}</div>;
};

export default HealthCheckPage;

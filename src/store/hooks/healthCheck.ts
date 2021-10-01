import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

const useHealthState = () =>
  useSelector((rootState: RootState) => rootState.healthState);

export const useGetHealth = () => useHealthState().healthState;

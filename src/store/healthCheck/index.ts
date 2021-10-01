interface State {
  healthState: 'off' | 'healthy';
}

const INITIAL_STATE: State = {
  healthState: 'healthy',
};

export default (state = INITIAL_STATE) => state;

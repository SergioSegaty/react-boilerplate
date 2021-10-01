import { requestService } from '..';

export const requestMock = (itemId: string) => {
  const url = `https://k8s-fakeurl.com/${itemId}`;
  const headers = { 'content-type': 'application/json' };
  requestService(url, {}, headers, 'GET');
};

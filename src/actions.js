import API from './api';

export const failedRequest = error => ({ type: 'FAILED_REQUEST', data: error });
// export const receiveRetailers = data => ({ type: 'RECEIVE_DATA', data: data });

export const search = data => {
  return dispatch => {
    fetch(API.retailers('WA'))
      .then(res => res.json())
      .then(json => receiveRetailers(json, data.zipCode, dispatch))
      .catch(err => dispatch(failedRequest(err)));
  };
};

function receiveRetailers(retailers, zipCode, dispatch) {
  const filteredRetailers = retailers.filter(retailer => {
    return retailer.address !== 'Unknown';
  });

  const requestOption = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      origin: zipCode,
      retailers: filteredRetailers
    })
  };

  fetch('/api/distance', requestOption)
    .then(res => res.json())
    .then(json => {
      console.log(json);
    })
}

import API from './api';

export const failedRequest = error => ({ type: 'FAILED_REQUEST', data: error });
export const receiveRetailers = data => ({ type: 'RECEIVE_DATA', data: data });

export const search = data => {
  return dispatch => {
    fetch(API.googleMapSearchByZipCode(data.zipCode))
      .then(res => res.json())
      .then(json => receiveLocationInfo(json, dispatch))
      .catch(err => dispatch(failedRequest(err)));
  };
};

function receiveLocationInfo(data, dispatch) {
  // const state = data.results[0].address_components[4].short_name;
  const location = data.results[0].geometry.location;

  fetch(API.products(location))
    .then(res => res.json())
    .then(json => dispatch(receiveRetailers({
      retailers: json
    })))
    .catch(err => dispatch(failedRequest(err)));
}

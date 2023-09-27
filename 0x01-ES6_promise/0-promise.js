export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform asynchronous actions here

    // For example, resolve with a dummy response after a timeout
    setTimeout(() => {
      resolve('API response data');
    }, 1000);
  });
}


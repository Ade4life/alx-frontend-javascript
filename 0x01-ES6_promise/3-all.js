import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const [photoResponse, userResponse] = values;
      console.log(`${photoResponse.body.firstName} ${userResponse.body.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}


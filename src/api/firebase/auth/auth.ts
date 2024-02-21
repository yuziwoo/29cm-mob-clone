import { GoogleAuthProvider } from 'firebase/auth';

const provider = {
  google: new GoogleAuthProvider(),
};

/**
 * user === { displayName, email, photoURL, providerID }
 */

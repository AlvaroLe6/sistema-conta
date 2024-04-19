import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

export const useRegister = () => {
  const auth = getAuth();
  const db = getFirestore();

  const registerUser = async (email, password, username, onSuccess, onError) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'usuarios', user.uid), {
        username: username,
        // ...otros datos que quieras guardar
      });

      onSuccess(user);
    } catch (error) {
      onError(error);
    }
  };

  return {
    registerUser
  };
};
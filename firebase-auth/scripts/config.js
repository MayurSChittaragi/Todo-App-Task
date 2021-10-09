
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB6QxQRKpvcu57w9xPgOIvJzBCkWEWf5G0",
    authDomain: "user-auth-5dd36.firebaseapp.com",
    projectId: "user-auth-5dd36",
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  //const analytics = firebase.getAnalytics(app);

  
  // make auth and firestore references
  const auth = firebase.auth();


  // update firestore settings

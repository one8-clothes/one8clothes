// ─── YOUR FIREBASE CONFIG ───────────────────────────
// Go to Firebase Console → Project Settings → Your Apps → Copy config
const firebaseConfig = {
  apiKey: "AIzaSyANQ0VmJ9soc8A0lncB0aVNrYuciv82Ij8",
  authDomain: "elen-clothing-b7d4d.firebaseapp.com",
  projectId: "elen-clothing-b7d4d",
  storageBucket: "elen-clothing-b7d4d.firebasestorage.app",
  messagingSenderId: "134923266893",
  appId: "1:134923266893:web:232bdb77150c51047fa504"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();


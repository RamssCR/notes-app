import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "note-app-16301.firebaseapp.com",
  projectId: "note-app-16301",
  storageBucket: "note-app-16301.firebasestorage.app",
  messagingSenderId: "518525556544",
  appId: "1:518525556544:web:6cd0a86e7c43a795a88ca5",
  measurementId: "G-V1L91RJLLN"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { app, analytics }
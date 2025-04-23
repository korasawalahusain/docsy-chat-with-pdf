import { getStorage } from "firebase-admin/storage";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, App, getApp, cert } from "firebase-admin/app";

const serviceKey = require("@/service_key.json");

let app: App;

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceKey),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);
const adminStorage = getStorage(app);

export { app as adminApp, adminDb, adminStorage };

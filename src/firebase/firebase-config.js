export const firebaseConfig = {
    apiKey: "AIzaSyAnPbqPlidOtxaemV8rkXCRsQavHKTiQ9I",
    authDomain: "nucba-zappi-700e7.firebaseapp.com",
    projectId: "nucba-zappi-700e7",
    storageBucket: "nucba-zappi-700e7.appspot.com",
    messagingSenderId: "548096926867",
    appId: "1:548096926867:web:0f0a58632767f55162d966"
};

export const actionCodeSettingsVerification = {
    url:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/'
            : '',
};

export const actionCodeSettingsForgotPassword = {
    url:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/login'
            : '',
};
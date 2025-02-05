// Importa los scripts necesarios para Firebase Messaging
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging.js');

// Configuración de Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyAqxsvnGMeCPRs_KPt8_X2fmOzwoCAGM1c",
  authDomain: "pagina-andrea.firebaseapp.com",
  projectId: "pagina-andrea",
  storageBucket: "pagina-andrea.firebasestorage.app",
  messagingSenderId: "1092191742283",
  appId: "1:1092191742283:web:358e1de2539a8262b360ce",
  measurementId: "G-E3PM15L626"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtén la instancia de Messaging
const messaging = firebase.messaging();

// Maneja las notificaciones cuando la app está en segundo plano o cerrada
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = 'Nuevo Pedido';
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icono.png'  // Puedes cambiar el icono aquí
  };

  // Muestra la notificación
  self.registration.showNotification(notificationTitle, notificationOptions);
});

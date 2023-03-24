// import { ref, uploadBytes } from "firebase/storage";

const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");

var videoshow = require("videoshow");
/*
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
const ffprobe = require("ffprobe");
*/

// const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
// const ffprobePath = require("@ffprobe-installer/ffprobe").path;

// const ffmpeg = require("fluent-ffmpeg");
// ffmpeg.setFfprobePath(ffprobePath);
// ffmpeg.setFfmpegPath(ffmpegPath);
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBnSabUEma1xUqmGm9YlzncfcAUHyXFiZw",
//   authDomain: "trip-memorize.firebaseapp.com",
//   projectId: "trip-memorize",
//   storageBucket: "trip-memorize.appspot.com",
//   messagingSenderId: "810089176282",
//   appId: "1:810089176282:web:665b22d1ba82533325d9e3",
//   measurementId: "G-861T50RE73",
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const storage = getStorage(app);

// var images = [
//   "https://firebasestorage.googleapis.com/v0/b/trip-memorize.appspot.com/o/Screenshot_11.png?alt=media&token=b932bf48-0018-4d01-ab5b-6bf898996cf1",
// ];

// // var storageRef = storage.ref();

// var firebase = require("firebase-admin");

// // var serviceAccount = require("./serviceAccountKey.json");

// firebase.initializeApp({
//   apiKey: "AIzaSyBnSabUEma1xUqmGm9YlzncfcAUHyXFiZw",
//   authDomain: "trip-memorize.firebaseapp.com",
//   projectId: "trip-memorize",
//   storageBucket: "trip-memorize.appspot.com",
//   messagingSenderId: "810089176282",
//   appId: "1:810089176282:web:665b22d1ba82533325d9e3",
//   measurementId: "G-861T50RE73",
// });

// // var storage1 = firebase.storage();
// // var imageRef = storage1.ref("images");
// let imageRef = firebase.storage().ref();
// const storageRef = ref(storage);

// // ref.once("value", function (snapshot) {
// //   console.log(snapshot.val());
// // });

// // const imageRef = storageRef(storage, `images`);

// var videoOptions = {
//   fps: 25,
//   loop: 5, // seconds
//   transition: true,
//   transitionDuration: 1, // seconds
//   videoBitrate: 1024,
//   videoCodec: "libx264",
//   size: "640x?",
//   audioBitrate: "128k",
//   audioChannels: 2,
//   format: "mp4",
//   pixelFormat: "yuv420p",
// };

// // import { v4 } from "uuid";
// // const SightCard = ({ id, name, location }) => {
// //   const { activeSight, setActiveSight } = useContext(SightContext);
// //   const [imageUpload, setImageUpload] = useState(null);
// //   const dispatch = useDispatch();

// // const uploadImage = () => {
// // if (imageUpload == null) return;
// // const imageRef = ref(storage, `images/sight-${id}`);
// // uploadBytes(imageRef, imageUpload).then(() => {
// //   alert("Image Uploaded");
// // });

// videoshow(images, videoOptions)
//   //   .audio("audio.mp3")
//   .save(`${imageRef}/video.mp4`)
//   .on("start", function (command) {
//     console.log("ffmpeg process started:", command);
//   })
//   .on("error", function (err, stdout, stderr) {
//     console.error("Error:", err);
//     console.error("ffmpeg stderr:", stderr);
//   })
//   .on("end", function (output) {
//     console.error("Video created in:", output);
//   });

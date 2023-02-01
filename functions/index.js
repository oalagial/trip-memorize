const functions = require("firebase-functions");
const {initializeApp} = require("firebase-admin/app");
const f1 = require("@ffmpeg-installer/ffmpeg");
const f2 = require("@ffprobe-installer/ffprobe");
const ffmpeg = require("fluent-ffmpeg");
const videoshow = require("videoshow");

// const {Storage} = require("@google-cloud/storage");
// const os = require("os");
// const path = require("path");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// const createBucket2 = async createBucket2() {
//     const bucketName = "trip-memorize.appspot.com";
//     const storage = new Storage();

//     await storage.createBucket(bucketName);
//     console.log(`Bucket ${bucketName} created.`);
//     };

exports.onFileChange = functions.storage.object().onFinalize((event) => {
  // console.log("event", event);

  // const f1 = require("@ffmpeg-installer/ffmpeg");
  // const f2 = require("@ffprobe-installer/ffprobe");
  // const ffmpeg = require("fluent-ffmpeg");

  const ffmpegPath = f1.path;
  const ffprobePath = f2.path;

  ffmpeg.setFfprobePath(ffprobePath);
  ffmpeg.setFfmpegPath(ffmpegPath);

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/trip-memorize.appspot.com/o/Screenshot_11.png?alt=media&token=b932bf48-0018-4d01-ab5b-6bf898996cf1",
  ];

  const videoOptions = {
    fps: 25,
    loop: 5, // seconds
    transition: true,
    transitionDuration: 1, // seconds
    videoBitrate: 1024,
    videoCodec: "libx264",
    size: "640x?",
    audioBitrate: "128k",
    audioChannels: 2,
    format: "mp4",
    pixelFormat: "yuv420p",
  };

  videoshow(images, videoOptions)
  //   .audio("audio.mp3")
      .save("video.mp4")
      .on("start", function(command) {
        console.log("ffmpeg process started:", command);
      })
      .on("error", function(err, stdout, stderr) {
        console.error("Error:", err);
        console.error("ffmpeg stderr:", stderr);
      })
      .on("end", function(output) {
        console.error("Video created in:", output);
      });

  return;
});

initializeApp();

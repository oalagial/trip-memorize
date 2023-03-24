// const functions = require("firebase-functions");
// const { initializeApp } = require("firebase-admin/app");
const f1 = require("@ffmpeg-installer/ffmpeg");
const f2 = require("@ffprobe-installer/ffprobe");
const ffmpeg = require("fluent-ffmpeg");
const videoshow = require("videoshow");

const ffmpegPath = f1.path;
const ffprobePath = f2.path;

ffmpeg.setFfprobePath(ffprobePath);
ffmpeg.setFfmpegPath(ffmpegPath);

const images = ["./image.jpg", "./image2.jpg"];

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
  .save("video2.mp4")
  .on("start", function (command) {
    console.log("ffmpeg process started:", command);
  })
  .on("error", function (err, stdout, stderr) {
    console.error("Error:", err);
    console.error("ffmpeg stderr:", stderr);
  })
  .on("end", function (output) {
    console.error("Video created in:", output);
  });

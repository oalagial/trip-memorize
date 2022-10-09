var videoshow = require("videoshow");
/*
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
const ffprobe = require("ffprobe");
*/

const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffprobePath = require("@ffprobe-installer/ffprobe").path;

const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfprobePath(ffprobePath);
ffmpeg.setFfmpegPath(ffmpegPath);

var images = ["image.jpg"];

var videoOptions = {
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

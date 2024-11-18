// ==UserScript==
// @name         通用视频时间跳转脚本
// @namespace    http://nazuna.ddns.net/
// @version      0.1
// @description  在所有学习网站中，自动跳转到当前视频播放时间
// @author       Nazuna
// @match        *://*/*  // 根据需要限制特定域名
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function convertTimeToSeconds(time) {
        var parts = time.split(':');
        var seconds = 0;
        if (parts.length === 2) {
            // MM:SS
            seconds += parseInt(parts[0]) * 60;
            seconds += parseInt(parts[1]);
        }
        return seconds;
    }

    function checkForVideoElement() {
        var videoElement = document.querySelector('video');

        if (videoElement) {
            var videoDuration = videoElement.duration; // 获取视频的总时长
            var currentTime = videoElement.currentTime; // 获取视频当前的播放时间

            if (videoDuration && currentTime) {
                var currentTimeInSeconds = Math.floor(currentTime);
                setTimeout(function() {
                    videoElement.currentTime = currentTimeInSeconds; // 跳转到当前时间
                }, 3000);

                clearInterval(intervalId);
            }
        }
    }

    var intervalId = setInterval(checkForVideoElement, 1000);
})();

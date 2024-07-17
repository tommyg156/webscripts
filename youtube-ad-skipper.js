(function() {
    'use strict';

    console.log('YouTube Ad Skipper script loaded');

    // Function to skip ads
    function skipAds() {
        // Look for the "Skip Ad" button
        const skipButton = document.querySelector('.ytp-ad-skip-button');
        if (skipButton) {
            console.log('Skip Ad button found and clicked');
            skipButton.click();
        }

        // Look for the "Skip Ads" button (plural)
        const skipButtons = document.querySelectorAll('.ytp-ad-skip-button');
        if (skipButtons.length > 0) {
            skipButtons.forEach(button => {
                console.log('Skip Ads button found and clicked');
                button.click();
            });
        }

        // Look for the "Ad playing" banner and try to close it
        const adBanner = document.querySelector('.ytp-ad-overlay-close-button');
        if (adBanner) {
            console.log('Ad banner found and closed');
            adBanner.click();
        }
    }

    // Check for ads every 500 milliseconds
    setInterval(skipAds, 500);
})();

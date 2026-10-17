// Vercel Speed Insights initialization script
// This script loads the Speed Insights library from the installed npm package
(function() {
  // Check if running in production environment
  var isProduction = window.location.hostname !== 'localhost' && 
                     window.location.hostname !== '127.0.0.1' &&
                     !window.location.hostname.includes('local');
  
  if (!isProduction) {
    console.log('[Speed Insights] Skipping in development mode');
    return;
  }

  // Initialize Speed Insights queue
  window.siq = window.siq || [];
  window.si = function() {
    window.siq.push(arguments);
  };

  // Load the Speed Insights script
  var script = document.createElement('script');
  script.src = 'https://va.vercel-scripts.com/v1/speed-insights/script.js';
  script.defer = true;
  document.head.appendChild(script);
})();

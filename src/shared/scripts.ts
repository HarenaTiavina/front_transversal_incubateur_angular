// scripts.ts
const scriptCore = document.createElement('script');
scriptCore.src = 'assets/js/core.min.js';
document.body.appendChild(scriptCore);

const scriptCustom = document.createElement('script');
scriptCustom.src = 'assets/js/script.js';
document.body.appendChild(scriptCustom);

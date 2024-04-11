const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    //Show the install button
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    //Hide install button
    butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    console.log('JATE installed!', event);
});

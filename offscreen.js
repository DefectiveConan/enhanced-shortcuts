// listen for a message, after getting which, execute the copyToClipboard function
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => copyToClipboard(message, sender, sendResponse));

async function copyToClipboard(message, sender, sendResponse) {
    console.log(message.text);
    // if the message is the url copy request, copy the message to the clipboard
    if(message.type == 'url copy request') {
        try {
            document.getElementById('urlArea').value = message.text;
            document.getElementById('urlArea').select();
            document.execCommand('copy')
            sendResponse({success: true})
        } catch (error) {
            sendResponse({success: false, error: error.message})
        }
        return true;
    }
}
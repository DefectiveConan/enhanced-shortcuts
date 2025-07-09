chrome.commands.onCommand.addListener((command) => sendCopyRequest(command));

async function sendCopyRequest(command) {
    // signal that the command has been triggered
    console.log(`Command ${command} triggered`);

    // getting the url of the active tab in the last focused window using chrome.tabs.query
    const tabs = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const currentURL = tabs[0]?.url;
    console.log(currentURL);

    // checking which command is run
    if(command == 'run-foo') {
        try {
            // creating an offscreen document
            if(!(await chrome.offscreen.hasDocument())) {
                await chrome.offscreen.createDocument({
                    url: 'currentURL.html',
                    reasons: ['CLIPBOARD'],
                    justification: 'Need to copy the active page\'s URL to the clipboard'
                })
            }
            

        // send a message containing the current url
        chrome.runtime.sendMessage(
            {
                type:'url copy request',
                text: currentURL
            }, (response) => {
                // console.log(response);
                // affirm that the state of whether or not the text has been copied
                if(response && response.success) {
                    console.log('text copied successfully');
                }

                else {
                    console.error(response.error);
                    console.log('copy failed');
                }
            }
        )

        } catch (error) {
            console.error(error.message);
        }
    }
}
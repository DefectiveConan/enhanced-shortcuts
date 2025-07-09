// chrome.commands.onCommand.addListener((command) => {
//     // print command activation in the console
//     console.log(`Command ${command} triggered`);

//     // if the command triggered is the copy one, execute some code
//     if(command == 'copy-url') {
//         // write to the clipboard
//         navigator.clipboard.writeText(
//             // get the current tab's url
//             chrome.tabs.getCurrent().url
//         ).then(() => {
//             // alert user that the action has been completed
//             alert("URL copied");
//         });
//     }
// });

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
});

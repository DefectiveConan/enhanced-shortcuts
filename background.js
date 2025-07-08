// chrome.commands.onCommand.addListener((command) => {
    // print command activation in the console
    // console.log(`Command "${command}" triggered`);
    // clipboard object
    // const clipBoard = navigator.clipboard;
    // write text to the clipboard and show an alert to the user
    // clipBoard.writeText("Check ts out").then(() => {
        // alert("URL copied");
    // });
// })

chrome.commands.onCommand.addListener(command => {
  // This should appear in the SW console when you press Ctrl+Alt+C
  console.log('Command triggered:', command);
});

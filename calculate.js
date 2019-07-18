

function updateTime() {
    let userinput = document.getElementById('userinput')
    let number = userinput.value;
    userinput.value = "";

    //Ensures input text is a number and not blank
    if (!isNaN(number) && !(number == false)) {

        let message = {
            num: number
        }

        console.log(number);
        //Sends message to background script
        chrome.runtime.sendMessage(message);
    }
    
}

function disableButton() {
    document.getElementById('disable').style.display = 'none';
    document.getElementById('clickme').style.visibility = 'hidden';
    document.getElementById('userinput').style.visibility = 'hidden';
    document.getElementById('message').style.visibility = 'hidden';
    document.getElementById('enable').style.display = 'inline';

    //Stores the active state
    chrome.storage.local.set({ 'Active': false });
    
   
}

function enableButton() {
    document.getElementById('enable').style.display = 'none';
    document.getElementById('clickme').style.visibility = 'visible';
    document.getElementById('userinput').style.visibility = 'visible';
    document.getElementById('message').style.visibility = 'visible';
    document.getElementById('disable').style.display = 'inline';

    //Stores the active state
    chrome.storage.local.set({ 'Active': true });
}
//Calls updateTime whenever button is clicked
document.getElementById('clickme').addEventListener('click', updateTime);


document.getElementById('enable').addEventListener('click', enableButton);

document.getElementById('disable').addEventListener('click', disableButton);
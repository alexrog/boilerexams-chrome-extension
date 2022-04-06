# boilerexams-chrome-extension
Speeds up process of getting the timestamps from Boilerexams YouTube videos for each question

## Setup
Clone this repository locally by running

`git clone https://github.com/alexrog/boilerexams-chrome-extension.git`

Open google chrome and click manage extensions under the extension dropdown (looks like a puzzle piece). In top right, enable developer mode and then click
the *load unpacked* in the top left corner. Navigate to the directory where you cloned the repository and import the directory. The extension should now
be enabled.

## Usage
You will want to open up the developer console by opening up inspect element. After the page loads you can press `h` anywhere on the page and the 
commands will be printed in the console. The commands are as follows:
- `h`: print help
- `a`: append current timestamp to array
- `q`: print timestamp array
- `u`: undo previous timestamp (gets rid of last question in array)
- `r`: reset the timestamp array

The timestamp array will be reset anytime you refresh, so be wary. The general workflow is to start the video, scrub to the start of the next question,
press `a`, scrub to the start of the next question and repeat. At the end, press `q` and the timestamp array will be printed.

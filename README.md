# talkies
Automate tooltip insertion in HTML. 
To add tooltips to text on a html page, you add a span title to the text.
sample:

<span title="this text appears as a tooltip"> Hover over this text to see the tooltip</span>

You can run talkies.js from the linux command-line to automatically add the '<span title=""> </span>' to the text that need tooltips.

step1: create a file called dictionary, in the same directory as talkies.js.
dictionary should have key:value pairs, 
where key is the word that needs a tooltip, and value is the tooltip to be displayed.

for example:

cat:animal
word:tooltip
carrot:orange

step2: In the same directory, create a file containing the text you want to 'tooltip-ify'. 

example:

My cat knows the word carrot.

step3: on the command-line enter:
cat nua|node talkies.js >> nua2
//where nua is the name of the file created in step2, and nua2 is the name of the file you want to save the tool-tipped text to.

step4: copy the contents of nua2 to your html document.


talkies searches for the tooltipper/tooltippí (key:value) pairs in dictionary file.

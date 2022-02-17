const fs = require('fs');

// function that takes an obj and dynamically inputs info into html element
function createCards(objs){
    return objs.map((obj) => {
      return obj.createHTML()
    }).join('')
}

// function that creates the html content with the cards 
function createHtmlContent(cards) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TeamGener8tor</title>
    <!-- seo description -->
    <meta name="description" content="The generated html file created by the open source project TeamGener8tor which displays information provided by a user in the command-line application in a asthetic and colour-coded manner">
    <!-- css -->
    <link rel="stylesheet" href="./style.css">
</head>
<body class="bg-slate-100 dark:bg-slate-600 flex flex-col w-screen h-screen overflow-hidden">
    <header class="w-full flex justify-center items-center bg-slate-600 dark:bg-slate-600 py-5">
        <h1 class="text-4xl text-slate-100 dark:text-slate-300 font-sans sm:text-6xl">My Team</h1>
    </header>
    <main id="container" class="flex grow p-5 gap-5 flex-wrap justify-center overflow-y-auto max-w-6xl mx-auto">
    ${cards}     
    </main>
    <footer class="w-full flex justify-center items-center bg-slate-600 dark:bg-slate-100 py-2">
        <h1 class="text-lg text-slate-100 dark:text-slate-600">Made with &#10084; by <a class="footer-link" href="https://www.kbar.io" target="_blank">kbar.io</a> and <a class="footer-link" href="https://github.com/kbario/TeamGener8tor" target="_blank">TeamGener8tor</a></h1>
    </footer>
</body>
</html>`
}

// combines the creation of the card and the creation of the html and then writes the file

function writeHtml(objs) {
    const cards = createCards(objs);
    const file = createHtmlContent(cards);
    console.log(file)
    fs.writeFile('./dist/index.html', file, (error) => {error ? console.log('\x1B[0;31mHTML \x1B[1;4;31munsuccessfully\x1B[0;31m saved.\x1B[0m') : console.log('\x1B[0;32mHTML \x1B[1;4;32msuccessfully\x1B[0;32m saved. Find it here ./dist/index.html\x1B[0m')});
}

module.exports = {writeHtml};


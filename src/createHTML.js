const fs = require('fs');

// function that creates the card
function createCard(obj) {
    const lastCard = obj.createHTML()
    return `<article class="card">
        <div class="card-header ${obj.getRoleLc()}-header">
            <h1 class="text-3xl mb-1">${obj.getName()}</h1>
            <h2 class="text-xl"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg> ${obj.getRole()}</h2>
        </div>
        <div class="card-body">
            <div class="card-info ${obj.getRoleLc()}-info">
                <div class="card-info-section">
                    <p class="card-info-section-header">ID</p>
                    <p>${obj.getId()}</p>
                </div>
                <a href="mailto:${obj.getEmail()}" class="card-info-section border-y border-y-slate-600 ${obj.getRoleLc()}-info-section">
                    <p class="card-info-section-header">Email</p>
                    <p>${obj.getEmail()}</p>
                </a>
                ${lastCard}
            </div>
        </div>
    </article>`
}

// function that takes an obj and dynamically inputs info into html element
function createCards(objs){
    return objs.map((obj) => {
      return createCard(obj)
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
    fs.writeFile('./dist/index.html', file, (error) => {error ? console.log('\x1B[0;31mHTML \x1B[1;4;31munsuccessfully\x1B[0;31m saved.\x1B[0m') : console.log('\x1B[0;32mHTML \x1B[1;4;32msuccessfully\x1B[0;32m saved. Find it here: \x1B[1;32m./dist/index.html\x1B[0m')});
}

module.exports = {writeHtml};


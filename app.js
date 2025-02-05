let input = document.querySelector('#command-2');
let terminal = document.querySelector('.terminal');
const mainSection = document.querySelector('.main-section');
let countInputNumber = 2;
const allCommandsWritten = [];
let countCommands = 0;

const allCommands = [
    {
        name: 'help',
        func: function () {
            let helpElement = `<ul>
                                    <li class="text-white font-semibold tracking-wide"><span class="text-primary">about</span> - displays informations about me.</li>
                                    <li class="text-white font-semibold tracking-wide"><span class="text-primary">banner</span> - displays the banner.</li>
                                    <li class="text-white font-semibold tracking-wide"><span class="text-primary">clear, cls</span> - clears the terminal.</li>
                                    <li class="text-white font-semibold tracking-wide"><span class="text-primary">contact</span> - displays contact info.</li>
                                    <li class="text-white font-semibold tracking-wide"><span class="text-primary">help</span> - displays this guide message.</li>
                                    <li class="text-white font-semibold tracking-wide"><span class="text-primary">projects</span> - displays all my projects.</li>
                                    <li class="text-white font-semibold tracking-wide"><span class="text-primary">skills</span> - displays skills list.</li>
                                </ul>`;
            terminal.insertAdjacentHTML('beforeend', helpElement);
        }
    },
    {
        name: 'clear',
        func: function () {
            terminal.remove();
            let terminalElement = `<div class="w-full h-full px-5 border-2 border-primary rounded overflow-y-scroll terminal"></div>`;
            mainSection.insertAdjacentHTML('beforeend', terminalElement);
            terminal = document.querySelector('.terminal');
        }
    },
    {
        name: 'banner', 
        func: function () {
            let bannerElement = `<pre class="mt-4 text-white">
███████╗███╗   ██╗███████╗███████╗
██╔════╝████╗  ██║██╔════╝██╔════╝
█████╗  ██╔██╗ ██║█████╗  ███████╗
██╔══╝  ██║╚██╗██║██╔══╝  ╚════██║
███████╗██║ ╚████║███████╗███████║
╚══════╝╚═╝  ╚═══╝╚══════╝╚══════╝</pre>

            <p class="mt-5 text-white font-semibold tracking-wide">Type 'help' to see the list of avaliable commands.</p>
            <p class="text-white font-semibold tracking-wide">--</p>`;
            terminal.insertAdjacentHTML('beforeend', bannerElement);
        }
    },
    {
        name: 'cls',
        func: function () {
            terminal.remove();
            let terminalElement = `<div class="w-full h-full px-5 border-2 border-primary rounded overflow-y-scroll terminal"></div>`;
            mainSection.insertAdjacentHTML('beforeend', terminalElement);
            terminal = document.querySelector('.terminal');
        }
    },
    {
        name: 'contact',
        func: function () {
            let contactElement = `<div class="max-w-[60rem] w-full">
                                        <p class="text-white font-semibold tracking-wide">use flags for opening different contact options: e.g. [contact --email]
                                            <a href="https://github.com/enesdurguti/" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-github mr-1" title="GitHub"></i>github</a>,
                                            <a href="https://www.linkedin.com/in/enes-durguti/" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-linkedin mr-1" title="LinkedIn"></i>linkedin</a>,
                                            <a href="https://twitter.com/enesdurgutii" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-twitter mr-1" title="Twitter"></i>twitter</a>,
                                            <a href="https://www.instagram.com/enesdurguti/" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-instagram mr-1" title="Instagram"></i>instagram</a>,
                                            <a href="https://www.facebook.com/profile.php?id=100012551088973" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-facebook mr-1" title="Facebook"></i>facebook</a>,
                                            <a href="https://open.spotify.com/user/3fmi4xgtuwsrhp1eyo7vci35k" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-spotify mr-1" title="Spotify"></i>spotify</a>,
                                            <a href="mailTo: enesdurguti99@gmail.com" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-solid fa-envelope mr-1" title="Email"></i>email</a>.
                                        </p>
                                    </div>`;
            terminal.insertAdjacentHTML('beforeend', contactElement);
        }
    },
    {
        name: 'contact --instagram',
        func: function () {
            window.open('https://www.instagram.com/enesdurguti/', '_blank');
        }
    },
    {
        name: 'contact --facebook',
        func: function () {
            window.open('https://www.facebook.com/profile.php?id=100012551088973', '_blank');
        }
    },
    {
        name: 'contact --email',
        func: function () {
            window.open('mailto: enesdurguti99@gmail.com');
        }
    },
    {
        name: 'contact --linkedin',
        func: function () {
            window.open('https://www.linkedin.com/in/enes-durguti-55a9171a9/', '_blank');
        }
    },
    {
        name: 'contact --spotify',
        func: function () {
            window.open('https://open.spotify.com/user/3fmi4xgtuwsrhp1eyo7vci35k', '_blank');
        }
    },
    {
        name: 'contact --twitter',
        func: function () {
            window.open('https://www.twitter.com/enesdurgutii/', '_blank');
        }
    },
    {
        name: 'contact --github',
        func: function () {
            window.open('https://www.github.com/enesdurguti/', '_blank');
        }
    },
    {
        name: 'skills',
        func: function () {
            let skillElement = `<div class="w-full flex items-center">
                                    <p class="text-white font-semibold tracking-wide">In the past couple of years I have managed to develop skills in these technologies: HTML, CSS, SASS, Tailwind, JavaScript, AplineJs, PHP, Laravel, and WordPress, I also am constantly working on expanding my skills in technologies such as NodeJs and VueJs.</p>
                                </div>`;
            terminal.insertAdjacentHTML('beforeend', skillElement);
        }
    },
    {
        name: 'projects',
        func: function () {
            let projectsElement = `<div class="w-full flex items-center">
                                    <p class="text-white font-semibold tracking-wide break-all">Soon</p>
                                </div>`;
            terminal.insertAdjacentHTML('beforeend', projectsElement);
        }
    },
    {
        name: 'about',
        func: function () {
            let aboutElement = `<div class="w-full grid gap-y-5">
                                    <p class="text-white font-semibold tracking-wide">Hi, I am Enes Durguti.</p>
                                    <p class="text-white font-semibold tracking-wide">As a web developer, I am passionate about creating engaging, user-friendly websites. With nearly a year of experience, I have expertise in various technologies, including HTML, CSS, Tailwind, JavaScript, PHP, Laravel, and WordPress.</p>
                                    <p class="text-white font-semibold tracking-wide">I am a detail-oriented and organized individual, with a strong focus on delivering high-quality work on time. I am constantly learning and staying up-to-date with the latest technologies and best practices in web development.</p>
                                    <p class="text-white font-semibold tracking-wide">In my current role as a web developer at StarLabs, I am responsible for the development and maintenance of a variety of websites. I have also worked closely with clients to understand their needs and deliver solutions that meet their requirements and exceed their expectations.</p>
                                </div>`;
            terminal.insertAdjacentHTML('beforeend', aboutElement);
        }
    }
];

window.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
        input.readOnly = true;
        countInputNumber++;
        let doesMatch = false;
        for (let i = 0; i < allCommands.length; i++) {
            if (input.value.toLowerCase().trim() === allCommands[i].name) {
                countCommands++;
                allCommandsWritten.push(input.value);
                doesMatch = true;
                allCommands[i].func();
                let element = `<div class="w-full flex flex-col md:flex-row md:items-center">
                                    <p class="text-white font-semibold tracking-wide"><span class="text-primary">enesdurguti.dev</span>@guest: $ ~   </p>

                                    <div class="md:flex-1">
                                        <input type="text" spellcheck="false" maxlength="50" id="command-${countInputNumber}" class="w-full py-2 md:p-2 text-white font-semibold tracking-wide bg-transparent outline-none focus:ring-0" autofocus autocomplete="off">
                                    </div>
                                </div>`;
                terminal.insertAdjacentHTML('beforeend', element);
                input = document.querySelector(`#command-${countInputNumber}`);
                input.focus();
                break;
            }
        }

        if (!doesMatch) {
            if (input.value != '') {
                let element = `<div class="w-full flex items-center">
                                    <p class="text-white font-semibold tracking-wide break-all">command '${input.value}' not found. Try 'help' to get started.</p>
                                </div>`;
                terminal.insertAdjacentHTML('beforeend', element);
            }

            let element = `<div class="w-full flex flex-col md:flex-row md:items-center">
                                <p class="text-white font-semibold tracking-wide"><span class="text-primary">enesdurguti.dev</span>@guest: $ ~   </p>

                                <div class="md:flex-1">
                                    <input type="text" spellcheck="false" maxlength="50" id="command-${countInputNumber}" class="w-full py-2 md:p-2 text-white font-semibold tracking-wide bg-transparent outline-none focus:ring-0" autofocus autocomplete="off">
                                </div>
                            </div>`;
            terminal.insertAdjacentHTML('beforeend', element);
            input = document.querySelector(`#command-${countInputNumber}`);
            input.focus();
        }
    }
});

window.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        if (countCommands > 0) {
            input.value = allCommandsWritten[countCommands - 1];
            if (countCommands > 0) {
                countCommands--;
            }
        }

        for (let i = 0; i < allCommands.length; i++) {
            if (input.value.toLowerCase().trim() === allCommands[i].name) {
                input.classList.add('text-primary');
                break;
            }
        }
    } else if (event.key === 'ArrowDown') {
        if (countCommands < allCommandsWritten.length) {
            if (countCommands == 0) {
                countCommands =+ 2;
            } else {
                countCommands++;
            }
            input.value = allCommandsWritten[countCommands - 1];
        }
        for (let i = 0; i < allCommands.length; i++) {
            if (input.value.toLowerCase().trim() === allCommands[i].name) {
                input.classList.add('text-primary');
                break;
            }
        }
    }

    let doesWordMatch = false;
    for (let i = 0; i < allCommands.length; i++) {
        if (input.value.toLowerCase().trim() === allCommands[i].name) {
            input.classList.add('text-primary');
            doesWordMatch = true;
            break;
        }

        if (!doesWordMatch) {
            input.classList.remove('text-primary');
        }
    }
})

window.addEventListener('keyup', () => {
    let doesWordMatch = false;
    for (let i = 0; i < allCommands.length; i++) {
        if (input.value.toLowerCase().trim() === allCommands[i].name) {
            input.classList.add('text-primary');
            doesWordMatch = true;
            break;
        }

        if (!doesWordMatch) {
                input.classList.remove('text-primary');
        }
    }
});

window.addEventListener('click', () => {
    input.focus();
});
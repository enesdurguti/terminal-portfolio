let input = document.querySelector('#command-2');
const button = document.querySelector('#button');
let terminal = document.querySelector('.terminal');
const mainSection = document.querySelector('.main-section');
let count = 2;
let instagramCount = 0;
let facebookCount = 0;
let twitterCount = 0;
let githubCount = 0;
let spotifyCount = 0;
let linkedinCount = 0;
let emailCount = 0;
let lastCommand = '';
const allCommands = [];
let countCommands = 1;


window.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        document.querySelector(`#command-${count}`).readOnly = true;
        count++;

        let inputValue = input.value.toLowerCase().trim();
        allCommands.push(inputValue);
        console.log(allCommands);

        if (inputValue === 'about') {
            console.log('about');
        }

        else if(inputValue === 'banner') {
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
        
        else if(inputValue === 'clear') {
            terminal.remove();
            let terminalElement =   `<div class="w-full h-full px-5 border-2 border-primary rounded overflow-y-scroll terminal"></div>`;
            mainSection.insertAdjacentHTML('beforeend', terminalElement);
            terminal = document.querySelector('.terminal');
        } 

        else if(inputValue === 'cls') {
            terminal.remove();
            let terminalElement =   `<div class="w-full h-full px-5 border-2 border-primary rounded overflow-y-scroll terminal"></div>`;
            mainSection.insertAdjacentHTML('beforeend', terminalElement);
            terminal = document.querySelector('.terminal');
        } 
        
        else if(inputValue === 'contact') {
            let contactElement = `<div class="xl:w-[45em] 2xl:w-[60rem]">
            <p class="text-white font-semibold tracking-wide">use flags for opening different contact options: e.g. [contact --email]
                <a href="https://github.com/enesdurguti/" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-github mr-1" title="GitHub"></i>github</a>,
                <a href="https://www.linkedin.com/in/enes-durguti-55a9171a9/" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-linkedin mr-1" title="LinkedIn"></i>linkedin</a>,
                <a href="https://twitter.com/enesdurgutii" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-twitter mr-1" title="Twitter"></i>twitter</a>,
                <a href="https://www.instagram.com/enesdurguti/" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-instagram mr-1" title="Instagram"></i>instagram</a>,
                <a href="https://www.facebook.com/profile.php?id=100012551088973" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-facebook mr-1" title="Facebook"></i>facebook</a>,
                <a href="https://open.spotify.com/user/3fmi4xgtuwsrhp1eyo7vci35k" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-brands fa-spotify mr-1" title="Spotify"></i>spotify</a>,
                <a href="mailTo: enesdurguti99@gmail.com" target="_blank" class="hover:underline hover:text-primary duration-150 ease-in"><i class="fa-solid fa-envelope mr-1" title="Email"></i>email</a>,
            </p>
        </div>`;
            terminal.insertAdjacentHTML('beforeend', contactElement);
        }

        else if(inputValue === 'contact --email'){
            const emailElement = `<a href="mailto: enesdurguti99@gmail.com" target="_blank" class="email-link"></a>`;   
            if (emailCount === 0) {
                mainSection.insertAdjacentHTML('beforeend', emailElement);  
            } 
            const emailLink = document.querySelector('.email-link');
            emailLink.click();

            emailCount++;
        }

        else if(inputValue === 'contact --github'){
            const githubElement = `<a href="https://www.github.com/enesdurguti/" target="_blank" class="github-link"></a>`;   
            if (githubCount === 0) {
                mainSection.insertAdjacentHTML('beforeend', githubElement);  
            } 
            const githubLink = document.querySelector('.github-link');
            githubLink.click();

            githubCount++;
        }

        else if(inputValue === 'contact --linkedin'){
            const linkedinElement = `<a href="https://www.linkedin.com/in/enes-durguti-55a9171a9/" target="_blank" class="linkedin-link"></a>`;   
            if (linkedinCount === 0) {
                mainSection.insertAdjacentHTML('beforeend', linkedinElement);  
            } 
            const linkedinLink = document.querySelector('.linkedin-link');
            linkedinLink.click();

            linkedinCount++;
        }

        else if (inputValue === 'contact --instagram') {
            const instagramElement = `<a href="https://www.instagram.com/enesdurguti/" target="_blank" class="instagram-link"></a>`;   
            if (instagramCount === 0) {
                mainSection.insertAdjacentHTML('beforeend', instagramElement);  
            } 
            const instagramLink = document.querySelector('.instagram-link');
            instagramLink.click();

            instagramCount++;
        }

        else if (inputValue === 'contact --facebook') {
            const facebookElement = `<a href="https://www.facebook.com/people/Enes-Durguti/100012551088973/" target="_blank" class="facebook-link"></a>`;   
            if (facebookCount === 0) {
                mainSection.insertAdjacentHTML('beforeend', facebookElement);  
            } 
            const facebookLink = document.querySelector('.facebook-link');
            facebookLink.click();

            facebookCount++;
        }

        else if (inputValue === 'contact --twitter') {
            const twitterElement = `<a href="https://www.twitter.com/enesdurgutii/" target="_blank" class="twitter-link"></a>`;   
            if (twitterCount === 0) {
                mainSection.insertAdjacentHTML('beforeend', twitterElement);  
            } 
            const twitterLink = document.querySelector('.twitter-link');
            twitterLink.click();

            twitterCount++;
        }

        else if (inputValue === 'contact --spotify') {
            const spotifyElement = `<a href="https://open.spotify.com/user/3fmi4xgtuwsrhp1eyo7vci35k" target="_blank" class="spotify-link"></a>`;   
            if (spotifyCount === 0) {
                mainSection.insertAdjacentHTML('beforeend', spotifyElement);  
            } 
            const spotifyLink = document.querySelector('.spotify-link');
            spotifyLink.click();

            spotifyCount++;
        }
        
        else if (inputValue === 'help') {
            let helpElement =  `<ul>
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

        else if (inputValue === 'projects') {
            let projectElement =   `<div class="w-full flex items-center">
                                        <p class="text-white font-semibold tracking-wide break-all">Soon</p>
                                    </div>`;
            terminal.insertAdjacentHTML('beforeend', projectElement);
        }

        else if (inputValue === 'skills') {
            let skillElement =   `<div class="w-full flex items-center">
                                        <p class="text-white font-semibold tracking-wide break-all">Soon</p>
                                    </div>`;
            terminal.insertAdjacentHTML('beforeend', skillElement);
        }

        else if(inputValue === 'hi') {  
            let element =   `<div class="w-full flex items-center">
                                    <p class="text-white font-semibold tracking-wide break-all">Hey 😀</p>
                                </div>`;
                terminal.insertAdjacentHTML('beforeend', element);
        }
        
        else {
            if (input.value != '') {
                let element =   `<div class="w-full flex items-center">
                                    <p class="text-white font-semibold tracking-wide break-all">command '${input.value}' not found. Try 'help' to get started.</p>
                                </div>`;
                terminal.insertAdjacentHTML('beforeend', element);
            }
        }

        if (inputValue != '') {
            lastCommand = inputValue;
        }

        let element =  `<div class="w-full flex flex-col md:flex-row md:items-center">
                            <p class="text-white font-semibold tracking-wide"><span class="text-primary">enesdurguti.dev</span>@guest: $ ~   </p>

                            <div class="md:flex-1">
                                <input type="text" spellcheck="false" maxlength="50" id="command-${count}" class="w-full py-2 md:p-2 text-white font-semibold tracking-wide bg-transparent outline-none focus:ring-0" autofocus autocomplete="off">
                            </div>
                        </div>`;
        terminal.insertAdjacentHTML('beforeend', element);
        input = document.querySelector(`#command-${count}`);
        input.focus();
    }
});

window.addEventListener('keyup', (event) => {
    let inputValue2 = input.value.toLowerCase().trim();
    if (inputValue2 == 'help' || inputValue2 == 'contact' || inputValue2 == 'contact --instagram' || 
        inputValue2 == 'contact --facebook' || inputValue2 == 'contact --email' || inputValue2 == 'contact --github' ||
        inputValue2 == 'contact --linkedin' || inputValue2 == 'contact --spotify' || inputValue2 == 'contact --twitter' ||
        inputValue2 == 'about' || inputValue2 == 'skills' || inputValue2 == 'projects' || inputValue2 == 'clear' ||
        inputValue2 == 'cls' || inputValue2 == 'banner') {

        input.classList.add('text-primary');
    } else {
        input.classList.remove('text-primary');
    }

    if (event.code === 'ArrowUp') {
        if (countCommands != 1) {
            input.value = allCommands[allCommands.length - countCommands];
            inputValue2 = input.value.toLowerCase().trim();
        }

        if (inputValue2 == 'help' || inputValue2 == 'contact' || inputValue2 == 'contact --instagram' || 
            inputValue2 == 'contact --facebook' || inputValue2 == 'contact --email' || inputValue2 == 'contact --github' ||
            inputValue2 == 'contact --linkedin' || inputValue2 == 'contact --spotify' || inputValue2 == 'contact --twitter' ||
            inputValue2 == 'about' || inputValue2 == 'skills' || inputValue2 == 'projects' || inputValue2 == 'clear' ||
            inputValue2 == 'cls' || inputValue2 == 'banner') {
            input.classList.add('text-primary');
        } else {
            input.classList.remove('text-primary');
        }

        if (countCommands < allCommands.length) {
            countCommands++;
        }
    } 


    if (event.code === 'ArrowDown') {
        if (countCommands > 1) {
            countCommands--;
        }
        
        if (countCommands != 1) {
            input.value = allCommands[allCommands.length - countCommands];
            inputValue2 = input.value.toLowerCase().trim();
        }

        if (inputValue2 == 'help' || inputValue2 == 'contact' || inputValue2 == 'contact --instagram' || 
            inputValue2 == 'contact --facebook' || inputValue2 == 'contact --email' || inputValue2 == 'contact --github' ||
            inputValue2 == 'contact --linkedin' || inputValue2 == 'contact --spotify' || inputValue2 == 'contact --twitter' ||
            inputValue2 == 'about' || inputValue2 == 'skills' || inputValue2 == 'projects' || inputValue2 == 'clear' ||
            inputValue2 == 'cls' || inputValue2 == 'banner') {
            input.classList.add('text-primary');
        } else {
            input.classList.remove('text-primary');
        }
    }
})

window.addEventListener('click', () => {
    input.focus();
});
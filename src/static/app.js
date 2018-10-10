function toggleNavMenu() {
    function toggleIt() {
        navMenu.classList.toggle('hidden');
    }

    let hamburger = document.querySelector('.hamburger');
    let navMenu = document.querySelector('nav ul');
    hamburger.addEventListener('click', toggleIt);
    hamburger.addEventListener('keydown', event => {
        event.keyCode === 13 && toggleIt(event)
    });
    document.addEventListener('keydown', event => {
        event.keyCode === 27 && (navMenu.classList.add('hidden'))
    })
}


function skipContent() {
    function skipIt() {
        document.querySelector('main .container').focus();
    }

    let skipContentButton = document.querySelector('.content-skip');
    skipContentButton.addEventListener('keydown', event => {
        event.keyCode === 13 && skipIt(event)
    })
    skipContentButton.addEventListener('click', skipIt)
}


function setJumboHeight() {
    let pointsSections = document.querySelectorAll('.doc .points'),
        imageSection = document.querySelector('.doc .jumbotron .screenshot a'),
        summarySection = document.querySelector('.doc .summary');

    function changeHeight() {
        if (window.innerWidth >= 725) {
            let points1Height = Number(window.getComputedStyle(pointsSections[0])
                    .height.replace('px', '')),
                points1BotMargin = Number(window.getComputedStyle(pointsSections[0])
                    .marginBottom.replace('px', '')),
                points2Height = Number(window.getComputedStyle(pointsSections[1])
                    .height.replace('px', '')),
                points2BotMargin = Number(window.getComputedStyle(pointsSections[1])
                    .marginBottom.replace('px', '')),
                points3Height = Number(window.getComputedStyle(pointsSections[2])
                    .height.replace('px', '')),
                summaryHeight = summarySection ?
                    Number(window.getComputedStyle(summarySection)
                        .height.replace('px', ''))
                    : 0,
                leftHeight = points1Height + points1BotMargin + points2Height + 
                    points2BotMargin + points3Height;
            imageSection.style.height = leftHeight - summaryHeight + 'px';
        } else {
            imageSection.style.height = '250px';
        }
    }

    changeHeight();
    window.addEventListener('resize', changeHeight);
}


function fixFooterToBottom() {
    let footer = document.querySelector('footer');

    function checkHeights() {
        let bodyHeight = Number(window.getComputedStyle(document.body)
            .height.replace('px', ''));
        let viewportHeight = window.innerHeight;

        if (bodyHeight < viewportHeight) {
            footer.classList.add('fixed-bottom')
        } else {
            footer.classList.remove('fixed-bottom')
        }

    }

    checkHeights();
    window.addEventListener('resize', checkHeights);
}


toggleNavMenu();
skipContent();
document.querySelector('.doc') && setJumboHeight();
fixFooterToBottom();
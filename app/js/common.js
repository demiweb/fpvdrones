function helloConsole() {
    var staticText = 'Made with ❤️ by Demiweb';
    var staticUrl = '> https://demiweb-studio.com.ua/';
    var hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #000; padding:5px 0;', 'color: #fff; background: #ff5112; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        var title = '%c';

        for (var i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 56px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUxIiBoZWlnaHQ9IjM3IiBmaWxsPSJub25lIj4NCiAgICA8cGF0aCBkPSJNMTUuNzczIDIzLjI1OGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzQuOTk5Ljk3OCAwIDEuNzctLjMzMyAyLjM3My0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjAzLS42ODctMS4zOTUtMS4wMy0yLjM3My0xLjAzLS45NzkgMC0xLjc3LjM0My0yLjM3NCAxLjAzLS42MDQuNjY3LS45MDYgMS42NzYtLjkwNiAzLjAzIDAgMS4zNTMuMzAyIDIuMzczLjkwNiAzLjA2em0xLjI4IDUuNjg0Yy0yLjI0OCAwLTQuMDM5LS43NS01LjM3MS0yLjI0OS0xLjMxMi0xLjQ5OS0xLjk2OC0zLjY2NS0xLjk2OC02LjQ5NiAwLTIuODMyLjY1Ni00Ljk5NyAxLjk2OC02LjQ5NiAxLjMzMi0xLjUgMy4xMjMtMi4yNSA1LjM3Mi0yLjI1IDEuODExIDAgMy4yMTcuNjI1IDQuMjE2IDEuODc1aC4xNTZWNi43NjdoNS4xNTRWMjguNjNoLTQuNTNsLS40NjgtMS43MThoLS4xNTZjLTEuMTI0IDEuMzUzLTIuNTgyIDIuMDMtNC4zNzIgMi4wM3ptMjAuOTIzIDBjLTIuNzQ5IDAtNC44NzMtLjc1LTYuMzcyLTIuMjQ5LTEuNDc4LTEuNTItMi4yMTctMy42ODUtMi4yMTctNi40OTYgMC0yLjc3Ljc2LTQuOTE0IDIuMjgtNi40MzQgMS41Mi0xLjU0IDMuNjIzLTIuMzExIDYuMzA5LTIuMzExIDIuNTgxIDAgNC42MDEuODEyIDYuMDU5IDIuNDM2IDEuNDc4IDEuNjAzIDIuMjE3IDMuNjU0IDIuMjE3IDYuMTUzbC0uMTU2IDEuNzE3SDM0LjU0Yy40MTYgMS44NzQgMS41MSAyLjgxMSAzLjI4IDIuODExIDEuMjI4IDAgMi4xNzUtLjQxNiAyLjg0MS0xLjI0OWg1LjI3OWE3LjIxIDcuMjEgMCAwMS0uNzgxIDEuOTA1Yy0uMzU0LjU4My0uODMzIDEuMTc3LTEuNDM3IDEuNzgtLjU4My41ODMtMS4zNzQgMS4wNTItMi4zNzMgMS40MDYtMSAuMzU0LTIuMTI0LjUzLTMuMzczLjUzem0tMy40MzYtMTAuNjJoNi41NTljLS4xNjctLjY4Ni0uNTQyLTEuMjctMS4xMjUtMS43NDgtLjU2Mi0uNS0xLjI4LS43NS0yLjE1NS0uNzUtLjg5NSAwLTEuNjI0LjIzLTIuMTg2LjY4Ny0uNTYyLjQ1OS0uOTI2IDEuMDYyLTEuMDkzIDEuODEyek00OC44OTUgMjguNjNWMTEuNzY0aDQuNTI4bC40NjkgMS43MThoLjE1NmMuOTU4LTEuMzUzIDIuMjA3LTIuMDMgMy43NDgtMi4wMy43MjkgMCAxLjM4NC4xMTQgMS45NjcuMzQzLjYwNC4yMDkgMS4wNzMuNDggMS40MDYuODEyLjM1NC4zMzQuNjE0LjYxNS43OC44NDQuMTg4LjIyOS4zMTMuNDE2LjM3NS41NjJoLjE1N2MuMTA0LS4yMy4yOTEtLjUxLjU2Mi0uODQzLjI5MS0uMzM0LjgzMy0uNjk4IDEuNjI0LTEuMDk0Ljc5MS0uNDE2IDEuNjc2LS42MjQgMi42NTUtLjYyNCAxLjYyNCAwIDMuMDQuNTkzIDQuMjQ3IDEuNzggMS4yMjkgMS4xNjYgMS44NDMgMi44MSAxLjg0MyA0LjkzNXYxMC40NjJoLTUuMTU0di05LjUyNWMwLS45NzktLjIwOC0xLjcxOC0uNjI0LTIuMjE4LS40MTYtLjUtLjk5LS43NS0xLjcxOC0uNzUtLjY2NiAwLTEuMTk3LjI1LTEuNTkzLjc1LS4zOTUuNS0uNTkzIDEuMjQtLjU5MyAyLjIxOHY5LjUyNmgtNS4xNTN2LTkuNTI2YzAtLjk3OS0uMjA5LTEuNzE4LS42MjUtMi4yMTgtLjQxNi0uNS0uOTktLjc1LTEuNzE4LS43NS0uNjY2IDAtMS4xOTcuMjUtMS41OTMuNzUtLjM5NS41LS41OTMgMS4yNC0uNTkzIDIuMjE4djkuNTI2aC01LjE1M3ptMjcuNzg1IDBWMTEuNzY0aDUuMTU0VjI4LjYzSDc2LjY4em00LjY1NC0xOC44OTZjLS41Mi41Mi0xLjIxOC43OC0yLjA5My43OC0uODc0IDAtMS41NzItLjI2LTIuMDkyLS43OC0uNTItLjU0MS0uNzgxLTEuMjE4LS43ODEtMi4wMyAwLS44MTIuMjYtMS40NzguNzgtMS45OTkuNTIxLS41NDEgMS4yMTktLjgxMiAyLjA5My0uODEyLjg3NSAwIDEuNTcyLjI3IDIuMDkzLjgxMi41NDEuNTIuODEyIDEuMTg3LjgxMiAxLjk5OXMtLjI3IDEuNDg5LS44MTIgMi4wM3ptNi45MTQgMTguODk2TDgzLjcyIDExLjc2NGg1LjMxbDIuNDk4IDEwLjQ2MyAyLjY1NC0xMC40NjNoNC45OThsMi42NTQgMTAuNDYzIDIuNDk5LTEwLjQ2M2g1LjMwOWwtNC41MjggMTYuODY2aC01Ljc3OGwtMi42NTUtOS4zNy0yLjY1NSA5LjM3aC01Ljc3OHptMzAuNzY2LjMxMmMtMi43NDggMC00Ljg3Mi0uNzUtNi4zNzEtMi4yNDktMS40NzgtMS41Mi0yLjIxNy0zLjY4NS0yLjIxNy02LjQ5NiAwLTIuNzcuNzYtNC45MTQgMi4yOC02LjQzNCAxLjUyLTEuNTQgMy42MjItMi4zMTEgNi4zMDgtMi4zMTEgMi41ODIgMCA0LjYwMi44MTIgNi4wNTkgMi40MzYgMS40NzkgMS42MDMgMi4yMTggMy42NTQgMi4yMTggNi4xNTNsLS4xNTYgMS43MTdoLTExLjU1NmMuNDE2IDEuODc0IDEuNTA5IDIuODExIDMuMjc5IDIuODExIDEuMjI5IDAgMi4xNzYtLjQxNiAyLjg0Mi0xLjI0OWg1LjI3OWE3LjIyIDcuMjIgMCAwMS0uNzgxIDEuOTA1Yy0uMzU0LjU4My0uODMzIDEuMTc3LTEuNDM3IDEuNzgtLjU4My41ODMtMS4zNzQgMS4wNTItMi4zNzMgMS40MDYtMSAuMzU0LTIuMTI0LjUzLTMuMzc0LjUzem0tMy40MzUtMTAuNjJoNi41NTljLS4xNjctLjY4Ni0uNTQyLTEuMjctMS4xMjUtMS43NDgtLjU2Mi0uNS0xLjI4LS43NS0yLjE1NS0uNzUtLjg5NSAwLTEuNjI0LjIzLTIuMTg2LjY4Ny0uNTYyLjQ1OS0uOTI3IDEuMDYyLTEuMDkzIDEuODEyem0yMC41NyA0LjkzNmMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzMuOTk5Ljk3OSAwIDEuNzctLjMzMyAyLjM3NC0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjA0LS42ODctMS4zOTUtMS4wMy0yLjM3NC0xLjAzLS45NzggMC0xLjc2OS4zNDMtMi4zNzMgMS4wMy0uNjA0LjY2Ny0uOTA2IDEuNjc2LS45MDYgMy4wMyAwIDEuMzUzLjMwMiAyLjM3My45MDYgMy4wNnptMy40NjYgNS42ODRjLTEuNzkgMC0zLjI0OC0uNjc3LTQuMzcyLTIuMDNoLS4xNTZsLS40NjkgMS43MThoLTQuNTI4VjYuNzY3aDUuMTUzdjYuNTU5aC4xNTZjMS0xLjI1IDIuNDA1LTEuODc0IDQuMjE2LTEuODc0IDIuMjQ5IDAgNC4wMjkuNzUgNS4zNDEgMi4yNDggMS4zMzMgMS41IDEuOTk5IDMuNjY1IDEuOTk5IDYuNDk3cy0uNjY2IDQuOTk3LTEuOTk5IDYuNDk2Yy0xLjMxMiAxLjUtMy4wOTIgMi4yNDktNS4zNDEgMi4yNDl6bTE0LjAyLS45NjhjLS41NDEuNTQxLTEuMjA4LjgxMi0xLjk5OS44MTItLjc5MSAwLTEuNDU3LS4yNzEtMS45OTktLjgxMmEyLjc4NSAyLjc4NSAwIDAxLS44MTItMmMwLS43Ny4yNzEtMS40MjUuODEyLTEuOTY3YTIuNjY4IDIuNjY4IDAgMDExLjk5OS0uODQzYy43OTEgMCAxLjQ1OC4yODEgMS45OTkuODQzYTIuNjggMi42OCAwIDAxLjgxMiAxLjk2OGMwIC43Ny0uMjcxIDEuNDM2LS44MTIgMS45OTl6bTEwLjAzMy45NjhjLTEuMzc0IDAtMi41NzItLjE2Ny0zLjU5Mi0uNS0xLjAyLS4zNTQtMS44MTEtLjgzMy0yLjM3My0xLjQzNy0uNTYzLS42MDMtLjk4OS0xLjIyOC0xLjI4MS0xLjg3M2E2Ljk0NCA2Ljk0NCAwIDAxLS41NjItMi4xMjRoNS4zMDljLjA4NC40MTYuMzU0Ljc4LjgxMiAxLjA5My40NTguMzEyIDEuMDIxLjQ2OCAxLjY4Ny40NjggMS42NjYgMCAyLjQ5OC0uMzY0IDIuNDk4LTEuMDkzIDAtLjM1NC0uMjM5LS42MzUtLjcxOC0uODQzLS40NzktLjIwOC0xLjA4My0uMzQ0LTEuODExLS40MDZhMTUuMDU5IDE1LjA1OSAwIDAxLTIuMzEyLS40MDYgMTUuNDg3IDE1LjQ4NyAwIDAxLTIuMzQyLS43OGMtLjcwOC0uMzEzLTEuMzAxLS44MzQtMS43OC0xLjU2My0uNDc5LS43MjgtLjcxOC0xLjYzNC0uNzE4LTIuNzE3IDAtMS41NjEuNjM1LTIuODMxIDEuOTA1LTMuODEgMS4yNy0xIDMuMDI5LTEuNSA1LjI3OC0xLjUgMi40OTggMCA0LjM1Mi41NTMgNS41NTkgMS42NTYgMS4yMDggMS4wODMgMS45MDUgMi40MDUgMi4wOTMgMy45NjdoLTUuMzFjLS4wNDEtLjM1NC0uMjYtLjY0Ni0uNjU2LS44NzUtLjM3NC0uMjUtLjkzNy0uMzc1LTEuNjg2LS4zNzUtMS4yNDkgMC0xLjg3NC4zNjUtMS44NzQgMS4wOTMgMCAuMzM0LjIzOS41OTQuNzE4Ljc4MS40NzkuMTg4IDEuMDczLjMyMyAxLjc4MS40MDYuNzI4LjA2MyAxLjUwOS4yMDkgMi4zNDIuNDM4LjgzMy4yMDggMS42MDMuNDY4IDIuMzExLjc4LjcyOS4zMTMgMS4zMzMuODQ0IDEuODEyIDEuNTkzLjQ3OC43MjkuNzE4IDEuNjM1LjcxOCAyLjcxN2E0LjY3IDQuNjcgMCAwMS0uMzQ0IDEuNzhjLS4yMjkuNTYzLS42MTQgMS4xMjUtMS4xNTUgMS42ODctLjUyMS41NjItMS4zMjIgMS4wMS0yLjQwNSAxLjM0My0xLjA4My4zMzMtMi4zODQuNS0zLjkwNC41em0xNy40OTEtLjMxMmMtMS45OTkgMC0zLjQzNS0uNDE3LTQuMzEtMS4yNS0uODc0LS44NTQtMS4zMTItMi4xNTUtMS4zMTItMy45MDRWMTYuNDVoLTIuNjU0di00LjY4NWgyLjY1NGwuNzgxLTQuMzcyaDQuMzczdjQuMzcyaDMuOTA0djQuNjg1aC0zLjkwNHY2LjA5YzAgLjM5Ni4xMzUuNzI5LjQwNiAxIC4yNy4yNy42MDMuNDA2Ljk5OS40MDZoMi40OTl2NC42ODRoLTMuNDM2em0xMi4zMjMuMzEyYy0xLjY0NCAwLTMuMDUtLjU3My00LjIxNi0xLjcxOC0xLjE0NS0xLjE2Ni0xLjcxOC0yLjg4NC0xLjcxOC01LjE1M1YxMS43NjRoNS4xNTR2OS41MjZjMCAuOTM3LjIyOSAxLjY2Ni42ODcgMi4xODYuNDU4LjUyIDEuMTE0Ljc4MSAxLjk2Ny43ODEuNzkyIDAgMS40MjctLjI2IDEuOTA1LS43OC41LS41NDIuNzUtMS4yNy43NS0yLjE4N3YtOS41MjZoNS4xNTNWMjguNjNoLTQuNTI4bC0uNDY5LTEuNzE4aC0uMTU2Yy0xLjE4NyAxLjM1My0yLjY5NiAyLjAzLTQuNTI5IDIuMDN6bTE4LjQwNy01LjY4NGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzQuOTk5Ljk3OCAwIDEuNzctLjMzMyAyLjM3My0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjAzLS42ODctMS4zOTUtMS4wMy0yLjM3My0xLjAzLS45NzkgMC0xLjc3LjM0My0yLjM3NCAxLjAzLS42MDQuNjY3LS45MDYgMS42NzYtLjkwNiAzLjAzIDAgMS4zNTMuMzAyIDIuMzczLjkwNiAzLjA2em0xLjI4MSA1LjY4NGMtMi4yNDkgMC00LjA0LS43NS01LjM3Mi0yLjI0OS0xLjMxMi0xLjQ5OS0xLjk2OC0zLjY2NS0xLjk2OC02LjQ5NiAwLTIuODMyLjY1Ni00Ljk5NyAxLjk2OC02LjQ5NiAxLjMzMi0xLjUgMy4xMjMtMi4yNSA1LjM3Mi0yLjI1IDEuODExIDAgMy4yMTcuNjI1IDQuMjE2IDEuODc1aC4xNTZWNi43NjdoNS4xNTNWMjguNjNoLTQuNTI4bC0uNDY5LTEuNzE4aC0uMTU2Yy0xLjEyNCAxLjM1My0yLjU4MiAyLjAzLTQuMzcyIDIuMDN6bTEzLjExNC0uMzEyVjExLjc2NGg1LjE1M1YyOC42M2gtNS4xNTN6bTQuNjUzLTE4Ljg5NmMtLjUyLjUyLTEuMjE4Ljc4LTIuMDkyLjc4LS44NzUgMC0xLjU3Mi0uMjYtMi4wOTMtLjc4LS41MjEtLjU0MS0uNzgxLTEuMjE4LS43ODEtMi4wMyAwLS44MTIuMjYtMS40NzguNzgxLTEuOTk5LjUyMS0uNTQxIDEuMjE4LS44MTIgMi4wOTMtLjgxMi44NzQgMCAxLjU3Mi4yNyAyLjA5Mi44MTIuNTQxLjUyLjgxMiAxLjE4Ny44MTIgMS45OTlzLS4yNzEgMS40ODktLjgxMiAyLjAzem0xNy44MTUgMTYuOTI4Yy0xLjQ3OSAxLjUyLTMuNTUgMi4yOC02LjIxNiAyLjI4LTIuNjY1IDAtNC43MzYtLjc2LTYuMjE1LTIuMjgtMS40NzgtMS41Mi0yLjIxNy0zLjY3NS0yLjIxNy02LjQ2NXMuNzM5LTQuOTQ1IDIuMjE3LTYuNDY1YzEuNDc5LTEuNTIgMy41NS0yLjI4IDYuMjE1LTIuMjggMi42NjYgMCA0LjczNy43NiA2LjIxNiAyLjI4IDEuNDc4IDEuNTIgMi4yMTcgMy42NzUgMi4yMTcgNi40NjVzLS43MzkgNC45NDUtMi4yMTcgNi40NjV6bS04LjU4OS0zLjQwNGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzMuOTk5Ljk3OSAwIDEuNzctLjMzMyAyLjM3NC0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjA0LS42ODctMS4zOTUtMS4wMy0yLjM3NC0xLjAzLS45NzggMC0xLjc2OS4zNDMtMi4zNzMgMS4wMy0uNjA0LjY2Ny0uOTA2IDEuNjc2LS45MDYgMy4wMyAwIDEuMzUzLjMwMiAyLjM3My45MDYgMy4wNnoiDQogICAgICAgICAgZmlsbD0iIzAwMCI+PC9wYXRoPg0KPC9zdmc+);');
    } else {
        var title = 'demiweb';
        var banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        var styler = [];

        var symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}

helloConsole();



var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();

//anim

//add counting number to show delay speed
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 100;
            })
        })
    }
}

addCoutingDelay();


var animStage = [...document.querySelectorAll('.anim-stage')];

function scrollAnimationsStage() {
    if (animStage.length) {
        var animItems = [...document.querySelectorAll(':scope > *')];

        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // console.log(entry.target);
                var eles = [...entry.target.querySelectorAll(":scope > *")];
                var len = eles.length;

                // console.log(eles);
                if (entry.isIntersecting) {
                    for (var i = 0; i < len; i++) {
                        // console.log(eles[1]);
                        eles[i].style.animationDelay = (entry.target.dataset.animDelay * i) + 'ms';
                        eles[i].style.animationDuration = entry.target.dataset.animDuration + 'ms';
                        eles[i].style.animationName = entry.target.dataset.anim;
                    }
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})

        animStage.forEach((animate, k) => {
            observer.observe(animate);
        })

    }
}

scrollAnimationsStage();

// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();

//

//anim


//marquee
var marqueeContent = document.querySelector(".marquee-cont");

function marqqueFnc() {
    if (marqueeContent) {
        var root = document.documentElement;
        var marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");


        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for (var i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    }
}

marqqueFnc();


//rating

function getRaty() {
    $('.rating-stars').each(function (index) {
        if ($(this).html() == '') {
            $(this).raty({
                readOnly: true,
                starHalf: './img/star-full.svg',
                starOn: './img/star-full.svg',
                starOff: './img/star-clear.svg',
                hints: ['a', null, '', null, '', null]
            });
        }
    });
}

getRaty();

//rating


let headerMenu = [...document.querySelectorAll('.header-menu > ul > li')];
let backDrop = document.querySelector('.backdrop');
function hoverHeaderMenu() {
    if (headerMenu.length) {
        headerMenu.forEach((btn) => {
            btn.addEventListener('mouseover', () => {
                backDrop.classList.add('active');
            });
            btn.addEventListener('mouseout', () => {
                backDrop.classList.remove('active');
            })
        })
    }
}

// hoverHeaderMenu();


//swipers

let homeBanner = [...document.querySelectorAll('.home-banner')];

function startHomeBanner() {
    if (!homeBanner.length) {

    } else {


        homeBanner.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.progress-bar');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,

                autoplay: {
                    delay: 3700,
                },
                spaceBetween:0,
                pagination: {
                    el: pagin,
                    type: "progressbar",
                },



            });


        })

    }
}

startHomeBanner();


let bigBanner = [...document.querySelectorAll('.big-banner')];

function startBigBanner() {
    if (!bigBanner.length) {

    } else {


        bigBanner.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');

            let pagin = sld.querySelector('.dots');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                effect: 'fade',
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 800,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,

                autoplay: {
                    delay: 4700,
                },
                spaceBetween: 0,

                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },



            });


        })

    }
}

startBigBanner();


let productsSlider = [...document.querySelectorAll('.product-slider-cont')];

function startProductSliders() {
    if (!productsSlider.length) {

    } else {


        productsSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pauseOnMouseEnter: true,

                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,

                autoplay: {
                    delay: 4100,
                },
                spaceBetween: 12,
                breakpoints: {
                    767: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },




            });


        })

    }
}

startProductSliders();

let rowSlider = [...document.querySelectorAll('.parts-row-slider')];

function startRowSliders() {
    if (!rowSlider.length) {

    } else {


        rowSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 2,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,

                autoplay: {
                    delay: 4100,
                },
                spaceBetween: 12,
                breakpoints: {
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },




            });


        })

    }
}

startRowSliders();



//swipers

//part row video

let partsBlock = [...document.querySelectorAll('.parts-row')];

function videoPlayControlRow() {
    if (partsBlock.length) {
        partsBlock.forEach((btn, k) => {
            let vidBlock = btn.querySelector('.parts-video');
            let video = btn.querySelector('.video video');
            if (window.innerWidth < 768) {

                setTimeout(() => {
                    video.play();
                }, k*200)
            } else {


                btn.addEventListener('mouseover', () => {
                    vidBlock.classList.add('hide');
                    video.play();
                });
                btn.addEventListener('mouseout', () => {
                    vidBlock.classList.remove('hide');
                    video.pause();
                });
            }

        })
    }
}
videoPlayControlRow();

//part row video

//seo control

let seoBlock = [...document.querySelectorAll('.seo-block')];

function seoControl() {
    if (seoBlock.length) {
        seoBlock.forEach((cont) => {
            let btn = cont.querySelector('.control-seo');
            let txt = cont.querySelector('.seo-text');

            let opn = btn.dataset.open;
            let cls = btn.dataset.close;

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (txt.classList.contains('open')) {
                    txt.classList.remove('open');
                    btn.innerHTML = cls;

                } else {
                    txt.classList.add('open');
                    btn.innerHTML = opn;
                }
            })
        })
    }
}

seoControl();

//seo control




let menuControl = [...document.querySelectorAll('.menu-item-has-children > a')];

function controlMenu() {
    if (menuControl.length) {
        menuControl.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                if (window.innerWidth < 768) {
                    e.preventDefault();
                    e.stopPropagation();

                    btn.closest('li').classList.toggle('open');
                }

            })
        })
    }
}
controlMenu();

var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');




function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();


//modal windows

//modal window

let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-window')];
let closeModal = [...document.querySelectorAll('.modal-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();

                if (document.querySelector('.modal-window.visible')) {
                    document.querySelector('.modal-window.visible').classList.remove('visible');
                }
                modals.forEach((mod) => {
                    if (mod.dataset.modal === data) {
                        document.body.classList.add('no-scroll');

                        mod.classList.add('visible');
                        if (mod.querySelector('.main-title')) {
                            setTimeout(() => {
                                mod.querySelector('.main-title').classList.add('done');

                            }, 500);
                        }
                        if (mod.classList.contains('modal-video')) {
                            mod.querySelector('iframe').src = btn.dataset.link;
                        }
                    }
                })
            })
        });


        closeModal.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if ( btn.closest('.modal-window').classList.contains('video')) {
                    btn.closest('.modal-window').querySelector('.video-cont').classList.remove('playing');

                    btn.closest('.modal-window').querySelector('.video-cont').innerHTML = '';
                }
            })
        });
        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

                if ( btn.closest('.modal-window').classList.contains('video')) {
                    btn.closest('.modal-window').querySelector('.video-cont').classList.remove('playing');
                    btn.closest('.modal-window').querySelector('.video-cont').innerHTML = '';
                }
            })
        });
        if (clsSecModal.length) {
            clsSecModal.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    btn.closest('.modal-window').classList.remove('visible');
                    document.body.classList.remove('no-scroll');
                    if ( btn.closest('.modal-window').classList.contains('video')) {
                        btn.closest('.modal-window').querySelector('.video-cont').classList.remove('playing');

                        btn.closest('.modal-window').querySelector('.video-cont').innerHTML = '';
                    }

                })
            });
        }
    }
}

controlModal();

//tabs

let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

//tabs



//faq
let faqItems = [...document.querySelectorAll('.single-faq .faq-head')];

function controlFaq() {
    if (faqItems.length) {
        faqItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.single-faq').classList.toggle('open');
            })
        })
    }
}

controlFaq();


//video plays


$('.phone-number').mask('+38(999)-999-99-99');
//video plays


let jsScroll = [...document.querySelectorAll('.js-scroll')];

function initScrollCustom() {
    if (jsScroll.length) {

        jsScroll.forEach((scr) => {
            let list = scr.querySelector('.js-list');
            let txt = scr.dataset.txt;
            $(list).mCustomScrollbar({
                axis:"x", // horizontal scrollbar,
                mouseWheel: false,
                contentTouchScroll: true,
                callbacks:{
                    onInit: function(){
                        let drag = scr.querySelector('.mCSB_dragger_bar');

                        let p = document.createElement('p');

                        p.innerHTML = txt;
                        drag.appendChild(p);

                    }
                }
            });


        })
    }
}

initScrollCustom();


//play video
let irP = 0;
var player = [];

function createVideo(videoBlockId, videoId, irP) {
    player[irP] = new YT.Player(videoBlockId, {
        videoId: videoId,
        playerVars: {
            // 'autoplay':1,
            'autohide': 1,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'playsinline': 1,
            'fs': 1,
            'allowsInlineMediaPlayback': true
        },
        events: {
            'onReady': function (e) {
                // e.target.mute();
                // if ($(window).width() > 991) {

                e.target.playVideo();

                // }
            },
            'onStateChange': function (e) {

            },
        }
    });
}

//play video

let botSlides = [...document.querySelectorAll('.js-video .play')];

function videoControlSlides() {
    if (botSlides.length) {
        botSlides.forEach((btn) => {
            let type = btn.dataset.videoType;
            let id = btn.dataset.videoId;
            let videoCont = document.querySelector('.modal-window.video .video-cont');
            // console.log(id);
            btn.addEventListener('click', () => {
                videoCont.dataset.videoType = type;
                videoCont.dataset.videoId = id;
                // videoCont.querySelector('iframe').id = id;
                document.body.classList.add('no-scroll');
                videoCont.closest('.modal-window').classList.add('visible');

                let videoId = id;


                //    new 22.11.22

                if (type === 'mp4') {
                    let videoBl = document.createElement('video');
                    videoBl.src = id;
                    videoBl.playsinline = true;
                    videoBl.controls = true;
                    videoCont.classList.add('playing');
                    if (videoCont.querySelector('.video-frame')) {
                        document.querySelector('.video-iframe video').pause();
                    } else {
                        $(videoCont).append('<div class="video-iframe" id="' + videoId + '"></div>');
                        videoCont.querySelector('.video-iframe').append(videoBl);
                        document.querySelector('.video-iframe video').play();
                    }



                } else {

                    if (type === 'vimeo') {

                        if (videoCont.classList.contains('playing')) {
                            var player2 = new Vimeo.Player(videoCont.querySelector('iframe'));
                            if (videoCont.classList.contains('pause')) {
                                player2.play();
                                videoCont.classList.remove('pause');
                            } else {
                                player2.pause();
                                videoCont.classList.add('pause');
                            }

                        } else {
                            let videoBl = document.createElement('iframe');
                            videoBl.src = id;
                            videoBl.playsinline = true;
                            videoBl.controls = true;
                            videoBl.autoplay = true;
                            videoBl.setAttribute('allow', 'autoplay');
                            videoBl.setAttribute('frameborder', '0');
                            videoCont.classList.add('playing');
                            videoCont.append(videoBl);


                            var player2 = new Vimeo.Player(videoCont.querySelector('iframe'));

                            player2.play();
                        }




                    } else {
                        if (videoCont.classList.contains('playing')) {

                            if (videoCont.classList.contains('pause')) {
                                player[Number(videoCont.dataset.pl)].playVideo();
                                videoCont.classList.remove('pause')
                            } else {
                                player[Number(videoCont.dataset.pl)].pauseVideo();
                                videoCont.classList.add('pause')
                            }
                        } else {
                            videoCont.classList.add('playing');
                            $(videoCont).append('<div class="video-iframe" id="' + videoId + '"></div>');
                            createVideo(videoId, videoId, irP);
                            videoCont.dataset.pl = irP;
                            irP++;
                        }

                    }
                }
                //    new 22.11.22


            })
        })
    }
}

videoControlSlides();

//tp video

var elementBtns2 = document.querySelector('.footer');

var Visible2 = function (target) {
    if (!document.querySelector('.banner-consult')) {

    } else {
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            document.querySelector('.banner-consult').classList.add('vis2');
        } else {
            // Если элемент не видно, то запускаем этот код
            document.querySelector('.banner-consult').classList.remove('vis2');
        }
        ;
    }
    // Все позиции элемента

};


var elementBtns3 = document.querySelector('.services .service-count');

var Visible3 = function (target) {
    if (!elementBtns3) {

    } else {
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            if (document.querySelector('.banner-consult')) {
                document.querySelector('.banner-consult').classList.remove('vis');
            }

        } else {
            // Если элемент не видно, то запускаем этот код
            if (document.querySelector('.banner-consult')) {
                document.querySelector('.banner-consult').classList.add('vis');
            }

        }
        ;
    }
    // Все позиции элемента

};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    // Visible(elementBtns);
    Visible2(elementBtns2);
    Visible3(elementBtns3);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
// Visible(elementBtns);
Visible2(elementBtns2);
Visible3(elementBtns3);

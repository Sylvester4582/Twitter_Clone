console.log('script loaded...')

async function main() {
    let bar1 = document.querySelector(".bar-1");
    let bar2 = document.querySelector(".bar-2");
    let bar = document.querySelector(".bar")

    bar1.addEventListener('click', () => {
        bar1.style.fontWeight = 700;
        bar1.style.color = 'white';
        bar.style.left = 0;
        bar2.style.fontWeight = 500;
        bar2.style.color = '#71767B';
    })

    bar2.addEventListener('click', () => {
        bar2.style.fontWeight = 700;
        bar2.style.color = 'white';
        bar.style.left = 50 + '%';
        bar1.style.fontWeight = 500;
        bar1.style.color = '#71767B';
    })
}

main()
 const items = document.querySelectorAll('#timeline li');

 const isInViewPort = element =>
 {
    const rect = element.getBoundingClientRect();
    // console.log(`Top -> ${rect.top} 
    //              Left -> ${rect.left}
    //              Botom -> ${rect.bottom}
    //              Right -> ${rect.right}
    //              Window-Innerhight -> ${window.innerHeight}
    //              Client-height -> ${document.documentElement.clientHeight}
    //              Window-Innerwidth -> ${window.innerWidth}
    //              Client-width -> ${document.documentElement.clientHeight}

    //              `);
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight ||
            document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth ||
                document.documentElement.clientWidth)
    );
 };

 const run = () =>
 {
    items.forEach(item =>
        {
            if(isInViewPort(item))
            {
                item.classList.add('show');
            }
        })
 };

//Events 
window.addEventListener('load' , run);
window.addEventListener('resize' , run);
window.addEventListener('scroll' , run);


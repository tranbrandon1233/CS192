/* Can be combined
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandparent.addEventListener('click', (e) => {
    console.log("Grandparent");
}, {capture: true});

parent.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Parent");
});

child.addEventListener('click', (e) => {
    console.log("Child");

    setTimeout(() => {
        parent.removeEventListener("click", printHi)
    }, 2000);
});

document.addEventListener('click', (e) => {
    console.log("Document");
});

function printHi() {
    console.log("Hi");
}

*/

const divs = document.querySelectorAll('div');

/* Does not work fpr divs added after
divs.forEach(div => {
    div.addEventListener('click', () => {
        console.log("hi");
    });
});
*/
addGlobalEventListener('click', 'div', e => {
        console.log("hi");
});


function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector))
            callback(e);
    });
}

const newDiv = document.createElement('div');
newDiv.style.height = "200px";
newDiv.style.width = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);
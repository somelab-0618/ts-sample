let msg: HTMLParagraphElement;

const html = `<h2>This is message</h2>
<div id="content">wait</div>`;

window.addEventListener('load', () => {
  msg = document.querySelector('#msg');
  msg.innerHTML = html;
  const content: HTMLDivElement = document.querySelector('#content');
  setDiv(content);
  addElement(content);
});

function setDiv(content: HTMLDivElement) {
  content.style.position = 'absolute';
  content.style.left = '100px';
  content.style.top = '100px';
  content.style.width = '300px';
  content.style.height = '300px';
  content.style.borderWidth = '3px';
  content.style.borderStyle = 'solid';
  content.style.borderColor = 'red';
  content.style.backgroundColor = 'white';
  content.textContent = '';
}

function addElement(content: HTMLDivElement) {
  for (let i = 1; i <= 7; i++) {
    let div: HTMLDivElement = document.createElement('div');
    div.style.position = 'absolute';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.top = i * 25 + 'px';
    div.style.left = i * 25 + 'px';
    div.style.backgroundColor = '#aa00cc33';
    content.appendChild(div);
  }
}

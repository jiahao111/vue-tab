class tab {
    constructor() {
        this.init();
    }
    addEvent() {
        let ul = document.querySelector('.ul');
        let lis = ul.querySelectorAll('li');
        for (let j = 0; j < lis.length; j++) {
            lis[j].addEventListener('click', (event) => {
                if (j == 0) {
                    this.show(j);
                    this.hide(1);
                    this.hide(2);
                } else if (j == 1) {
                    this.show(j);
                    this.hide(0);
                    this.hide(2);
                } else if (j == 2) {
                    this.show(j);
                    this.hide(0);
                    this.hide(1);
                }
            })
        }
    }
    init() {
        this.createDiv();
    }
    hide(j) {
        let ol = document.querySelector('.ol');
        let list = ol.querySelectorAll('li');
        list[j].style.display = 'none';
    }
    show(j) {
        let ol = document.querySelector('.ol');
        let list = ol.querySelectorAll('li');
        list[j].style.display = 'block';
    }
    init() {
        this.createBox();
    }
    createUl() {
        let ul = document.createElement("ul");
        for (let i = 1; i <= 3; i++) {
            let li = document.createElement("li");
            li.innerHTML = 'tab' + i;
            ul.append(li);
        }
        ul.className = 'ul';
        return ul;
    }
    createTitle() {
        let title = document.createElement("div");
        let ul = this.createUl();
        title.append(ul);
        title.className = 'title';
        return title;
    }
    createOl() {
        let ol = document.createElement("ol");
        for (let i = 1; i <= 3; i++) {
            let li = document.createElement("li");
            li.innerHTML = 'this is ' + i;
            ol.append(li);
        }
        ol.className = 'ol';
        return ol;
    }
    createContent() {
        let content = document.createElement("div");
        let ol = this.createOl();
        content.append(ol);
        content.className = 'content';
        return content;
    }
    createBox() {
        let box = document.createElement("div");
        let title = this.createTitle();
        let content = this.createContent();
        box.append(title);
        box.append(content);
        box.className = 'box';
        document.body.append(box);
        this.addEvent();
    }
}
new tab();
class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode:"open" });
    }
    static get observedAttributes() {
        return ["img", "title", "collection", "description", "price"]
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === "img" && oldVal !== newVal) {
            this.img = newVal;
        }
        if(attr === "title" && oldVal !== newVal) {
            this.title = newVal;
        }
        if(attr === "collection" && oldVal !== newVal) {
            this.collection = newVal;
        }
        if(attr === "description" && oldVal !== newVal) {
            this.description = newVal;
        }
        if(attr === "price" && oldVal !== newVal) {
            this.price = newVal;
        }
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <main class= "container">
            <section class="imgCard">
                <img src= "${this.img}" />
            </section>
            <section class="details">
                <div>
                    <h1>${this.title} </h1>
                    <h2>${this.collection} </h2>
                    <p>${this.description} </p>
                    <h3>${this.price} </h3>
                    <button>Comprar</button>
                </div>    
            </section>
        </main>
        ${this.getStyles()}
        `;
    return template;
    }
    getStyles() {
        return `
        <style>
            :host {
                --primary-background: #5a6cb2;
                width: 80%;
                max-width: 900px;
                min-width: 280px;
                margin: 0 auto;
            }
            .container {
                display: flex;
                position: relative;
                width: 100%;
                height: 500px;
            }
            .container .imgCard {
                display: flex;
                height: 100%;
                background: var(--primary-background);
            }
            .container .imgCard img {
                position: relative;
                top: 100px;
                left: -50px
                width: 620px;
                height: 380px;
                transform: rotate(-30deg);
            }
            .container .imgCard:before {
                position: absolute;
                top: 20px;
                left: 20px;
                font-size: 6em;
                font-weight: 800;
                color: #000;
                content: 'Nike';
                opacity: 0.1;
            }
            .container .details {
                display: flex;
                width: 50%;
                height: 100%;
                justify-content: center;
                align-items: center;
                background: #ffffff;
                padding: 0px 20px 0px 20px;
            }
            .container .details h2 {
                color: #444;
                font-size: 1em;
                line-height: 1em;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
            .container .details h3 {
                color: #444;
                font-size: 1.5em;
                line-height: 1em;
                text-transform: uppercase;
            }
            .container .details button {
                color: #ffffff;
                background-color: var(--primary-background);
                font-size: 1em;
                text-transform: uppercase;
                border-radius: 50px;
                padding: 5px;
                cursor: pointer;
            }
            .container .details button:hover {
                color: var(--primary-background);
                background-color: #ffffff;
                font-size: 1em;
                text-transform: uppercase;
                border-radius: 50px;
                padding: 5px;
                cursor: pointer;
            }
            @media (max-width: 1080px) {
                .container {
                    height: auto;
                    width: auto;
                    flex-wrap: wrap;
                }
                .container .imgCard {
                    display: flex;
                    width: 100%;
                    height: auto;
                    background: var(--primary-background);
                }
                .container .imgCard img {
                    position: relative;
                    top: 50px;
                    left: -50px
                    width: 620px;
                    height: 380px;
                    transform: rotate(0deg);
                }
                .container .details {
                    display: flex;
                    width: 100%;
                    height: auto;
                    justify-content: center;
                    align-items: center;
                    background: #ffffff;
                    padding: 0px 20px 20px 20px;
                }
            }
            @media (max-width: 750px) {
                .container .imgCard {
                    display: flex;
                    width: 100%;
                    height: auto;
                    background: var(--primary-background);
                }
                .container .imgCard img {
                    position: relative;
                    top: 40px;
                    left: -50px
                    width: 520px;
                    height: 280px;
                    transform: rotate(0deg);
                }
                .container .imgCard:before {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    font-size: 5em;
                    font-weight: 800;
                    color: #000;
                    content: 'Nike';
                    opacity: 0.1;
                }
                @media (max-width: 550px) {
                    .container .imgCard {
                        display: flex;
                        width: 100%;
                        height: auto;
                        background: var(--primary-background);
                    }
                    .container .imgCard img {
                        position: relative;
                        top: 20px;
                        left: -50px
                        width: 420px;
                        height: 180px;
                        transform: rotate(0deg);
                    }
                    .container .imgCard:before {
                        position: absolute;
                        top: 20px;
                        left: 20px;
                        font-size: 3em;
                        font-weight: 800;
                        color: #000;
                        content: 'Nike';
                        opacity: 0.1;
                    }
                    .container .details button {
                        color: #ffffff;
                        background-color: var(--primary-background);
                        font-size: 1em;
                        text-transform: uppercase;
                        border-radius: 50px;
                        padding: 5px;
                        cursor: pointer;
                        float: center;
                    }
            }
        </style>
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("product-card", productCard);
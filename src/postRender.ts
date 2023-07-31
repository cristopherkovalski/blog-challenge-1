import { Post } from "./classes/post.js";


export class PostRender {

    constructor(posts: Array<Post>) {
        this.configure(posts);

    }

    private configure(posts: Array<Post>) {
        const postGrid = document.getElementById("post-grid") as HTMLDivElement;
        postGrid.removeChild(document.getElementById("post-card") as HTMLElement);
        posts.forEach((post) => {
            const postCard = document.createElement("section") as HTMLElement;
            postCard.classList.add("post-card");
            const article = document.createElement("article") as HTMLElement;
            article.classList.add("post-box");
            const content = document.createElement("div") as HTMLDivElement;
            content.classList.add("post-content");
            content.textContent = post.body.slice(0, 190);
            const img = document.createElement("img") as HTMLImageElement;
            img.classList.add("post-img");
            img.src = post.imageUrl;
            const title = document.createElement("p") as HTMLParagraphElement;
            title.classList.add("post-card-title");
            title.textContent = post.title;
            const urlParams = `?id=${post.id}&title=${encodeURIComponent(post.title)}&imageUrl=${encodeURIComponent(post.imageUrl)}&body=${encodeURIComponent(post.body)}`;
            const link = document.createElement("a") as HTMLAnchorElement;
            link.href = `post-details.html${urlParams}`;
            const expandStyle = document.createElement("div") as HTMLDivElement;
            expandStyle.classList.add("expand-style");
            expandStyle.textContent = "Expand...";
            link.appendChild(expandStyle);
            article.appendChild(content);
            article.appendChild(img);
            article.appendChild(title);
            article.appendChild(link);
            postCard.appendChild(article);
            postGrid.appendChild(postCard);

            });
        
    }
}
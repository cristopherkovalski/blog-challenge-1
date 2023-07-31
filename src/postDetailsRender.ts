import { Post } from "./classes/post.js"
import { Comments } from "./classes/comments.js"

class PostDetailsRender {
    element: HTMLElement;
    imageElement: HTMLImageElement;
    paragraphElement: HTMLParagraphElement;
    divElement: HTMLDivElement;


    constructor() {
        this.element = document.getElementById("post-details-card") as HTMLElement;
        this.imageElement = document.getElementById("post-details-img") as HTMLImageElement;
        this.paragraphElement = document.getElementById("post-card-details-title") as HTMLParagraphElement;
        this.divElement = document.getElementById("post-details-content") as HTMLDivElement;
        this.postDetails = this.postDetailsHandler();

    }

    private postDetailsHandler(): Post {
        const params = new URLSearchParams(window.location.search);
        let post = new Post(+decodeURIComponent(params.get("id")!), decodeURIComponent(params.get("title")!), decodeURIComponent(params.get("imageUrl")!), decodeURIComponent(params.get("body")!));
        return post;
    }

    public set postDetails(post: Post) {
        console.log(post);
        this.imageElement.src = post.imageUrl;
        this.paragraphElement.textContent = post.title;
        this.divElement.textContent = post.body;
    }
}


class CommentsRender {

    constructor(comments: Array<Comments>) {
        this.configure(this.postCommentsHandler(comments));
    }

    private postCommentsHandler(comments: Array<Comments>): Array<Comments> {
        const param = new URLSearchParams(window.location.search);
        let postId = +decodeURIComponent(param.get("id")!);
        const filteredComments = comments.filter((comment) => comment.postId === postId);
        return filteredComments;
    }

    private configure(comments: Array<Comments>) {
        const commentsContainer = document.getElementById("post-comments-container") as HTMLElement;
        commentsContainer.removeChild(document.getElementById("post-comments-element") as HTMLElement);
        comments.forEach((comment) => {
            const element = document.createElement("section") as HTMLElement;
            element.classList.add("post-comments-element");
            const article = document.createElement("article") as HTMLElement;
            article.classList.add("post-comments-card");
            const paragraph = document.createElement("p") as HTMLParagraphElement;
            paragraph.classList.add("post-comments-p")
            const span = document.createElement("span") as HTMLSpanElement;
            span.classList.add("post-comments-span");
            span.textContent = `${comment.user}: ${comment.email}: `;
            paragraph.appendChild(span);
            paragraph.appendChild(document.createTextNode(comment.body));
            article.appendChild(paragraph);
            const svgUnderline = document.createElement("img");
            svgUnderline.classList.add("separator");
            article.appendChild(svgUnderline);
            commentsContainer.appendChild(article);
        });
    }
}


export { PostDetailsRender, CommentsRender }
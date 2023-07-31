import { Post } from "./classes/post.js";
var PostDetailsRender = /** @class */ (function () {
    function PostDetailsRender() {
        this.element = document.getElementById("post-details-card");
        this.imageElement = document.getElementById("post-details-img");
        this.paragraphElement = document.getElementById("post-card-details-title");
        this.divElement = document.getElementById("post-details-content");
        this.postDetails = this.postDetailsHandler();
    }
    PostDetailsRender.prototype.postDetailsHandler = function () {
        var params = new URLSearchParams(window.location.search);
        var post = new Post(+decodeURIComponent(params.get("id")), decodeURIComponent(params.get("title")), decodeURIComponent(params.get("imageUrl")), decodeURIComponent(params.get("body")));
        return post;
    };
    Object.defineProperty(PostDetailsRender.prototype, "postDetails", {
        set: function (post) {
            console.log(post);
            this.imageElement.src = post.imageUrl;
            this.paragraphElement.textContent = post.title;
            this.divElement.textContent = post.body;
        },
        enumerable: false,
        configurable: true
    });
    return PostDetailsRender;
}());
var CommentsRender = /** @class */ (function () {
    function CommentsRender(comments) {
        this.configure(this.postCommentsHandler(comments));
    }
    CommentsRender.prototype.postCommentsHandler = function (comments) {
        var param = new URLSearchParams(window.location.search);
        var postId = +decodeURIComponent(param.get("id"));
        var filteredComments = comments.filter(function (comment) { return comment.postId === postId; });
        return filteredComments;
    };
    CommentsRender.prototype.configure = function (comments) {
        var commentsContainer = document.getElementById("post-comments-container");
        commentsContainer.removeChild(document.getElementById("post-comments-element"));
        comments.forEach(function (comment) {
            var element = document.createElement("section");
            element.classList.add("post-comments-element");
            var article = document.createElement("article");
            article.classList.add("post-comments-card");
            var paragraph = document.createElement("p");
            paragraph.classList.add("post-comments-p");
            var span = document.createElement("span");
            span.classList.add("post-comments-span");
            span.textContent = "".concat(comment.user, ": ").concat(comment.email, ": ");
            paragraph.appendChild(span);
            paragraph.appendChild(document.createTextNode(comment.body));
            article.appendChild(paragraph);
            var svgUnderline = document.createElement("img");
            svgUnderline.classList.add("separator");
            article.appendChild(svgUnderline);
            commentsContainer.appendChild(article);
        });
    };
    return CommentsRender;
}());
export { PostDetailsRender, CommentsRender };

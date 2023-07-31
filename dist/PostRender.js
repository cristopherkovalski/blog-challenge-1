var PostRender = /** @class */ (function () {
    function PostRender(posts) {
        this.configure(posts);
    }
    PostRender.prototype.configure = function (posts) {
        var postGrid = document.getElementById("post-grid");
        postGrid.removeChild(document.getElementById("post-card"));
        posts.forEach(function (post) {
            var postCard = document.createElement("section");
            postCard.classList.add("post-card");
            var article = document.createElement("article");
            article.classList.add("post-box");
            var content = document.createElement("div");
            content.classList.add("post-content");
            content.textContent = post.body.slice(0, 190);
            var img = document.createElement("img");
            img.classList.add("post-img");
            img.src = post.imageUrl;
            var title = document.createElement("p");
            title.classList.add("post-card-title");
            title.textContent = post.title;
            var urlParams = "?id=".concat(post.id, "&title=").concat(encodeURIComponent(post.title), "&imageUrl=").concat(encodeURIComponent(post.imageUrl), "&body=").concat(encodeURIComponent(post.body));
            var link = document.createElement("a");
            link.href = "post-details.html".concat(urlParams);
            var expandStyle = document.createElement("div");
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
    };
    return PostRender;
}());
export { PostRender };

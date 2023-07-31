import { Post } from "./classes/post.js";
import { Comments } from "./classes/comments.js";
var PostData = /** @class */ (function () {
    function PostData() {
    }
    Object.defineProperty(PostData.prototype, "CreatePosts", {
        get: function () {
            var posts = [];
            for (var i = 0; i <= 5; i++) {
                var post = new Post(i, "dummy" + i, "src/img/hexa.png", "aloha aloha aloha loha");
                posts.push(post);
            }
            return posts;
        },
        enumerable: false,
        configurable: true
    });
    return PostData;
}());
var CommentsData = /** @class */ (function () {
    function CommentsData() {
    }
    Object.defineProperty(CommentsData.prototype, "createComments", {
        get: function () {
            var comments = [];
            for (var i = 0; i <= 4; i++) {
                var comment = new Comments(i, i, "joão" + i, "joão" + i + "@gmail.com", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" +
                    "industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" +
                    "industry's standard dummy text ever since the 1500s, when an unknown printer took..");
                comments.push(comment);
            }
            return comments;
        },
        enumerable: false,
        configurable: true
    });
    return CommentsData;
}());
export { PostData, CommentsData };

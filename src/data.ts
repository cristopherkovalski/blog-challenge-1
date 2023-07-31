import { Post } from "./classes/post.js";
import { Comments } from "./classes/comments.js";


class PostData {

    constructor() {

    }

    public get CreatePosts(): Array<Post> {
        let posts: Array<Post> = [];
        for (let i = 0; i <= 5; i++) {
            let post = new Post(i, "dummy" + i, "src/img/hexa.png",  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" +
            "industry's standard dummy text ever since the 1500s, when an unknown printer took.. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" +
            "industry's standard dummy text ever since the 1500s, when an unknown printer took..");
            posts.push(post);
        }

        return posts;
    }


}

class CommentsData {

    constructor() {

    }

    public get createComments(): Array<Comments> {
        const comments: Array<Comments> = [];
        for (let i = 0; i <= 4; i++) {
            let comment = new Comments(i, i, "joão" + i, "joão" + i + "@gmail.com", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" +
                "industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" +
                "industry's standard dummy text ever since the 1500s, when an unknown printer took..");
            comments.push(comment);
        }
        for (let i = 5; i <= 8; i++) {
            let comment = new Comments(i, 2, "joão" + i, "joão" + i + "@gmail.com", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" +
                "industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" +
                "industry's standard dummy text ever since the 1500s, when an unknown printer took..");
            comments.push(comment);
        }
        return comments;
    }

}

export { PostData, CommentsData };




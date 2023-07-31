import { Post } from "./classes/post.js";
import { PostData } from "./data.js";
import { PostRender } from "./postRender.js";

let postdata = new PostData();
let posts = postdata.CreatePosts;
const postRender = new PostRender(posts);

import { PostData } from "./data.js";
import { PostRender } from "./postRender.js";
var postdata = new PostData();
var posts = postdata.CreatePosts;
var postRender = new PostRender(posts);

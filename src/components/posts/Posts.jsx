import Post from "../post/Post";
import "./posts.scss";
// import {ehsan} from "../../assets/ehsan.jpg"
import ehsanPhoto from "../../assets/ehsan.jpg";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Ehsan Ahmed Rafique",
      userId: 1,
      profilePic:
        ehsanPhoto,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: ehsanPhoto,
    },
    {
      id: 2,
      name: "Ehsan Ahmed",
      userId: 2,
      profilePic:
        ehsanPhoto,
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;

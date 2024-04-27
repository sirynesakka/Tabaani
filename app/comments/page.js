
import Head from "next/head";

const Comments = () => {
  return (
    <div>
      <div>
        <title>Comments Page</title>
      </div>
      <div className="p-12">
        <h1 className="text-2xl font-bold">Comments!</h1>
        <textarea placeholder="write your comment">
            
        </textarea>
      </div>
    </div>
  );
};

export default Comments;
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../Buttons";
import { SuccessBanner, ErrorBanner } from "../Banner";

export default function CommentForm({ onSubmit, error, success, postId }) {
  const [comment, setComment] = useState("");

  return (
    <div>
      {error && (
        <ErrorBanner message={error} />
      )}
      {success && (
        <SuccessBanner message={success} />
      )}
      <form onSubmit={onSubmit}>
        <textarea className="w-full bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:border-gray-500" placeholder="Write a comment" value={comment} onChange={(e) => setComment(e.target.value)}>
        </textarea>
        <Button type={"submit"} className={"my-4"} text={"Comment"} onClick={(e) => {
          e.preventDefault();
          onSubmit(comment, postId);
          setComment("");
        }
        } />
      </form >
    </div >

  );
}
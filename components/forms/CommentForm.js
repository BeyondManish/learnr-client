import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../Buttons";
import { SuccessBanner, ErrorBanner } from "../Banner";

export default function CommentForm() {
  const [state, setState] = useState({
    content: "",
    error: "",
    success: "",
  });

  const { content, error, success } = state;

  useEffect(() => {

  }, []);

  const submitForm = (e) => {
    console.log(state);
    e.preventDefault();
    axios.post("/comment/create", { content }).then(() => {
      setState({ ...state, success: "Comment created successfully", error: "" });
      console.log(state);
    }).catch((err) => {
      setState({ ...state, error: err.response.data.message || err.response.data.errors[0], success: "" });
    });
  };

  return (
    <div>
      {error && (
        <ErrorBanner message={state.error} />
      )}
      {success && (
        <SuccessBanner message={state.success} />
      )}
      <form onSubmit={submitForm}>
        <textarea className="w-full bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:border-gray-500" placeholder="Write a comment" value={content} onChange={(e) => { setState({ content: e.target.value, success: "", error: "" }); }}>
        </textarea>
        <Button type={"submit"} className={"my-4"} text={"Comment"} onClick={submitForm} />
      </form >
    </div>

  );
}
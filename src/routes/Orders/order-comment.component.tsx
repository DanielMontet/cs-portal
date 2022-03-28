import React, { useContext, useState } from "react";
import { getFormatedDate } from "../../lib/get-formated-date";
import { AppProps, GlobalAppContext, comment } from "../../types/props.types";

const CommentsList = () => {
  const { comments } = useContext(GlobalAppContext);
  if (comments!.length === 0) {
    return (
      <React.Fragment>
        <p>Add a comment</p>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {comments?.map((comment: comment, index) => (
        <React.Fragment key={index}>
          <header className="flex items-center gap-3">
            <img
              src="https://picsum.photos/200/200"
              id="userImg"
              className="h-12 rounded-full"
              alt=""
            />
            <label
              htmlFor="userImg"
              className="text-sm text-current font-medium"
            >
              {comment.userName}
            </label>
            <div className="bg-gray-100 rounded-full h-0 5"></div>
            <span className="text-slate-400 text-sm">{comment.date}</span>
          </header>
          <section>
            <p className="text-slate-700 py-5">{comment.notes}</p>
          </section>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

const CommentsForm = () => {
  const { comments, setComments } = useContext(GlobalAppContext);
  const [query, setQuery] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) {
      let comment = {
        id: `${comments?.length}`,
        date: getFormatedDate(new Date()),
        notes: query,
        userName: "John Doe",
      };

      setComments!([...comments!, comment]);
    }

    // handle error and validate
  };

  return (
    <React.Fragment>
      <img
        src="https://picsum.photos/200/200"
        className="h-12 rounded-full col-span-3"
        alt=""
      />
      <form
        className="flex items-center col-span-45 gap-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <textarea
          className="border border-slate-300 rounded-lg w-10/12 outline-0 focus:border-blue-300 p-5"
          name="addComment"
          id="addComment"
          rows={3}
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
        <button
          className="bg-secondary hover:bg-blue-600 text-white w-2/12 rounded-lg px-2 py-3"
          type="submit"
        >
          Add note
        </button>
      </form>
    </React.Fragment>
  );
};

const OrderCommentSection: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <header className="border-b border-gray-200 p-5 flex justify-between">
        <label className="text-current font-medium text-1xl " htmlFor="">
          CS Order Notes
        </label>
      </header>
      <main className="p-5">
        <section className="flex flex-col w-4/5">
          <CommentsList />
        </section>
        <section className="grid grid-cols-48 items-center gap-5 w-4/5 mt-5">
          <CommentsForm />
        </section>
      </main>
    </React.Fragment>
  );
};

export default OrderCommentSection;

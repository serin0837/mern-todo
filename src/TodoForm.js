import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom"; // redirect

export const TodoForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });
  const history = useHistory();

  const submitHandler = handleSubmit((data) => {
    // alert(JSON.stringify(data));
    onSubmit(data);
    history.push("/"); // redirect to todo list
  });
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="text">Text:</label>
        <input
          className="form-control"
          ref={register}
          type="text"
          name="text"
          id="text"
        ></input>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Save Todo
        </button>
      </div>
    </form>
  );
};

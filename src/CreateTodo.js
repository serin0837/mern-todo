import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom"; // redirect

export const CreateTodo = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    history.push("/"); // redirect to todo list
  });
  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Todo</h3>
        <form onSubmit={onSubmit}>
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
              Create Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

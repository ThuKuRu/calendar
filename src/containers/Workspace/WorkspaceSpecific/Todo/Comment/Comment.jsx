import React, { useState } from "react";
import { CommentStyle } from "./index.style";

const Comment = () => {
  const [saveColor, setSaveColor] = useState("#978f8f");
  const [saveBgColor, setSaveBgColor] = useState("#d9d9d9");
  return (
    <CommentStyle className="container">
      <textarea className="input" type="text" placeholder="Add comment ..." />
      <div className="button">
        <div className="Save" style={{ backgroundColor: saveBgColor }}>
          <a
            className="save"
            style={{ color: saveColor }}
            // onClick={handleTodo}
            href="/#"
          >
            Save
          </a>
        </div>
      </div>
    </CommentStyle>
  );
};

export default Comment;

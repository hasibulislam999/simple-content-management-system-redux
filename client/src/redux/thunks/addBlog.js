const addBlog = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    const data = await res.json();
    if (data.data.acknowledged) {
      dispatch({
        _id: data.data.insertedId,
        ...blog,
      });
    }
  };
};

export default addBlog;
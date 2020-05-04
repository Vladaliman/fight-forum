const initialState = {
  projects: [
    { id: "1", title: "UFC 201", content: "blah blah blah" },
    { id: "2", title: "UFC 309", content: "blah blah blah" },
    { id: "3", title: "UFC 325", content: "blah blah blah" },
  ],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log(action.project);
  }
  return state;
};

export default projectReducer;

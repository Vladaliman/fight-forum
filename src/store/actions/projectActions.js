import { firestore } from "firebase";

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call
    const firestore = getFirestore();
    firestore
      .collection("Projects")
      .add({
        ...project,
        authorFirstName: "Vladimir",
        authorLastName: "Ostojic",
        authorId: 123,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERR", err });
      });
  };
};

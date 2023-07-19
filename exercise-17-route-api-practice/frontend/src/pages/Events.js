import React from "react";
import EventsList from "../components/EventsList";

const EventsPage = () => {
  const DUMMY_EVENTS = [
    {
      id: "hfdjksfhfwbfkjsd",
      title: "First Event",
      date: "2011-11-18",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oneway-e38b6.appspot.com/o/galleryPictures%2FAlabama%2Fbe5cc54a-ae47-4293-83ff-39e57428c1af?alt=media&token=12be5656-0397-47ea-b45e-c4879d9c492d",
    },
    {
      id: "dasndeknrenr",
      title: "Second Event",
      date: "2021-12-15",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oneway-e38b6.appspot.com/o/galleryPictures%2FAlabama%2Fbe5cc54a-ae47-4293-83ff-39e57428c1af?alt=media&token=12be5656-0397-47ea-b45e-c4879d9c492d",
    },
    {
      id: "asdiuhefnsd",
      title: "Third Event",
      date: "1994-10-21",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oneway-e38b6.appspot.com/o/galleryPictures%2FAlabama%2Fbe5cc54a-ae47-4293-83ff-39e57428c1af?alt=media&token=12be5656-0397-47ea-b45e-c4879d9c492d",
    },
  ];
  return (
    <>
      <h1>EventsPage</h1>
      <EventsList events={DUMMY_EVENTS} />
    </>
  );
};

export default EventsPage;

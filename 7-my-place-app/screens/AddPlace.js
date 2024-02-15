import PlaceForm from "../components/Places/PlaceForm";

function AddPlace({ naviagation }) {
  function createPlaceHandler(place) {
    naviagation.navigate("AllPlaces", {
      place: place,
    });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;

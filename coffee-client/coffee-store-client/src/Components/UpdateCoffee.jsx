import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, price, quantity, details, photo, taste, supplier } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee update saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="p-24 bg-[#F4F3F0]">
        <div className="p-12 text-center space-y-4">
          <h1 className="font-semibold text-4xl">Update Coffee</h1>
          <p className="font-medium text-gray-500 text-base">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at<br></br> its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed<br></br>to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Quantity</label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input w-full"
                placeholder="Enter Quantity Number"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input w-full"
                placeholder="Price please"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input w-full"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 mt-5 rounded-box border p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full"
              placeholder="Enter photo URL"
            />
          </fieldset>
          <input
            type="submit"
            className="btn mt-5 w-full bg-[#D2B48C]"
            value="Update coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;

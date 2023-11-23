import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import Navbar from "../components/Navbar";
import axios from "axios";

function NewIssue() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");
    axios({
      method: "post",
      url: `http://localhost:3000/issue`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        title: title,
        description: description,
        status: "open",
        city: city,
        state: state,
      },
    })
      .then((response) => {
        console.log(response.data);
        alert("Problema criado com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <form className="card-body pb-0" onSubmit={handleSubmit}>
        <h2 className="card-title">Novo Problema</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Titulo</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Descrição</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Estado</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cidade</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        {/* SUBMIT */}
        <div className="form-control mt-6">
          <button className="btn btn-primary disabled:btn-disabled">
            Create
          </button>
        </div>
      </form>
      <BottomNav />
    </div>
  );
}

export default NewIssue;

import axios from "axios";
import { useEffect, useState } from "react";
import { TIssue } from "../lib/issueTypes";

function IssueList() {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    axios({
      method: "get",
      url: "http://localhost:3000/issue",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("### Response Data ###");
        console.log(response.data);
        setIssues(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mx-8 my-8">Problemas</h1>
      <ul className="mx-8 my-4">
        {issues.map((issue: TIssue) => {
          return (
            <li key={issue.id} className="mb-2">
              <div tabIndex={0} className="collapse bg-base-200">
                <div className="collapse-title text-xl font-medium">
                  {issue.title}
                </div>
                <div className="collapse-content">
                  <div className="bg-base-100 rounded-md p-2">
                    <div className="mb-2">
                      <p className="text-md font-bold">Descrição: </p>
                      {issue.description}
                    </div>
                    <div className="mb-2">
                      <p className="text-md font-bold">Estado:</p>
                      {issue.state}
                    </div>
                    <div className="mb-2">
                      <p className="text-md font-bold">Cidade: </p>
                      {issue.city}
                    </div>
                    <div className="mb-2">
                      <p className="text-md font-bold">Status: </p>
                      {issue.status === "open"
                        ? "Aberto"
                        : issue.status === "in-progress"
                        ? "Em progresso"
                        : "Resolvido"}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default IssueList;

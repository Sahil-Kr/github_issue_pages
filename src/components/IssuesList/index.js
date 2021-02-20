import React, { useEffect, useState } from "react";
import Issue from "./Issue";
import classes from "./index.module.css";

const IssuesList = () => {
  const [issuesData, setIssuesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetching data....");
    const res = await fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues"
    );
    const issues = await res.json();
    console.log(issues);
    setIssuesData(issues);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <p style={{ color: "white" }}>Loading...</p>
      ) : (
        <div className={classes.IssuesList}>
          {issuesData.map((issue) => (
            <Issue key={issue.id} issue={issue} />
          ))}
        </div>
      )}
    </>
  );
};

export default IssuesList;

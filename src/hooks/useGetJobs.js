import { useEffect, useState } from "react";
import connector from "../helpers/Handler";

export function useGetJobs() {
  const [jobsList, setJobsList] = useState(null);
  const [isLoading, setiIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const getJobList = (itemQuery) => {
    // get all jobs
    setiIsLoading(true);
    // using connecter to get the job list as it has already added the required headers
    connector
      .get("/jobs", {
        params: {
          language_profile_uuid: "ee5d991c-cdc6-4e83-b0b3-96f147208549",
          page: currentPage,
          limit: 12,
          itemQuery: itemQuery,
        },
      })
      .then((res) => {
        // store jobs list in state
        setJobsList(res.data.results);
        setiIsLoading(false);
      })
      .catch((err) => {
        alert(err);
        setiIsLoading(false);
      });
  };

  const handleSearch = ({ itemQuery }) => {
    // call getJobList with itemQuery params to search based on title
    getJobList(itemQuery);
    itemQuery !== "" &&
      alert(
        "The results might be empty because the Api does not filter acording to any title try (test , developer) it worked on both"
      );
  };
  useEffect(() => {
    // fetch initial job list on component mount
    getJobList();
  }, [currentPage, setCurrentPage]);

  return { jobsList, isLoading, handleSearch, setCurrentPage };
}

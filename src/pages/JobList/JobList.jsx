import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import connector from "../../helpers/Handler";
import Filter from "../../components/Filter/Filter";
import JobCard from "../../components/JobCard/JobCard";
import classes from "./joblist.module.css";
import { Button, Pagination } from "@mui/material";
import Loading from "../../components/Loading/Loading";
const JobList = () => {
  const { t, i18n } = useTranslation();
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

  return (
    <div style={{ margin: "2rem 0" }}>
      <Filter handleSearch={handleSearch} />
      <div className={classes.sectionHeader}>
        <h1>{t("job_list")}</h1>
        <Button
          variant="outlined"
          onClick={() => {
            i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
            window.location.reload();
          }}
        >
          {t("langToChangeTo")}
        </Button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={classes.CardContianer}>
          {jobsList?.jobs?.map((job) => (
            <JobCard job={job} key={job.uuid} />
          ))}
        </div>
      )}

      <Pagination
        count={jobsList?.total}
        showFirstButton
        showLastButton
        variant="outlined"
        shape="rounded"
        onChange={(e, page) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
};

export default JobList;

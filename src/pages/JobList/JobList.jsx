import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import connector from "../../helpers/Handler";
import Filter from "../../components/Filter/Filter";
import JobCard from "../../components/JobCard/JobCard";
import classes from "./joblist.module.css";
import { Button, Pagination } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import { useGetJobs } from "../../hooks/useGetJobs";
const JobList = () => {
  const { t, i18n } = useTranslation();

  const { jobsList, isLoading, handleSearch, setCurrentPage } = useGetJobs();
  // useGetJobs is a custom hooks made to saprate the logic from ui and to not reapet functionaltiy in other components

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

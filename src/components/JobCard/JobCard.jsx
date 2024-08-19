import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./jobcard.module.css";
import { useNavigate } from "react-router-dom";
export default function JobCard({ job, noButton }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={classes.cardContainer}>
      <h4>{job.title}</h4>
      <div className={classes.cardContent}>
        <p>
          {t("jobcategory")} : {job.category[0]}
        </p>
        <p>
          {t("joblevel")} : {job.career_level[0] || "N/A"}
        </p>
      </div>
      {noButton ? null : (
        <Button
          variant="outlined"
          onClick={
            () =>
              navigate(`/job-details/${job.title}`, {
                state: {
                  job: job,
                },
              })
            // *********i had to use this way because there is no api provided for geting the job details for a specific job **********
          }
        >
          {t("view")}
        </Button>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import JobCard from "../../components/JobCard/JobCard";
import connector from "../../helpers/Handler";
import classes from "./jobDetails.module.css";
import JobTitle from "../../components/jobTitle/JobTitle";
import JobDescription from "../../components/JobDescription/JobDescription";
import Loading from "../../components/Loading/Loading";
import { useGetJobs } from "../../hooks/useGetJobs";

const JobDetails = () => {
  const { state } = useLocation();
  // *********i had to use this way because there is no api provided for geting the job details for a specific job **********
  const { jobsList, isLoading } = useGetJobs();
  // useGetJobs is a custom hooks made to saprate the logic from ui and to not reapet functionaltiy in other components

  return (
    <>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        job Description is filled with static data because there was no api
        provided for the job details
      </p>
      <div style={{ margin: "2rem 0" }} className={classes.mainContainer}>
        <div className={classes.detailsContainer}>
          <JobTitle title={state.job.title} posted_at={state.job.posted_at} />
          <JobDescription />
          {/* job Description is filled with static data because there was no api provided for the job details */}
        </div>
        <div className={classes.sideCardContainer}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {jobsList?.jobs?.map((job) => (
                <JobCard job={job} key={job.uuid} noButton={true} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default JobDetails;

import React from "react";
import ProjectFilters from "../freelancer/ProjectFilters";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import ProjectList from "../home/ProjectList";
import { Link, useSearchParams } from "react-router-dom";
import useGetProjectsList from "../home/useGetProjectsList";

function ProjectsForAdmin() {
  const [searchParams] = useSearchParams();
  const { data, isPending } = useGetProjectsList(searchParams.toString());
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1>لیست کلیه پروژه های ثبت شده توسط کارفرماها</h1>
        <Link to="add" className="btn w-1/4 text-center">
          + افزودن پروژه
        </Link>
      </div>
      <div className="w-full">
        <ProjectFilters />
        {isPending ? (
          <div className="flex items-center h-50 justify-center">
            <Loader size="15px" color="blue" />
          </div>
        ) : data?.projects.length === 0 ? (
          <Empty resource="پروژه ای" />
        ) : (
          <ProjectList projects={data?.projects} page="addProposal" />
        )}
      </div>
    </div>
  );
}

export default ProjectsForAdmin;

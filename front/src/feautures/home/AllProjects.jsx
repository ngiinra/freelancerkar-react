import React from "react";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import useGetProjectsList from "./useGetProjectsList";
import ProjectList from "./ProjectList";
import ProjectFilters from "../freelancer/ProjectFilters";
import { useSearchParams } from "react-router-dom";

export default function AllProjects() {
  const [searchParams] = useSearchParams();
  const { data, isPending } = useGetProjectsList(searchParams.toString());

  return (
    <div className="w-full">
      <ProjectFilters />
      {isPending ? (
        <div className="flex items-center h-50 justify-center">
          <Loader size="15px" color="blue" />
        </div>
      ) : data?.projects.length === 0 ? (
        <Empty resource="پروژه ای" />
      ) : (
        <ProjectList projects={data?.projects} />
      )}
    </div>
  );
}

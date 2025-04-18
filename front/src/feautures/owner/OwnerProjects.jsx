import React, { useState } from "react";
import Loader from "../../ui/Loader";
import { Link, useNavigate } from "react-router-dom";
import getPersianDateOf from "../../utils/convertToDate";
import truncateText from "../../utils/truncateText";
import TooltipButton from "../../ui/TooltipButton";
import Table from "../../ui/Table";
import useDeleteProject from "./useDeleteProject";
import useGetProjects from "./useGetProjetcs";
import useChangeProjectStatus from "./useChangeProjectStatus";
import ShowProjectTags from "../../ui/ShowProjectTags";
import { StatusButtonGroup } from "../../ui/Fields";
import AreYouSure from "../../ui/AreYouSure";

export default function OwnerProjects() {
  const { data, isPending } = useGetProjects();

  if (isPending)
    return (
      <div className="flex items-center justify-center">
        <Loader color="pink" size="20px" />
      </div>
    );
  else if (data?.statusCode === 403) return navigate("/");
  else if (data?.projects?.length === 0)
    return <p className="text-center mt-10">پروژه ای یافت نشد</p>;
  return (
    <Table>
      <Table.Thead>
        <th>#</th>
        <th>عنوان</th>
        <th>تگ ها</th>
        <th>دسته بندی</th>
        <th>ددلاین</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Thead>
      <Table.Tbody>
        {data.projects.map((project, index) => (
          <ShowProjectRow
            project={project}
            index={index + 1}
            key={project._id}
          />
        ))}
      </Table.Tbody>
    </Table>
  );
}

function ShowProjectRow({ project, index }) {
  const { isPending, mutate } = useChangeProjectStatus();
  const [statusState, setStatusState] = useState(project.status);
  return (
    <tr key={project._id}>
      <td>{index}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>
        <ShowProjectTags tags={project.tags} extraClasses="max-w-65" />
      </td>
      <td>{project.category?.title}</td>
      <td>{getPersianDateOf(project.deadline)}</td>
      <td>{project.freelancer?.name}</td>
      <td>
        {isPending ? (
          <Loader color="blue" />
        ) : (
          <StatusButtonGroup
            buttons={[
              { value: "OPEN", label: "باز", color: "red" },
              { value: "CLOSED", label: "بسته", color: "green" },
            ]}
            mutateFn={mutate}
            mutateResourceId={project._id}
            statusState={statusState}
            setStatusState={setStatusState}
          />
        )}
      </td>
      <td>
        <ShowProjectFunctionsButton projectId={project._id} />
      </td>
      <td>
        <Link
          className="px-3 border-1 border-stone-300 dark:bg-slate-700 bg-stone-100 rounded-md hover:bg-stone-200"
          to={`/owner/project/${project._id}/proposals`}
        >
          ...
        </Link>
      </td>
    </tr>
  );
}

function ShowProjectFunctionsButton({ projectId }) {
  const navigate = useNavigate();
  const { isProjectDeletedPending, deleteMutate } = useDeleteProject();
  function handleOpenSingleProject(e) {
    e.preventDefault();
    navigate(`/owner/projects/${projectId}`);
  }

  function handleDeleteProject(e) {
    e.preventDefault();
    deleteMutate(projectId);
  }

  if (isProjectDeletedPending) return <Loader size="8px" color="blue" />;
  return (
    <div className="flex items-center">
      <button onClick={handleOpenSingleProject}>✏️</button>
      <TooltipButton buttonClasses="" buttonText="❌">
        <AreYouSure handleClickNo={handleDeleteProject} />
      </TooltipButton>
    </div>
  );
}

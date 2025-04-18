import React from "react";
import getPersianDateOf from "../../utils/convertToDate";
import { Link, useNavigate } from "react-router-dom";
import truncateText from "../../utils/truncateText";
import ShowProjectTags from "../../ui/ShowProjectTags";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function ProjectItem({ project, page = "" }) {
  return (
    <div
      className={`w-full border-b-1 base-border base-color
     xl:w-full py-8 px-6 ${page !== "addProposal" ? "card" : ""}`}
    >
      <div className="lg:flex lg:flex-row w-full">
        <div className="lg:w-2/3 lg:pl-3 w-full text-stone-500 dark:text-slate-400">
          <h2 className="text-stone-800 dark:text-slate-100 text-md mt-2 mb-6">
            {project.title}
          </h2>
          <div className="flex flex-row text-sm mb-1 space-x-2">
            <p>⏳تحویل: {getPersianDateOf(project.deadline)}</p>
            <p>📅ایجاد: {getPersianDateOf(project.createdAt)}</p>
            <p>🗂️دسته بندی : {project.category.title}</p>
          </div>
          <p className="p-1 h-20">{truncateText(project.description, 120)}</p>
          <div className="h-15 overflow-auto ">
            <ShowProjectTags tags={project.tags} />
          </div>
          <div className="lg:hidden">
            <SendPropoButton
              project={project}
              page={page}
              shoudBudgetDisplayed={true}
            />
          </div>
        </div>
        <div className="lg:w-1/3 hidden text-stone-800 lg:flex flex-col mt-8 mr-8 pr-8 dark:text-slate-400 border-r-1 base-border">
          <p className="text-xl">بودجه</p>
          <p className="dark:text-slate-300">
            {toPersianNumbersWithComma(project.budget)} تومان
          </p>
          <SendPropoButton
            project={project}
            page={page}
            shoudBudgetDisplayed={false}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

function SendPropoButton({ project, shoudBudgetDisplayed, page = "" }) {
  const navigate = useNavigate();
  const navigateAddress = `/freelancer/projects/${project._id}`;
  const navigateOption = {
    state: project,
  };

  if (page === "addProposal" && shoudBudgetDisplayed)
    return (
      <div className="text-lg font-bold lg:hidden">
        بودجه {toPersianNumbersWithComma(project.budget)} تومان
      </div>
    );
  else if (page !== "addProposal" && shoudBudgetDisplayed)
    return (
      <button
        className="show-detail-btn"
        onClick={() => navigate(navigateAddress, navigateOption)}
      >
        بودجه {toPersianNumbersWithComma(project.budget)} تومان - ارسال درخواست
      </button>
    );
  else if (page !== "addProposal" && !shoudBudgetDisplayed)
    return (
      <button
        className="show-detail-btn"
        onClick={() => navigate(navigateAddress, navigateOption)}
      >
        ارسال درخواست
      </button>
    );
}

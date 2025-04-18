import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import ReturnButton from "../../ui/ReturnButton";
import ShowProposalRow from "./ShowProposalRow";
import { useSearchParams } from "react-router-dom";
export default function ProjectProposalsBody({ project }) {
  return (
    <div>
      <ReturnButton />
      {!project.proposals.length ? (
        <Empty resource="درخواستی" />
      ) : (
        <Table>
          <Table.Thead>
            <th>#</th>
            <th>فریلنسر</th>
            <th>مدت تحویل</th>
            <th>هزینه</th>
            <th>توضیحات</th>
            <th>وضعیت تایید</th>
          </Table.Thead>
          <Table.Tbody>
            {project.proposals.map((proposal, index) => (
              <ShowProposalRow
                mode="OWNER"
                proposal={proposal}
                index={index}
                key={proposal._id}
              />
            ))}
          </Table.Tbody>
        </Table>
      )}
    </div>
  );
}

import React from "react";
import Table from "../../ui/Table";
import ShowProposalRow from "../project/ShowProposalRow";

function FreelancerProposalsList({ proposals }) {
  return (
    <Table>
      <Table.Thead>
        <th>#</th>
        <th>مدت تحویل</th>
        <th>هزینه</th>
        <th>توضیحات</th>
        <th>وضعیت تایید</th>
      </Table.Thead>
      <Table.Tbody>
        {proposals.map((proposal, index) => (
          <ShowProposalRow
            mode="FREELANCER"
            proposal={proposal}
            index={index}
            key={proposal._id}
          />
        ))}
      </Table.Tbody>
    </Table>
  );
}

export default FreelancerProposalsList;

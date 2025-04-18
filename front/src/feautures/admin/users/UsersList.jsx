import Table from "../../../ui/Table";
import UserRow from "./UserRow";

export default function UsersList({ users }) {
  return (
    <div className="opacity-100 duration-700 starting:opacity-0 transition-all">
      <Table>
        <Table.Thead>
          <th>#</th>
          <th>نام کامل</th>
          <th>شماره موبایل</th>
          <th>شماره موبایل تایید شده؟</th>
          <th>ایمیل</th>
          <th>نوع کاربری</th>
          <th>وضعیت تایید</th>
        </Table.Thead>
        <Table.Tbody>
          {users.map((user, index) => (
            <UserRow key={user._id} user={user} index={index} />
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}

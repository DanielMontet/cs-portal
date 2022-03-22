import UserDetail, { AddOrEditUserForm } from "./user-detailcomponent";

const AddUser: React.FunctionComponent = () => {
  return (
    <section className="p-5">
      <AddOrEditUserForm />
    </section>
  );
};

export default AddUser;

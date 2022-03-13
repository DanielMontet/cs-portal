import Layout from "../../components/Layout/layout.component";
import { AppProps } from "../../types/props.types";

const Page: React.FunctionComponent<AppProps> = (props) => {
  return <Layout page={<CustomerDetail />} />;
};

const CustomerDetail: React.FunctionComponent<AppProps> = (props) => {
  return <section className="shadow rounded-lg bg-white h-full">Hello</section>;
};

export default Page;

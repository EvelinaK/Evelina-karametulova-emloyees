
import Layout from "../../components/Layout/Layout";

const PublicRoute = ({ children, setRole }) => {
  return <Layout setRole={setRole}>{children}</Layout>;
}
export default PublicRoute

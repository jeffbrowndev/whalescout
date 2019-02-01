import Layout from './components/layout';
import { withRouter } from 'next/router';

const EventPage = withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
  </Layout>
));

export default EventPage;

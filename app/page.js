import "react-vertical-timeline-component/style.min.css";
import HeroSection from "./components/HeroSection";
import SponsorsList from "./components/SponsorsList";
import Timeline from "./components/Timeline";
import client from "./_utils/apolloClient";
import GET_CONFERENCES from "./_utils/graphQLQueries";

export default async function Home() {
  const { data } = await client.query({ query: GET_CONFERENCES });
  console.log("data", data);
  // const [conferences, setConferences] = useState([]);
  // useEffect(() => {
  //   getAllConf();
  // }, []);

  // const getAllConf = () => {
  //   GlobalApi.getConfList().then((resp) => {
  //     console.log("resp", resp);
  //     setConferences(resp.conferences);
  //   });
  // };

  return (
    // console.log("conf", conferences),
    <div className="flex min-h-screen flex-col justify-between w-100 bg-[url('/square.svg')] bg-no-repeat">
      <>
        {/* <HeroSection /> */}
        {/* <Timeline conferences={data.conferences} /> */}
        {/* <SponsorsList conferenceData={data.conferences} /> */}
      </>
    </div>
  );
}

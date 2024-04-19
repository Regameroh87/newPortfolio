import { MacbookScroll } from "../components/ui/macbook-scroll";
import {  BackgroundBeams} from "../components/ui/background-beams";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <BackgroundBeams/>
        <MacbookScroll title="Rodrigo Gamero" src="http://localhost:3000/"/>
    </main>
  );
}


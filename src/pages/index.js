import PageFooter from "@/components/page-footer";
import PageGraph from "@/components/page-graph";
import PageHeader from "@/components/page-header";
import { OptionProvider } from "@/context/optionsContext";


export default function Home() {
  return (
    <>
    <OptionProvider>
      <PageHeader/>
      <PageGraph/>
      <PageFooter/>
    </OptionProvider>
    </>
  )
}

import { Categories, Container, Filters, SortPopup, Title, TopBar } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container className="mt-8">
        <Title text="Всё пиво" size="lg" className="font-extrabold"></Title>
      </Container>
      <TopBar></TopBar>
      {/* <div style={{height: '3000px'}}></div> */}
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters></Filters>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Список товаров
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

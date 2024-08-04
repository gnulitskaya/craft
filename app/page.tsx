import { Categories, Container, Filters, ProductCard, ProductsGroupList, SortPopup, Title, TopBar } from "@/components/shared";
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
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters></Filters>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* Список товаров */}
              <ProductsGroupList
                categoryId={0}
                title="Светлое"
                items={[
                  {
                    id: 0,
                    name: "4Brewers Доза [Mango + Pineapple+Grafefruit]",
                    description: "4Пивовара Доза [Манго + Ананас+Грейпфрут] 0,5л.*20",
                    price: 292,
                    imageUrl: "./products/product1.png"
                  },
                  {
                    id: 1,
                    name: "4Brewers Доза [Black Currant]",
                    description: "4Пивовара Доза [Черная смородина] 0,5л.*12",
                    price: 276,
                    imageUrl: "./products/product2.png"
                  },
                  {
                    id: 2,
                    name: "4Brewers Доза [Apple + Pear + Goosberry + Vanilla]",
                    description: "4Пивовара Доза [Яблоко + Груша + Крыжовник + Ваниль] 0,5л.*12",
                    price: 309,
                    imageUrl: "./products/product3.png"
                  }
                ]}
              ></ProductsGroupList>

              <ProductsGroupList
                categoryId={1}
                title="Темное"
                items={[
                  {
                    id: 0,
                    name: "4Brewers Доза [Mango + Pineapple+Grafefruit]",
                    description: "4Пивовара Доза [Манго + Ананас+Грейпфрут] 0,5л.*20",
                    price: 292,
                    imageUrl: "./products/product1.png"
                  },
                  {
                    id: 1,
                    name: "4Brewers Доза [Black Currant]",
                    description: "4Пивовара Доза [Черная смородина] 0,5л.*12",
                    price: 276,
                    imageUrl: "./products/product2.png"
                  },
                  {
                    id: 2,
                    name: "4Brewers Доза [Apple + Pear + Goosberry + Vanilla]",
                    description: "4Пивовара Доза [Яблоко + Груша + Крыжовник + Ваниль] 0,5л.*12",
                    price: 309,
                    imageUrl: "./products/product3.png"
                  }
                ]}
              ></ProductsGroupList>
            </div>
          </div>
        </div>
      </Container>
    </main >
  );
}

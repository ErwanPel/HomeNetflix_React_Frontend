import Images from "./Images";
import Title from "./Title";

const Content = ({ data }) => {
  return (
    <main>
      {data.map((element, index) => {
        return (
          <section key={index}>
            <Title category={element.category}></Title>
            <div>
              {element.images.map((picture, index) => {
                return <Images key={index} src={picture} />;
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Content;

import Cards from "./cards";


function Main(props) {
  return (
    <>
    <div>Contenu</div>
    {(props.listSchool).map((obj, i) => {
        return <Cards obj={obj} key={i}></Cards>
    })}
   </>
  );
  
}

export default Main;
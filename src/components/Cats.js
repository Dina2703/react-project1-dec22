import React from "react";
import CardCat from "./CardCat";

function Cats() {
  return (
    <div>
      <div id="cats">
        <CardCat
          img="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60}"
          name="Butterfly"
          tel="(404) 345-1234"
          email="butterfly@cat.meow"
        />
        <CardCat
          img="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          name="Mr. Whiskaz"
          tel="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <CardCat
          img="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          name="Oscar"
          tel="(404) 345-1234"
          email="oscar@cat.meow"
        />
        <CardCat
          img="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          name="Fluffy"
          tel="(404) 345-1234"
          email="fluffy@cat.meow"
        />
      </div>
    </div>
  );
}

export default Cats;

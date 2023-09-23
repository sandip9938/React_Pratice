import React from "react";
import styles from "./Home.css";
function Home() {
  return (
    <div>
      <main className="maini">
        <div className="contacthead">
          <h1>CONTACT US</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            vero sapiente corporis omnis, suscipit recusandae{" "}
            <span>
              minus pariatur inventore maiores animi veniam dolor sed mollitia
              perferendis amet tenetur aliquid eius dolores officia iste! Nisi
              ut nesciunt, tempore odio, eum consequatur sequi blanditiis
            </span>{" "}
            aliquam repellat expedita praesentium, autem mollitia ipsum nihil
            natus molestias sed eos aperiam quaerat suscipit tempora.
            Repudiandae possimus tempora corporis molestiae exercitationem
            facilis, officia rerum earum, est corrupti perferendis!
          </p>
        </div>
        <div className="sec">
          <section className="left">
            <div className="ubtn">
              <button>VIA SUPPORT CHAT</button>
              <button>VIA CALL</button>
            </div>

            <div className="allinput">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="trxt" placeholder=" Wtrie Here" />
            </div>
            <button>Submit</button>
          </section>
          <section className="right">
            <img src="./src/assets/customer.webp" alt="" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;

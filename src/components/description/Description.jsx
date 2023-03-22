import React from "react";

const Description = ({ product }) => {
  return (
    <div className={`py-5 px-4 w-full`}>
      <p className={`text-[16px] text-white leading-[24px] mb-3`}>
        {product.desc}!
      </p>
      <p className={`text-[16px] text-white leading-[24px] mb-3`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        tempore dignissimos minima soluta quidem facere porro! Ipsam,
        perferendis voluptatibus! Quis animi autem neque sit eos omnis veniam,
        facilis libero provident. Voluptates minima natus laudantium, itaque
        dolorem ea et omnis corrupti ipsum labore incidunt reprehenderit
        repellat earum praesentium ipsam totam minus suscipit iusto iure. Sequi,
        eaque aspernatur assumenda temporibus id nobis! Minus quis vel officia
        sint a quasi. Adipisci quibusdam, tempora velit ratione aut eius culpa
        magni, recusandae quas labore repellat.
      </p>
      <p className={`text-[16px] text-white leading-[24px]`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        tempore dignissimos minima soluta quidem facere porro! Ipsam,
        perferendis voluptatibus! Quis animi autem neque sit eos omnis veniam,
        facilis libero provident. Voluptates minima natus laudantium, itaque
        dolorem ea et omnis corrupti ipsum labore incidunt reprehenderit
        repellat earum praesentium ipsam totam minus suscipit iusto iure. Sequi,
        eaque aspernatur assumenda temporibus id nobis! Minus quis vel officia
        sint a quasi. Adipisci quibusdam, tempora velit ratione aut eius culpa
        magni, recusandae quas labore repellat.
      </p>
    </div>
  );
};

export default Description;

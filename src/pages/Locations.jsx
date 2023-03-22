import React from "react";
import { branch1, branch2, branch3 } from "../assets";
import { Branches } from "../components";

const Locations = () => {
  const shopBranches = [
    {
      map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6281198852944!2d69.28202075098342!3d41.316953008219734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5200a480655%3A0xeabc5e2bd1cdaae9!2sIT-Academy!5e0!3m2!1sru!2s!4v1679481321533!5m2!1sru!2s`,
      tel: `+998 94 1231231`,
      address: `7 Shahrisabz ko'chasi, Tashkent 100000, Узбекистан`,
      openTime: `09:00 - 21:00`,
    },
    {
      map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23971.418820188643!2d69.21131317910155!3d41.32131970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3de831c4b3%3A0xf30d4af3459af31a!2sUPG%20-%20HOME%20FOR%20GAMERS!5e0!3m2!1sru!2s!4v1679482461668!5m2!1sru!2s`,
      tel: `+998 94 7777777`,
      address: `Ташкент Алишера, 37 Navoi Avenue, Tashkent 100011, Узбекистан`,
      openTime: `08:00 - 20:00`,
    },
    {
      map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23971.418820188643!2d69.21131317910155!3d41.32131970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bd615ee3445%3A0x9286aec01778a2ef!2sUPG!5e0!3m2!1sru!2s!4v1679482522228!5m2!1sru!2s`,
      tel: `+998 94 1231231`,
      address: `Торговые ряды "Малика". Магазин B24 Ташкент, 100200, Узбекистан`,
      openTime: `08:00 - 18:00`,
    },
  ];

  return (
    <div id="location">
      <div className="container">
        <div className={`w-full flex justify-center gap-3 items-start mb-8 flex-wrap`}>
          <img
            src={branch1}
            alt="branch 1"
            className={` w-2/3 md:w-1/3 object-contain rounded-md`}
          />
          <img
            src={branch2}
            alt="branch 2"
            className={` w-2/3 md:w-1/3 object-contain rounded-md`}
          />
          <img
            src={branch3}
            alt="branch 3"
            className={` w-2/3 md:w-1/3 object-contain rounded-md`}
          />
        </div>

        <div>
          {shopBranches.map((branch) => (
            <Branches key={branch.address} branchInfo={branch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;

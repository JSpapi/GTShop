import React from "react";
import { blogerR1, blogerR2, blogerR3 } from "../assets";
import { BlogersReview } from "../components";

const Reviews = () => {
  const blogersData = [
    {
      name: "Jushy",
      viewers: "2.5M Followers",
      job: "TikTok Content Creator",
      text: `Kaiser 3 абсолютно удобен. Мне очень нравится его мягкое прикосновение, когда я каждый день сажусь, готовясь к игре или работе. Все, что я хочу сказать, это то, что это кресло делает мою задницу счастливой. Спасибо, GTShop!`,
      img: blogerR1,
    },
    {
      name: "GadgetryTech",
      viewers: "17K Followers",
      job: "YouTube Content Creator",
      text: `Я действительно думаю, что это ценный вариант, если вы ищете хорошее игровое кресло. Это похоже на танк. Это так твердо в системе блокировки. Я имею в виду, что он действительно построен невероятно хорошо.`,
      img: blogerR3,
    },
    {
      name: "AnnaNanner",
      viewers: "19.9K Followers",
      job: "Twitch Streamer",
      text: `Ткань Kaiser 3 удобна. Удобно сидеть на нем во время игры.`,
      img: blogerR2,
    },
  ];
  return (
    <div id="reviews">
      <div className="container">
        <BlogersReview blogersData={blogersData} />
      </div>
    </div>
  );
};

export default Reviews;

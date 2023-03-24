import React from "react";
import {
  myTeam,
  myTeam2,
  support,
  support2,
  winners,
  winners2,
} from "../assets";
import CyberSportEvent from "../components/cyberSportEvent/CyberSportEvent";

const CyberSport = () => {
  const cyberSportEvents = [
    {
      title: "Победители кубка GTShop по CSGO 2022",
      subTitle: "Faze Clan vs NAVI",
      info: "Финал: 3-2",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat expedita iusto asperiores fugit qui! Iure velit harum cumque ipsum assumenda rerum consectetur quia magnam, architecto dolore deserunt doloribus est? Voluptates consequuntur minus commodi nobis molestiae optio quia. Itaque sit molestias nihil rem eum, labore autem quasi architecto natus est officia.`,
      watchLink: `https://www.youtube.com/watch?v=XrDvR5a_db4`,
      img: winners,
      img2: winners2,
    },
    {
      title: "Наша команда по CSGO стало лучшей командой 2022",
      subTitle: "Выиграла чемпионат Major 2022",
      info: "Финал: 3-0",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat expedita iusto asperiores fugit qui! Iure velit harum cumque ipsum assumenda rerum consectetur quia magnam, architecto dolore deserunt doloribus est? Voluptates consequuntur minus commodi nobis molestiae optio quia. Itaque sit molestias nihil rem eum, labore autem quasi architecto natus est officia.`,
      watchLink: `https://www.youtube.com/watch?v=9up5loS0PGQ`,
      img: myTeam,
      img2: myTeam2,
    },
    {
      title: "Мы активно поддерживаем молодых кибер спортсменов",
      subTitle: "Спонсируем школы и академии",
      info: "Ежегодно нашых молодых спротсмеов отбирают лучшие международные команды",
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat expedita iusto asperiores fugit qui! Iure velit harum cumque ipsum assumenda rerum consectetur quia magnam, architecto dolore deserunt doloribus est? Voluptates consequuntur minus commodi nobis molestiae optio quia. Itaque sit molestias nihil rem eum, labore autem quasi architecto natus est officia.`,
      watchLink: `#!`,
      img: support,
      img2: support2,
    },
  ];

  return (
    <div id="cybersport">
      <div className="container">
        {cyberSportEvents.map((event) => (
          <CyberSportEvent data={event} key={event.title} />
        ))}
      </div>
    </div>
  );
};

export default CyberSport;

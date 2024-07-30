'use client';
import React, { useEffect } from "react";
import Image from "next/image";

import { GameController } from "@/HTMLElementGameTemplete/GameController";
import { GameElement } from "@/HTMLElementGameTemplete/GameElement";




export default function Home() {


  let frame = 0;
  function start() {
    new GameController("gameController", null, null);
    setInterval(update, 1000 / 60);
    console.log(window.innerWidth + " : " + window.innerHeight);
  }

  function update() {
    frame++;
    //SetStyle(assets["world"],(frame/128),(50+Math.sin(frame/128)*25),100 ,(frame*2),getRandomColor());
    for (let id in GameElement.GameElementColletion) {
      GameElement.GameElementColletion[id].update(
        GameElement.GameElementColletion[id]
      );
    }
  }

  useEffect(() => {
    start()
  }, [])
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex  min-h-screen ">
      <div className="w-full relative" id="game_container">

      </div>
    </main>
  );
}

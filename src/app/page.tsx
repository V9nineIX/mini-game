'use client';
import React, { useEffect } from "react";
import Image from "next/image";

import { GameController } from "@/HTMLElementGameTemplete/GameController";
import { GameElement } from "@/HTMLElementGameTemplete/GameElement";
import { useNFT } from "@/hooks/useNFT";
import { useAccount } from "wagmi";
import NFTCard from "@/components/NFTCard";

export default function Home() {

  const { fetchNFT, nftData } = useNFT()
  const { isConnected } = useAccount()

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

  const onFetchNFT = async () => {
    await fetchNFT();
  }

  useEffect(() => {

    start()
  }, [])

  useEffect(() => {
    if (isConnected) {
      onFetchNFT()
    }
  }, [isConnected])

  // console.log(nftData)

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex  min-h-screen ">
      <div className="w-full relative" id="game_container">

      </div>

      {/* 
      <div className="grid grid-cols-5 bg-red-400 w-full mt-20">
        {nftData.length > 0 && nftData.map((nft, index) => {
          // const { metaData } = nft;
          return (
            <NFTCard
              key={index}
              index={index}
              nft={nft}
              imageId={nft.imageId}
            />
          );
        })}
      </div> */}

    </main>
  );
}

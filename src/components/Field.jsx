import React from "react";
const fieldImg = new URL('../assets/soccer-field.jpeg', import.meta.url);
import Player from './Player';

export default function Field() {
    return (
        <div className="field__container">
            <img src={fieldImg.href} className="field" />
            <Player color="#919191" player="Aastha" />
            <Player color="#e8eb24" player="Tait" />
            <Player color="#e89229" player="Linco" />
            <Player color="#38f712" player="Isaac" />
            <Player color="#191d88" player="Nealy" />
            <Player color="#b700ff" player="Danica" />
            <Player color="#eb0b43" player="Femi" />
            <Player color="#0bebdc" player="Jordan" />
            <Player color="#029402" player="Efrain" />
            <Player color="#ff0101" player="Patrick" />
            <Player color="#0167ff" player="Riley" />
            <Player color="#ff01ea" player="Elyse" />
        </div>
    )
}
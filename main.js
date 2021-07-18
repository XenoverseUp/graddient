import * as THREE from "three"
import FOG from "vanta/dist/vanta.fog.min"
import "./style.css"

const section = document.getElementsByTagName("section")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

let speed = 1.5

const effect = FOG({
  el: section,
  THREE,
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0xca00d4,
  midtoneColor: 0xff0000,
  lowlightColor: 0xffed00,
  baseColor: 0x1c0036,
  blurFactor: 0.8,
  speed: 1.5,
})

button.addEventListener("click", () => {
  speed = speed === 1.5 ? 4.5 : 1.5
  span.innerText = speed === 1.5 ? "slow" : "fast"

  effect.setOptions({
    speed,
  })
})

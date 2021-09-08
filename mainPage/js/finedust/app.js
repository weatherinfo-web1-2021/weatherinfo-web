import SidoNameList from "./SidoNameList.js";
import { request } from "./api.js";

const DATA = await request("getCtprvnRltmMesureDnsty", "서울");

const {
  response: {
    body: { items },
  },
} = DATA;

const $target = document.querySelector(".finedust");

new SidoNameList({
  $target,
  initialState: items,
});